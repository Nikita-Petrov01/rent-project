const cookieConfig = require('../configs/cookie.config');
const authService = require('../services/auth.service');

const authController = {
  async signUp(req, res) {
    const { email, name, password } = req.body;
    try {
      const { user, accessToken, refreshToken } = await authService.signUp(
        email,
        name,
        password,
      );
      res
        .status(200)
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (error) {
      if (
        error.message === 'Отсутствуют обязательные поля' ||
        error.message === 'Пользователь уже существует'
      ) {
        return res.status(400).json({ error: error.message });
      }
      console.log(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  },

  async logIn(req, res) {
    const { email, password } = req.body;
    try {
      const { user, accessToken, refreshToken } = await authService.logIn(
        email,
        password,
      );
      res
        .status(200)
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (error) {
      if (
        error.message === 'Отсутствуют обязательные поля' ||
        error.message === 'Не верный логин или пароль'
      ) {
        return res.status(401).json({ error: error.message });
      }
      console.log(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  },

  async logOut(req, res) {
    try {
      await authService.logOut();
      res.clearCookie('refreshToken').sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  },
};

module.exports = authController;
