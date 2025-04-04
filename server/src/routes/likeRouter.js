const express = require('express');
const likeRouter = express.Router();
const { Like } = require('../../db/models');
const { Advertisement } = require('../../db/models');

likeRouter.get('/:userId', async (req, res) => {
  try {
      const {userId} = req.params
      const likes = await Like.findAll({
        where: { userId }, 
        include: [Advertisement] 
    });

    const advert = likes.map(like => like.Advertisement);

    res.status(200).json(advert);
    
      
  } catch (error) {
      console.log(error);
      res.status(500).send(error);
  }
})


likeRouter.post('/', async (req, res) => {
    try {
        const {userId, advertisementId} = req.body

        const existingLike = await Like.findOne({
          where: {userId, advertisementId}
        });

        if(existingLike) {
          return res.status(400).json({message: 'Лайк уже существует'});
        }

        const like = await Like.create ({userId, advertisementId});
        res.status(201).json(like);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

likeRouter.delete('/:userId/:advertisementId', async (req, res) => {
  try {
    const {userId, advertisementId} = req.params;
    const deleteLike = await Like.destroy({where: {userId, advertisementId}});

    if(deleteLike === 0) {
      return res.status(404).send('Лайк не найден')
    }
    res.status(200).json({
      success: true,
      message: 'Лайк удален'
    })
  } catch (error) {
    res.status(500).json({ 
      message: 'Ошибка при удалении лайка',
      error: error.message 
    });
  }
})

likeRouter.get('/check/:userId/:advertisementId', async (req, res) => {
  try {
    const {userId, advertisementId} = req.params;
    const like = await Like.findOne({
      where: {userId, advertisementId}
    }) 

    res.status(200).json({
      isLiked: !!like,
      likeId: like?.id
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Ошибка при проверке лайка',
      error: error.message 
    });
  }
})


likeRouter.get('/')


module.exports = likeRouter

// Добавляем middleware для проверки аутентификации
// likeRouter.post('/:advertisementId', async (req, res) => {
//   try {
//     if (!req.user) {
//       return res.status(401).json({ message: 'Необходима авторизация' });
//     }

//     const { advertisementId } = req.params;
//     // const userId = req.user.id; // Получаем ID из JWT токена

//     const existingLike = await Like.findOne({
//       where: { userId, advertisementId }
//     });

//     if (existingLike) {
//       return res.status(400).json({ message: 'Вы уже поставили лайк этому объявлению' });
//     }

//     const like = await Like.create({ userId, advertisementId });
//     res.status(201).json(like);
//   } catch (error) {
//     console.error('Ошибка при добавлении лайка:', error);
//     res.status(500).json({ message: 'Ошибка сервера' });
//   }
// });

// module.exports = likeRouter;

// module.exports = likeRouter;

// likeRouter.delete('/:advertisementId', async (req, res) => {
//   try {
//     await Like.destroy({
//       where: {
//         userId: req.user.id,
//         advertisementId: req.params.advertisementId,
//       },
//     });

//     res.status(200).json({message: 'Лайк удален'});
//   } catch (error) {
//     console.error('Ошибка при удалении лайка:', error);
//     res.status(500).json({message: 'Ошибка при удалении лайка',
//     });
//   }
// });

// module.exports = likeRouter;
