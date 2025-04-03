const {Advertisement} = require('../../db/models');
const {default: Gigachat} = require('gigachat');
require('dotenv').config();

class GigaService {

    constructor() {
        this.giga = new Gigachat({
            credentials: process.env.GIGACHAT_AUTH_KEY,
            model: 'GigaChat',
        })
    }

    async getGigaResponse(query, advertisements) {
        console.log('-------------------------', advertisements);
        const resp = await this.giga.chat({
            messages: [
              {
                role: "assistant",
                content: `Ты ассистент по подбору жилья. Тебе будет предоставлен JSON-массив с объявлениями и запрос пользователя.
                    Твоя задача - выбрать ОДИН наиболее подходящий вариант и вернуть ТОЛЬКО его числовой ID без каких-либо пояснений.
                    Если ничего не подходит - верни 0.
                    Данные: ${JSON.stringify(advertisements)}`
              },
              {
                role: "user",
                content: `Запрос: ${query}. Верни только ID подходящего варианта (число) или 0, если ничего не найдено.`,
              },
            ],
            temperature: 0.3,
            max_tokens: 10,
          });
          
          const response = resp.choices[0]?.message.content;
          console.log('fdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', response);
          const idMatch = response.match(/\d+/);
          return idMatch ? parseInt(idMatch[0]) : 0;
    }

    async getAllAdvertisements() {
        const advertisements = await Advertisement.findAll({
            attributes: ['id', 'title', 'description', 'price', 'address'],
        });
        const result = advertisements.map((item) => {
            return {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                address: item.address,
            }
        })
        return result;
    }
}

module.exports = new GigaService();