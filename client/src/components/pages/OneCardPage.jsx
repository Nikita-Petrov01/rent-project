import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosInstance from '../../API/axiosInstance';
import { Spinner } from 'react-bootstrap';
import AuthModal from '../ui/AuthModal';

function OneCardPage({user, gigaCard}) {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const loadData = async () => {
      try {
        const advResponse = await axiosInstance.get(`/advertisements/${id}`);
        setAdvertisement(advResponse.data);

        if(user?.data?.id) {
          const likeResponse = await axiosInstance.get(`/likes/check/${user.data.id}/${id}`)
          setIsLiked(likeResponse.data.isLiked);
        }
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id, user]);


  const handleLike = async () => {
    if (!user?.data?.id) {
      setShowAuthModal(true);
      return;
    }

    try {
      if (isLiked) {
        await axiosInstance.delete(`/likes/${user.data.id}/${id}`);
      } else {
        await axiosInstance.post('/likes', {
          userId: user.data.id,
          advertisementId: Number(id),
        });
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Ошибка при изменении лайка:', error);
    }
  }
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 text-center">
      <div>
        <Spinner animation="border" variant="primary" />
        <h3 className="mt-3">Загрузка...</h3>
      </div>
    </div>
    )
  }

  if(!advertisement) {
    return <div>Объявление не найдено</div>
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {advertisement && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>{advertisement.title}</h2>
            <button
              onClick={handleLike}
              style={{
                background: 'white',
                border: `1px solid ${isLiked ? '#ff4757' : '#ddd'}`,
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                color: isLiked ? '#ff4757' : '#333',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {isLiked ? '★ В избранном' : '☆ Сохранить'}
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
      <AuthModal
        show={showAuthModal}
        onClose={() => setShowAuthModal}
      />
    </div>
  );
}

export default OneCardPage;