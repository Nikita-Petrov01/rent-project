const bcrypt = require('bcrypt');

const { User, Category, Advertisement } = require('../models');
const category = require('../models/category');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'admin',
        email: 'admin@admin',
        password: await bcrypt.hash('adminn', 10),
        role: 'admin',
      },
      {
        name: 'Bob',
        email: 'bob@bob',
        password: await bcrypt.hash('123456', 10),
        role: 'user',
      },
      {
        name: 'Alex',
        email: 'alex@alex',
        password: await bcrypt.hash('123456', 10),
        role: 'user',
      },
    ]);

    await Category.bulkCreate([
      {
        title: 'Комнаты',
      },
      {
        title: 'Квартиры',
      },
      {
        title: 'Дома',
      },
    ]);

    await Advertisement.bulkCreate([
      {
        title: 'Санкт-Петербург. Комната в центре',
        description:
          'Уютная комната в коммунальной квартире в историческом центре. Мебель: кровать, шкаф, письменный стол. Общая кухня и санузел. Рядом метро, магазины, кафе.',
        price: 25000,
        address: 'г. Санкт-Петербург, наб. канала Грибоедова, д. 15',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Nzk3MDk2ODcyNTY0MjcwMzQ5/original/1a8a7649-1106-414b-ac0e-104473df94fd.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Nzk3MDk2ODcyNTY0MjcwMzQ5/original/24e23eeb-d7fa-4fb8-b150-7a45659724c8.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Nzk3MDk2ODcyNTY0MjcwMzQ5/original/5ccc2f73-02d8-4166-9a1a-628cc355fa0e.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/f9a5ac3f-36d6-426b-b8ee-521fff07bcdb.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Nzk3MDk2ODcyNTY0MjcwMzQ5/original/3d1dfda8-ae47-4296-86a2-ccc19b61099e.jpeg?im_w=1200',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Москва. Комната в новостройке',
        description:
          'Светлая комната в современной 3-комнатной квартире. Современный ремонт, мебель, техника. Общая кухня оборудована всем необходимым. 5 мин до метро.',
        price: 35000,
        address: 'г. Москва, ул. Ленинский проспект, д. 72',
        image: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-1176438006817085733/original/e570f136-92ea-4910-9c65-5e46c4a59a87.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1176438006817085733/original/413a1a18-0b94-46df-9172-4fa04595d806.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1176438006817085733/original/c3691f45-c3f8-447d-ade6-950e889314bd.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1176438006817085733/original/7e8f1dd3-e9f8-4fa0-8b6f-ee8243e0c1db.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1176438006817085733/original/10f71e0d-a221-41ba-a2be-6c58e010f47f.jpeg?im_w=720',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Новосибирск. 1-комнатная квартира',
        description:
          'Квартира с современным ремонтом в новом жилом комплексе. Полностью меблирована, есть вся необходимая техника. Парковка, детская площадка во дворе.',
        price: 45000,
        address: 'г. Новосибирск, ул. Кирова, д. 12',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1195688246535638551/original/57a8c824-271b-4f8b-bb14-54d9baaf3178.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1195688246535638551/original/5da7e696-9a1b-4b17-9528-f6c8643a2bbf.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1195688246535638551/original/686abe73-32c3-4fd6-8436-f7b0a14d3cf4.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1195688246535638551/original/00fd562e-9e90-4e06-9117-8770da72e1b1.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1195688246535638551/original/a9c353e2-300a-4332-a19a-e543cefecff7.jpeg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Екатеринбург. 2-комнатная квартира',
        description:
          'Просторная квартира в центре города. Две отдельные спальни, гостиная, кухня-столовая. Ремонт 2023 года. Вид на город. Рядом парк и набережная.',
        price: 60000,
        address: 'г. Екатеринбург, ул. Малышева, д. 56',
        image: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-1370940338280398017/original/4a3c976a-97c7-42ad-bfc2-a9f0d906249c.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1370940338280398017/original/5ed8abe0-11c6-4a1d-91c9-07fb0c7f0124.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1370940338280398017/original/5343264e-5e0f-424b-9f78-e9125e210b34.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1370940338280398017/original/2ef1b20f-898a-46c2-851f-ebfb0715f4a7.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1370940338280398017/original/191feb74-e518-456d-970b-1689889b7dab.jpeg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Пос. Лесной (Подмосковье). Коттедж',
        description:
          'Двухэтажный дом на участке 10 соток. 4 спальни, гостиная с камином, кухня, 2 санузла. Гараж, баня, мангальная зона. Тихий коттеджный поселок в 30 км от МКАД.',
        price: 180000,
        address: 'МО, пос. Лесной, ул. Сосновая, д. 8',
        image: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-749996089802009824/original/8fefceb0-da83-461c-9441-1dc5ce1c0174.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-749996089802009824/original/ce287b09-6f02-4f8a-bc6b-ceb5ebe2648d.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-749996089802009824/original/99931a90-870f-4827-bb41-885519215f74.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-749996089802009824/original/7253c33b-9e2e-4e6e-b562-2a22b3a18374.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-749996089802009824/original/435a1f9b-08fd-40f8-8248-cc5a81f2ab89.jpeg?im_w=720',
        ],
        categoryId: 3,
        userId: 1,
      },
      {
        title: 'Казань. Комната в студенческом общежитии',
        description:
          'Место в 2-местной комнате в благоустроенном общежитии. Есть кровать, шкаф, стол. Общая кухня на этаже. Рядом университет и парк.',
        price: 12000,
        address: 'г. Казань, ул. Студенческая, д. 15',
        image: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-903104855385680120/original/46eaf322-bac1-44c7-a233-351125f99a04.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/miso/Hosting-903104855385680120/original/61108c3f-991f-4aaa-8c9c-d1fc8749a5a7.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-903104855385680120/original/8c0ed62b-3d87-4246-9be6-a47058b70c78.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-903104855385680120/original/6ea6e917-f0ee-47cf-be17-490dbe911f1b.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-903104855385680120/original/cf05143f-c34f-4dbe-87aa-825042e3ebbc.jpeg?im_w=720',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Сочи. Студия в центре',
        description:
          'Компактная студия с современным ремонтом. Совмещенная кухня-гостиная, спальная зона, санузел. В шаговой доступности достопримечательности, кафе, транспорт.',
        price: 40000,
        address: 'г. Сочи, ул. Приморская, д. 25',
        image: [
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM0MDk4NzY=/original/01346968-9dfd-41e1-a122-ccd27500e23c.jpeg?im_w=1200',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM0MDk4NzY=/original/b29b339a-98b0-4f31-b8e9-dd93c908ff26.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM0MDk4NzY=/original/858876f2-36d2-4188-87b9-84f1f018308b.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-53409876/original/e16e39db-c500-4bfc-8a25-539834042a86.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM0MDk4NzY=/original/be39840a-f35c-4068-8413-5ac5511a5ddd.jpeg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Дер. Сосновка (Ленобласть). Загородный дом',
        description:
          'Деревянный дом в экологически чистом районе. 3 комнаты, кухня, веранда. Участок 15 соток с садом. Рядом озеро, лес. Идеально для круглогодичного проживания.',
        price: 90000,
        address: 'Ленобласть, дер. Сосновка, ул. Лесная, д. 3',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MTE3NzQ2OTAwMjM2NDExOQ%3D%3D/original/6008f09f-9a1c-4de4-a8f7-d2fde3f2737e.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1161177469002364119/original/ea104de6-9d48-4707-8a24-d83702515057.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MTE3NzQ2OTAwMjM2NDExOQ%3D%3D/original/cbd6cef4-9429-4f46-ac42-11ec6752df41.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MTE3NzQ2OTAwMjM2NDExOQ%3D%3D/original/042575f2-4773-41e8-ab55-b329d99160c3.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1161177469002364119/original/be05a270-30b9-412b-9c0c-4c0df1d2c95f.jpeg?im_w=720',
        ],
        categoryId: 3,
        userId: 1,
      },
      {
        title: 'Нижний Новгород. Комната в семейной квартире',
        description:
          'Комната в 3-комнатной квартире. Жильцы - семья с ребенком. Общая кухня и санузел. Тихий район, хорошая транспортная доступность.',
        price: 20000,
        address: 'г. Нижний Новгород, ул. Советская, д. 45',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1254337621690859398/original/aa12c7ac-1d37-4c46-b726-01fca717d8d5.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1254337621690859398/original/c10d6abf-5aab-45e5-9a33-a4d889b29b6f.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1254337621690859398/original/81e2cbe1-936a-4a2d-b736-c1a2ecdcfc59.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1254337621690859398/original/5ccb1ee9-8420-4105-80b8-2cd444602335.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1254337621690859398/original/0ab8bc71-fea3-446c-88a6-2ed5a55152c7.jpeg?im_w=720',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Краснодар. 3-комнатная квартира в новостройке',
        description:
          'Просторная квартира с панорамными окнами. 3 отдельные спальни, кухня-гостиная 25 кв.м, 2 санузла. Вид на город. Закрытая территория, паркинг.',
        price: 120000,
        address: 'г. Краснодар, ул. Красная, д. 88',
        image: [
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-807090834004318378/original/99dea4b3-83f5-4722-8b79-ec9aa0930c24.jpeg?im_w=1200',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODA3MDkwODM0MDA0MzE4Mzc4/original/32df0941-ea2f-4b98-8e41-082073e1f200.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODA3MDkwODM0MDA0MzE4Mzc4/original/499e54c0-f482-4f18-bdfe-fd0bd4fb0b87.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-807090834004318378/original/d131bd5d-9de6-4789-bb7c-dabaf9ed9815.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODA3MDkwODM0MDA0MzE4Mzc4/original/f624feaa-3e98-4127-ae83-8bcbc22f1a93.jpeg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Владивосток. Комната в центре',
        description:
          'Комната в 2-комнатной квартире. Современный ремонт, мебель, техника. Общая кухня. Рядом набережная, кафе, магазины.',
        price: 22000,
        address: 'г. Владивосток, ул. Светланская, д. 15',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1251087997317835299/original/f055c3bd-2e3d-4046-bba1-fc53d29b7905.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1251087997317835299/original/e4271edf-afb7-4958-9c03-2561d4046d94.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1251087997317835299/original/b1fb800d-6602-47ad-a244-867efa76d215.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1251087997317835299/original/fab33f6a-c903-406d-b58a-20cfab777978.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1251087997317835299/original/f48da4b1-37f3-4862-8531-01c32b6d4b52.jpeg?im_w=720',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Калининград. 1-комнатная квартира у моря',
        description:
          'Квартира в 5 минутах ходьбы от моря. Балкон с видом на залив. Полностью меблирована, есть кондиционер. Закрытая территория.',
        price: 80000,
        address: 'г. Калининград, ул. Балтийская, д. 25',
        image: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-1287079067290845860/original/a3c68787-8380-4254-9028-f18968e949d4.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NzA3OTA2NzI5MDg0NTg2MA%3D%3D/original/89ffea7d-ce77-44be-9f03-20c66d9ec44d.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NzA3OTA2NzI5MDg0NTg2MA%3D%3D/original/6ef3b9c1-d18f-46e1-8130-905ea2b28551.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NzA3OTA2NzI5MDg0NTg2MA%3D%3D/original/ff16aa4a-6a76-4f16-8a63-e5ce2ecee5f6.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-1287079067290845860/original/7dc7ad69-5a35-4204-a0fd-54dc6d9e9f62.jpeg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Пос. Лесное (Карелия). Коттедж на озере',
        description:
          'Деревянный дом на берегу озера. 3 спальни, гостиная с камином, сауна. Участок с выходом к воде. Рыбалка, грибы, ягоды. Полная автономия.',
        price: 150000,
        address: 'Респ. Карелия, пос. Лесное, ул. Озерная, д. 1',
        image: [
          'https://a0.muscache.com/im/pictures/4d3c846d-ced9-425a-ba33-f84619941c25.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/f421eb0b-8bee-4f8c-a4ee-328df98ef2f7.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/ea7cd830-6fe8-42e7-be83-b8259f4a693c.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/24634d23-5084-441a-958b-86d10d625ced.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/18130a98-5f07-44b8-9da0-f2ff4d2fa986.jpg?im_w=720',
        ],
        categoryId: 3,
        userId: 1,
      },
      {
        title: 'Ростов-на-Дону. Комната в новом доме',
        description:
          'Комната в новой 3-комнатной квартире. Современный ремонт, новая мебель. Общая кухня с техникой. Район с развитой инфраструктурой.',
        price: 28000,
        address: 'г. Ростов-на-Дону, ул. Большая Садовая, д. 12',
        image: [
          'https://a0.muscache.com/im/pictures/airflow/Hosting-25591153/original/17c57209-ce8a-4033-a20e-6741e8cf9b95.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/airflow/Hosting-25591153/original/3840e78f-8579-48c3-a7fc-811b4a6308bb.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/airflow/Hosting-25591153/original/812bc1a5-0b03-4f8b-b3ae-07dd17881930.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/airflow/Hosting-25591153/original/ded8e0e0-b90f-437b-987b-ac62b80680d8.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/airflow/Hosting-25591153/original/8e4c5fcb-4ea4-450f-918f-eccd305af7d4.jpg?im_w=720',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Самара. 2-комнатная квартира',
        description:
          'Уютная квартира в тихом районе. Две комнаты, кухня, санузел. Мебель, техника. Во дворе детская площадка, парковка. 10 мин до метро.',
        price: 55000,
        address: 'г. Самара, ул. Ленинградская, д. 34',
        image: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-645519847613114230/original/3df08e1c-ba62-47e2-b83b-da35cd67a996.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/miso/Hosting-645519847613114230/original/a9803aa4-80f5-487b-b313-565e4b5ff9af.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-645519847613114230/original/7a268c8a-5f8d-40e8-acb2-fd1f4892b445.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-645519847613114230/original/593212ef-52d5-4293-8887-b44a10238676.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-645519847613114230/original/e17b4d33-208d-4ebf-846f-eb036861dd74.jpeg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Пос. Зеленый (Московская область). Таунхаус',
        description:
          '2-уровневый таунхаус в коттеджном поселке. 3 спальни, гостиная, кухня-столовая, 2 санузла. Свой дворик с зоной отдыха. Охраняемая территория.',
        price: 110000,
        address: 'МО, пос. Зеленый, ул. Вишневая, д. 7',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1238374448060200020/original/ab273788-d3f7-4d5b-b43a-147675a4fb10.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1238374448060200020/original/bd41a811-470b-4e9b-9e12-b16b80ba43f6.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1238374448060200020/original/9debe9b3-67e6-44e2-95c2-22cb9ecb53e1.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1238374448060200020/original/bd91795f-ab0f-4989-bfd2-60d7e50c8501.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1238374448060200020/original/7d169a2b-1798-46d1-ab43-00de842e7b21.jpeg?im_w=720',
        ],
        categoryId: 3,
        userId: 1,
      },
      {
        title: 'Уфа. Комната для студентов',
        description:
          'Место в 3-местной комнате. Недорогой вариант для студентов. Общая кухня, санузел. Рядом университеты, общественный транспорт.',
        price: 10000,
        address: 'г. Уфа, ул. Ленина, д. 8',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-52259660/original/fba269df-ce7d-4062-98d4-19d292647cb9.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-52259660/original/5b76b102-9ccd-43c6-b586-f6eea9ea52ed.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-52259660/original/0003c6e1-5c1b-41df-bc81-1edb68227c22.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-52259660/original/fd0e66ad-d9db-4c0a-b2f8-973bad27720b.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-52259660/original/3f115e60-0621-4f53-aab1-b9712eb40b0c.jpeg?im_w=720',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Волгоград. 1-комнатная квартира в центре',
        description:
          'Квартира с евроремонтом в историческом доме. Высокие потолки, паркет. Полностью меблирована. Рядом парк, театры, рестораны.',
        price: 65000,
        address: 'г. Волгоград, ул. Мира, д. 1',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1MjgxNTA4MzYyODY1NjEzOQ%3D%3D/original/5b255ea3-fdf0-4c59-b8ca-8c7f11a2fc3d.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1MjgxNTA4MzYyODY1NjEzOQ%3D%3D/original/bbbf8654-76af-4a9a-adb2-baeb07544a58.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1MjgxNTA4MzYyODY1NjEzOQ%3D%3D/original/71ff8ed8-8521-4edd-8aca-77db89e531ad.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1MjgxNTA4MzYyODY1NjEzOQ%3D%3D/original/164d1ca1-639f-49c6-9976-a6a5f1ce57ca.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1MjgxNTA4MzYyODY1NjEzOQ%3D%3D/original/96d19d6b-d0b9-4504-90ff-2849b7e69c1f.jpeg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
      {
        title: 'Дер. Родниково (Тверская область). Дом в деревне',
        description:
          'Дом в тихой деревне в 50 км от города. 2 комнаты, кухня, веранда. Участок 20 соток. Колодец, баня. Идеально для спокойного отдыха.',
        price: 40000,
        address: 'Тверская обл., дер. Родниково, ул. Садовая, д. 5',
        image: [
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/41532571-4ff8-4ee2-b103-83d16dbbea9e.jpg?im_w=1200',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-670262930172766447/original/332a9cb2-7625-4633-b3de-535256a7318c.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-670262930172766447/original/6f2ef311-6908-4279-b175-2af5cb901332.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-670262930172766447/original/f1db592b-59fa-4730-a365-d4eedc1d65fa.jpeg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-670262930172766447/original/3d57a703-1563-4569-b2c3-a2c1940a79ac.jpeg?im_w=720',
        ],
        categoryId: 3,
        userId: 1,
      },
      {
        title: 'Пермь. Комната в элитном районе',
        description:
          'Комната в просторной квартире в престижном районе. Современный ремонт, качественная мебель. Общая кухня с техникой премиум-класса.',
        price: 45000,
        address: 'г. Пермь, ул. Ленина, д. 25',
        image: [
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzODUyNDcwMzcwODQ0MDgyNg%3D%3D/original/00cbd844-e26c-4e52-8379-c3a02487948e.jpeg?im_w=1200',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzODUyNDcwMzcwODQ0MDgyNg%3D%3D/original/12f7b6e6-8287-43a6-87ef-be9e092962b5.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzODUyNDcwMzcwODQ0MDgyNg%3D%3D/original/0d448150-caac-4be9-9829-a443c4aba569.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzODUyNDcwMzcwODQ0MDgyNg%3D%3D/original/916cdd66-ce2c-4a46-bd2c-3d45f05a233e.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzODUyNDcwMzcwODQ0MDgyNg%3D%3D/original/da744a28-c908-4b36-8fba-053c1ada1588.jpeg?im_w=720',
        ],
        categoryId: 1,
        userId: 1,
      },
      {
        title: 'Барнаул. 3-комнатная квартира для семьи',
        description:
          'Просторная квартира в новом доме. 3 отдельные комнаты, большая кухня, 2 санузла. Детская площадка во дворе. Район с развитой инфраструктурой.',
        price: 95000,
        address: 'г. Барнаул, ул. Семейная, д. 10',
        image: [
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f29add47-fcaf-42cd-813b-2757dae166c0.jpg?im_w=1200',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/1b3e9645-ee5c-46e9-8748-82add57d0a4e.jpg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/d71ca3b5-113f-48d3-9941-4a5144acee41.jpg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/07abffe2-6dff-4211-87da-6453236e68fd.jpg?im_w=720',
          'https://a0.muscache.com/im/ml/photo_enhancement/pictures/6dda2fe8-7c57-4d55-b99e-93aa132db0ac.jpg?im_w=720',
        ],
        categoryId: 2,
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
