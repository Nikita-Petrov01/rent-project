import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../API/axiosInstance';

function OneCardPage() {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/advertisements/${id}`)
      .then((response) => setAdvertisement(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {advertisement && (
        <>
          <h2>{advertisement.title}</h2>
          
          <div style={{ 
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
            overflowX: 'auto',
            paddingBottom: '10px'
          }}>
            {/* Основное фото (первое) */}
            {advertisement.image?.[0] && (
              <div style={{ flexShrink: 0 }}>
                <img
                  src={advertisement.image[0]}
                  alt="Основное фото"
                  style={{
                    width: '450px',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
            )}
            
            {/* Дополнительные фото (остальные) */}
            {advertisement.image?.length > 1 && (
              <div style={{
                display: 'flex',
                gap: '10px',
                flexShrink: 0
              }}>
                {advertisement.image.slice(1).map((image, index) => (
                  <img
                    key={index + 1}
                    src={image}
                    alt={`Фото ${index + 2}`}
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      flexShrink: 0
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          
          <p style={{ marginTop: '20px' }}>{advertisement.description}</p>
          <p>Адрес: {advertisement.address}</p>
          {advertisement.price && <p>Цена: {advertisement.price} ₽</p>}
        </>
      )}
    </div>
  );
}

export default OneCardPage;