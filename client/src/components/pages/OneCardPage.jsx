import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosInstance from '../../API/axiosInstance';

function OneCardPage({user}) {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState();
  const [isFavorite, setIsFavorite] = useState(false);

  // Проверяем, есть ли объявление в избранном при загрузке
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === id));
    
    axiosInstance
      .get(`/advertisements/${id}`)
      .then((response) => setAdvertisement(response.data))
      .catch((error) => console.log(error));
  }, [id]);


  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const newFavorite = {
        id,
        title: advertisement.title,
        image: advertisement.image[0],
        price: advertisement.price,
        address: advertisement.address
      };
      localStorage.setItem('favorites', JSON.stringify([...favorites, newFavorite]));
    }
    
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {advertisement && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>{advertisement.title}</h2>
            <button
              onClick={toggleFavorite}
              style={{
                background: 'white',
                border: `1px solid ${isFavorite ? '#ff4757' : '#ddd'}`,
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                color: isFavorite ? '#ff4757' : '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {isFavorite ? '★ В избранном' : '☆ Сохранить'}
            </button>
          </div>

          {/* Остальной код с фотографиями и описанием остается без изменений */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
            {advertisement.image?.[0] && (
              <div style={{ flexShrink: 0 }}>
                <img
                  src={advertisement.image[0]}
                  alt="Основное фото"
                  style={{ width: '450px', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            )}
            {advertisement.image?.length > 1 && (
              <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
                {advertisement.image.slice(1).map((image, index) => (
                  <img
                    key={index + 1}
                    src={image}
                    alt={`Фото ${index + 2}`}
                    style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                  />
                ))}
              </div>
            )}
          </div>

          <p style={{ marginTop: '20px' }}>{advertisement.description}</p>
          <p>Адрес: {advertisement.address}</p>
          {advertisement.price && <p>Цена: {advertisement.price} ₽</p>}

          <Link to="/favorites" style={{ display: 'block', marginTop: '20px', color: '#ff4757' }}>
            → Перейти к избранному
          </Link>
        </>
      )}
    </div>
  );
}

export default OneCardPage;