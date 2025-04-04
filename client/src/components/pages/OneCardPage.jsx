import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosInstance from '../../API/axiosInstance';

function OneCardPage({ user }) {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [like, setLike] = useState(false);
  console.log(user);
  // Проверяем, есть ли объявление в избранном при загрузке
  useEffect(() => {
    axiosInstance
      .get(`/advertisements/${id}`)
      .then((response) => setAdvertisement(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const likeHandler = () => {
    const favorites = { userId: user.data.id, advertisementId: Number(id) };
    axiosInstance
      .post(`/likes`, favorites)
      .then(() => {
        setLike(true);
      })
      .catch((error) => console.log(error));
  };

  // const toggleFavorite = () => {
  //   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  //   if (isFavorite) {
  //     const updatedFavorites = favorites.filter(fav => fav.id !== id);
  //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  //   } else {
  //     const newFavorite = {
  //       id,
  //       title: advertisement.title,
  //       image: advertisement.image[0],
  //       price: advertisement.price,
  //       address: advertisement.address
  //     };
  //     localStorage.setItem('favorites', JSON.stringify([...favorites, newFavorite]));
  //   }

  //   setIsFavorite(!isFavorite);
  // };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        background: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {advertisement && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #ddd',
              paddingBottom: '10px',
              marginBottom: '20px',
            }}
          >
            <h2 style={{ fontSize: '1.8rem', color: '#2c3e50', fontWeight: 'bold' }}>
              {advertisement.title}
            </h2>
            <button
              onClick={likeHandler}
              style={{
                background: like ? '#ff4757' : 'white',
                border: `1px solid ${like ? '#ff4757' : '#ddd'}`,
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                color: like ? 'white' : '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: like ? '0 4px 6px rgba(255, 71, 87, 0.3)' : 'none',
              }}
              onMouseOver={(e) => {
                if (!like) e.target.style.background = '#f1f1f1';
              }}
              onMouseOut={(e) => {
                if (!like) e.target.style.background = 'white';
              }}
            >
              {like ? '★ В избранном' : '☆ Сохранить'}
            </button>
          </div>

          {/* Остальной код с фотографиями и описанием остается без изменений */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            {advertisement.image?.[0] && (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  height: '400px',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={advertisement.image[0]}
                  alt="Основное фото"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                />
              </div>
            )}
            {advertisement.image?.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  overflowX: 'auto',
                  paddingBottom: '10px',
                }}
              >
                {advertisement.image.slice(1).map((image, index) => (
                  <div
                  key={index}
                  style={{
                    flexShrink: 0,
                    width: '150px',
                    height: '150px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                  onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                >
                  <img
                    src={image}
                    alt={`Фото ${index + 2}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

          <div style={{ marginTop: '20px', lineHeight: '1.6', color: '#7f8c8d' }}>
            <p style={{ marginBottom: '10px' }}>{advertisement.description}</p>
            <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>
              Адрес: {advertisement.address}
            </p>
            {advertisement.price && (
              <p style={{ fontWeight: 'bold', color: 'grey', fontSize: '1.2rem' }}>
                Цена: {advertisement.price} ₽
              </p>
            )}
          </div>
          <Link
            to="/favorites"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              color: '#3498db',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#2980b9')}
            onMouseOut={(e) => (e.target.style.color = '#3498db')}
          >
            → Перейти к избранному
          </Link>
        </>
      )}
    </div>
  );
}

export default OneCardPage;
