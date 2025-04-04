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
              onClick={handleLike}
              style={{

                background: 'white',
                border: `1px solid ${isLiked ? '#ff4757' : '#ddd'}`,

                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',

                color: isLiked ? '#ff4757' : '#333',

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
              {isLiked ? '★ В избранном' : '☆ Сохранить'}
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
      <AuthModal
        show={showAuthModal}
        onClose={() => setShowAuthModal}
      />
    </div>
  );
}

export default OneCardPage;
