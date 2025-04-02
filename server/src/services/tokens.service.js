const generateTokens = require('../utils/generateTokens');

class TokensService {
  async refresh(user) {
    if (!user) {
      throw new Error('Пользователь не авторизован');
    }

    const tokens = generateTokens({ user });
    return { user, ...tokens };
  }
}

module.exports = new TokensService();
