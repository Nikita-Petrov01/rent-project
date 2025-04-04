import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../API/axiosInstance';

function FavoritesPage({user}) {

  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const loadFavorites = async () => {
      if (!user?.data?.id) return;
      try {
        const response = await axiosInstance.get(`/likes/${user.data.id}`);
        console.log(response.data)
        setFavorites(response.data);
      } catch (error) {
        console.error('Ошибка загрузки избранного:', error);
      }
    };
    
    loadFavorites();
  }, [user]);


  const removeFavorite = async (advertisementId) => {
    try {
      await axiosInstance.delete(`/likes/${user.data.id}/${advertisementId}`);
      setFavorites(favorites.filter(fav => fav.advertisementId !== advertisementId));
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Мои избранные объявления</h2>
      
      {favorites.length === 0 ? (
        <p>У вас пока нет избранных объявлений</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {favorites.map(item => (
            <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <h3 style={{ marginTop: '10px' }}>{item.title}</h3>
              <p>{item.address}</p>
              {item.price && <p><strong>{item.price} ₽</strong></p>}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <Link to={`/categories/card/${item.id}`} style={{ color: '#3498db' }}>Подробнее</Link>
                <button
                  onClick={() => removeFavorite(item.id)}
                  style={{
                    background: 'none',
                    border: '1px solid #ff4757',
                    color: '#ff4757',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;