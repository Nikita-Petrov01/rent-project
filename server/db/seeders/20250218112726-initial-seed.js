const bcrypt = require('bcrypt');

const {User, Category, Advertisement} = require('../models');
const category = require('../models/category');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'admin',
        email: 'admin@admin',
        password: await bcrypt.hash('adminn', 10),
        role: 'admin'
      },
      {
        name: 'Bob',
        email: 'bob@bob',
        password: await bcrypt.hash('123456', 10),
        role: 'user'
      },
      {
        name: 'Alex',
        email: 'alex@alex',
        password: await bcrypt.hash('123456', 10),
        role: 'user'
      }
    ])

    await Category.bulkCreate([
      {
        title: 'Комнаты',
      },
      {
        title: 'Квартиры',
      },
      {
        title: 'Дома',
      }
    ])

    await Advertisement.bulkCreate([
      {
        title: 'Санкт-Петербург, исторический центр',
        description: 'Элегантная квартира в старинном доме в самом сердце Санкт-Петербурга с видом на канал Грибоедова. Высокие потолки с лепниной, большие французские окна и паркетный пол создают неповторимую атмосферу северной столицы. Всего пять минут пешком до Невского проспекта, Дворцовой площади и Эрмитажа. В квартире сделан современный ремонт с сохранением исторических деталей - восстановлены старинные двери, отреставрирована печь с изразцами. Просторная спальня с двуспальной кроватью, гостиная с мягким уголком и раскладным диваном, полностью оборудованная кухня со всей необходимой техникой. В шаговой доступности лучшие рестораны города, театры и музеи. Идеальный вариант для тех, кто хочет почувствовать настоящий дух Петербурга.',
        price: 120000,
        address: 'наб. канала Грибоедова, д. 15',
        image: [
          'https://i.pinimg.com/originals/99/98/5e/99985ec609fab0294057f298c5361b8e.jpg',
          'https://cdn.optipic.io/site-104942/upload/iblock/59d/giusq5wr7wp80qd1bt3g0wt8e89v43qw.jpeg',
          'https://avatars.mds.yandex.net/i?id=873db91915989c3c34c6f418d53b54c9f92e0802-6520328-images-thumbs&n=13',
          'https://i.pinimg.com/originals/de/87/86/de8786df6b7ed61b2a59a51654eb4538.jpg',
          'https://avatars.mds.yandex.net/get-altay/5485499/2a0000017dc061fd3723b44ad48c5cc14bc2/XXL_height'
        ],
        categoryId: 2,
        userId: 1
      },
      {
        title: 'Москва, апартаменты у Красной площади',
        description: 'Стильные современные апартаменты с панорамными окнами и видом на Кремль. Просторная студия 50 кв.м с дизайнерским ремонтом, кухонным островом и зоной отдыха. Удобная двуспальная кровать с ортопедическим матрасом, просторная душевая кабина с тропическим душем. В пешей доступности все главные достопримечательности - Красная площадь, ГУМ, Большой театр. Роскошный вид на ночную подсветку Кремля. В доме есть фитнес-центр с бассейном и спа-зоной. Консьерж-сервис круглосуточно. Прекрасный вариант для деловой поездки или романтического путешествия.',
        price: 150000,
        address: 'ул. Никольская, д. 10',
        image: [
          'https://images.unsplash.com/photo-1520105072000-f44fc083e508?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0268?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1493809842364-78817add7ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
        ],
        categoryId: 2,
        userId: 1
      },
      {
        title: 'Сочи, вилла у моря',
        description: 'Роскошная трехэтажная вилла с частным пляжем и инфранискрасным бассейном в престижном районе Сочи. Территория 15 соток с тропическим садом, зоной барбекю и панорамным видом на море. В доме четыре спальни с кроватями king-size, просторная гостиная с камином, кухня-столовая с техникой премиум-класса, домашний кинотеатр и винный погреб. Собственный спуск к оборудованному пляжу с шезлонгами и зонтиками. Персональный обслуживающий персонал включая повара и горничную. Идеальное место для VIP-отдыха в любое время года. В пяти минутах езды центр Сочи с ресторанами и развлечениями.',
        price: 350000,
        address: 'ул. Приморская, д. 42',
        image: [
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          'https://avatars.mds.yandex.net/i?id=7cec61b84c65140e1b13239362158fce2c504e0c-7083339-images-thumbs&n=13',
          'https://avatars.mds.yandex.net/i?id=06a5d1273ec466f5bf1691e019f87d813b49758b-5887129-images-thumbs&n=13',
          'https://avatars.mds.yandex.net/i?id=42248a29240565dc34e094c8e23cfcbe8f2f94cb-8497871-images-thumbs&n=13'
        ],
        categoryId: 3,
        userId: 1
      },
      {
        title: 'Казань, апартаменты в историческом центре',
        description: 'Уютные апартаменты в отреставрированном купеческом особняке в самом сердце Казани. Всего 10 минут пешком до Кремля и набережной. Интерьер сочетает современный комфорт и элементы татарского декора - расписные панно, витражи и кованые детали. Просторная спальня с балконом, гостиная с мягкими диванами, полностью оборудованная кухня. В шаговой доступности кафе с национальной кухней, сувенирные лавки и музеи. Особый шарм придают виды на старинные улочки и вечернюю подсветку мечетей. Прекрасный вариант для знакомства с культурой Татарстана.',
        price: 80000,
        address: 'ул. Баумана, д. 25',
        image: [
          'https://avatars.mds.yandex.net/i?id=09f84e04e3a21d540c438da78c1ff475a0fdc11d-9065994-images-thumbs&n=13',
          'https://avatars.mds.yandex.net/i?id=b95d5b83b38667ba60763c2eb8dda8884f6dc90b-9211418-images-thumbs&n=13',
          'https://avatars.mds.yandex.net/i?id=515dcbf4f208107e4fea784eb5beb5f698446049-6493270-images-thumbs&n=13',
          'https://avatars.mds.yandex.net/i?id=4e443dd8cab6b13064054b0b33e7d4dd5885776a-4568663-images-thumbs&n=13',
          'https://avatars.mds.yandex.net/i?id=54fbe18fc53d1712a70c0633153c977616fe7fae-9873353-images-thumbs&n=13',
          'https://avatars.mds.yandex.net/i?id=f83a43876d96b0722a436fff4186b707477bb2bc-5878137-images-thumbs&n=13'
        ],
        categoryId: 2,
        userId: 1
      }
    ]);
  },

 

  async down(queryInterface, Sequelize) {},
};
