const express = require('express');
const likeRouter = express.Router();
const { Like } = require('../../db/models');

likeRouter.get('/', async (req, res) => {
    try {
        const likes = await Like.findAll();
        res.status(200).json(likes);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

likeRouter.post('/', async (req, res) => {
    try {
        const like = await Like.create(req.body);
        res.status(201).json(like);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = likeRouter

// // Добавляем middleware для проверки аутентификации
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
