import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router';

const YandexMapWithMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const navigate = useNavigate();
  // Загрузка данных из БД
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch('/api/locations');
        const data = await response.json();

        const markersWithCoords = await Promise.all(
          data.map(async (item) => {
            const coords = await geocodeAddress(item.address);
            return { ...item, coords };
          }),
        );

        setMarkers(markersWithCoords);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching markers:', error);
        setIsLoading(false);
      }
    };

    fetchMarkers();
  }, []);

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=${
          import.meta.env.VITE_YANDEX_MAPS_API_KEY
        }&format=json&geocode=${encodeURIComponent(address)}`,
      );
      const data = await response.json();

      const pos =
        data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');

      return [parseFloat(pos[1]), parseFloat(pos[0])];
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };

  const handleMarkerMouseEnter = (marker) => {
    setHoveredMarker(marker);
  };

  if (isLoading) {
    return <div>Loading map...</div>;
  }

  return (
    <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
      <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY }}>
        <Map
          onError={(error) => console.error('Map error:', error)}
          onLoad={() => console.log('Map loaded successfully')}
          defaultState={{
            center: [55.75, 37.57],
            zoom: 12,
          }}
          width="100%"
          height="100%"
        >
          {markers.map((marker, index) => (
            <Placemark
              key={index}
              geometry={marker.coords}
              options={{
                preset: 'islands#blueDotIcon',
                hideIconOnBalloonOpen: false,
              }}
              onMouseDown={() => handleMarkerMouseEnter(marker)}
            />
          ))}
        </Map>
      </YMaps>
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 999,
        }}
      >
        <button
          onClick={() => navigate('/categories')}
          style={{
            padding: '10px 15px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',

            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.36)',
          }}
        >
          Показать списком
        </button>
      </div>

      {/* Всплывающая подсказка при наведении */}
      {hoveredMarker && (
  <div
    style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'white',
      padding: '8px', // Уменьшено
      borderRadius: '15px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      zIndex: 1000,
      maxWidth: '300px', // Уменьшено
      maxHeight: '70vh', // Уменьшено
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ alignSelf: 'flex-end', marginBottom: 'auto' }}>
      <Button
        variant="danger"
        onClick={() => setHoveredMarker(null)}
        style={{
          padding: '2px 5px', // Уменьшено
          fontSize: '10px',
          marginBottom: '5px',
        }}
      >
        X
      </Button>
    </div>
    <img
      src={hoveredMarker.image[0]}
      style={{
        width: '100%',
        height: '120px', // Уменьшено
        objectFit: 'cover',
        marginBottom: '8px', // Уменьшено
        borderRadius: '8px', // Уменьшено
      }}
      alt="Метка"
    />
    <h3
      style={{
        margin: '0 0 6px 0', // Уменьшено
        fontSize: '1rem', // Уменьшено
        fontWeight: 'bold',
        color: '#2c3e50',
      }}
    >
      {hoveredMarker.title || 'Метка'}
    </h3>
    <p
      style={{
        margin: '0 0 6px 0', // Уменьшено
        fontSize: '0.9rem', // Уменьшено
        color: 'black',
      }}
    >
      {hoveredMarker.address}
    </p>
    {hoveredMarker.description && (
      <p
        style={{
          margin: '0 0 10px 0', // Уменьшено
          fontSize: '0.85rem', // Уменьшено
          color: '#7f8c8d',
        }}
      >
        {hoveredMarker.description}
      </p>
    )}
    <Button
      onClick={() => navigate(`../categories/card/${hoveredMarker.id}`)}
      variant="secondary"
      style={{
        fontSize: '0.9rem', // Уменьшено
        padding: '6px 10px', // Уменьшено
      }}
    >
      Подробнее
    </Button>
  </div>
)}    </div>
  );
};

export default YandexMapWithMarkers;
