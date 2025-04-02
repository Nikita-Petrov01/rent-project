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
        title: 'Санкт-Петербург (Ленинградская область)',
        description: 'Квартира в центре Санкт-Петербурга',
        price: 100.000,
        address: 'Санкт-Петербург, ул. Большая Конюшенная, д. 19',
        image: ['https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/e3f0f59b-4190-47d2-addf-f54b78ff4782.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/ac0ae5bf-ae4c-4a6f-9cc2-6e1b10556859.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/6f8b5dbe-aa32-4068-a730-7b344ce1ea43.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/20c7792c-a483-45d0-88a5-f39b5a092779.jpg?im_w=480'],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Череповец (Вологодская область)',
        description: 'Комната на окраине Череповца',
        price: 50.000,
        address: 'Череповец, ул. Пушкинская, д. 19',
        image: ['https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/e3f0f59b-4190-47d2-addf-f54b78ff4782.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/ac0ae5bf-ae4c-4a6f-9cc2-6e1b10556859.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/6f8b5dbe-aa32-4068-a730-7b344ce1ea43.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/20c7792c-a483-45d0-88a5-f39b5a092779.jpg?im_w=480'],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Сочи (Краснадарский край)',
        description: 'Дом у морского побережья',
        price: 150.000,
        address: 'Сочи, ул. Зеленая д. 7',
        image: ['https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/e3f0f59b-4190-47d2-addf-f54b78ff4782.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/ac0ae5bf-ae4c-4a6f-9cc2-6e1b10556859.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/6f8b5dbe-aa32-4068-a730-7b344ce1ea43.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/20c7792c-a483-45d0-88a5-f39b5a092779.jpg?im_w=480'],
        categoryId: 3,
        userId: 1,
      },
      {
        title: 'Магадан (Магаданская область)',
        description: 'Особняк возле ИК-3 Магадан',
        price: 280.000,
        address: 'Магадан, ул. Мирная д. 21',
        image: ['https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/e3f0f59b-4190-47d2-addf-f54b78ff4782.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/ac0ae5bf-ae4c-4a6f-9cc2-6e1b10556859.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/6f8b5dbe-aa32-4068-a730-7b344ce1ea43.jpg?im_w=480', 'https://a0.muscache.com/im/pictures/airflow/Hosting-8131091/original/20c7792c-a483-45d0-88a5-f39b5a092779.jpg?im_w=480'],
        categoryId: 3,
        userId: 1,
      },
    ])
  },

 

  async down(queryInterface, Sequelize) {},
};
