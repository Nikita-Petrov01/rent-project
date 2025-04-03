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
    <div style={{ padding: '20px' }}>
      {advertisement && (
        <>
          <h2>{advertisement.title}</h2>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}
          >
            {advertisement.image?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`фото`}
                style={{
                    width: index === 0 ? '400px' : '200px', 
                    height: index === 0 ? '300px' : '200px', 
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            ))}
          </div>
          <p>{advertisement.description}</p>
          <p>Адрес: {advertisement.address}</p>
          {advertisement.price && <p>Цена: {advertisement.price} ₽</p>}
        </>
      )}
    </div>
  );
}


export default OneCardPage;

