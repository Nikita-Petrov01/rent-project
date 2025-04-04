import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Select({ categories, onSelect }) {
  return (
    <Dropdown
      style={{
        position: 'fixed',
        bottom: '80px', // Расстояние от нижнего края
        right: '20px', // Расстояние от правого края
        zIndex: 1000, // Поверх других элементов
      }}
    >
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{
          width: '65px',
          height: '52px',
          // padding: '10px 10px', // Размер кнопки как на предыдущей странице
          borderRadius: '20px',
          background: '#3498db', // Синий акцент
          color: '#fff',
          border: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
      >
        <img  style={{
          width: '30px'}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwElEQVR4nO3YUQrCMBCE4XnKoaSez3rQeI2IEKEG1tVtUoj+H/StTEkz0HQlAN9Kkq6SbpJK8MqS1po1Ote07nhQe60H5JpyvfmkuGXzBkfnmp6r3qvNGZVrYiENdsRBtaKoloNqRVEtB9WKolqO/6tWrjc+jsxR5zfH+N65pp4/QJcDck2pPjR3/iUdlYtpJKYoYoryqYUpysxf9vIrR5TCQl6xIw6qFUW1HFQrimo5qNa01cpMUcQUpTBFATTUHeqdH+8Oyay2AAAAAElFTkSuQmCC" alt="external-menu-email-inkubators-detailed-outline-inkubators"/>
   
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{
          width: 'auto',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Легкая тень
          background: '#ffffff', // Белый фон
          overflow: 'hidden',
        }}
      >
        <Dropdown.Item
          key="all"
          onClick={() => onSelect('all')}
          style={{
            padding: '10px 15px',
            fontSize: '1rem',
            color: '#2c3e50',
            textAlign: 'center',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.background = '#f1f1f1')}
          onMouseOut={(e) => (e.target.style.background = '#ffffff')}
        >
          Все категории
        </Dropdown.Item>
        {categories.map((category) => (
          <Dropdown.Item
            key={category.id}
            onClick={() => onSelect(category.id)}
            style={{
              padding: '10px 15px',
              fontSize: '1rem',
              color: '#2c3e50',
              textAlign: 'center',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = '#f1f1f1')}
            onMouseOut={(e) => (e.target.style.background = '#ffffff')}
          >
            {category.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}