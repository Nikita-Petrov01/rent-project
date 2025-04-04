import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ItemsCard from '../ui/ItemsCard';
import axiosInstance from '../../API/axiosInstance';
import { useNavigate, useParams } from 'react-router';
import Select from '../ui/Select';

export default function CategoryUserPage() {
  const [categories, setCategories] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  //   const { categoryId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get('/categories')
      .then(({ data }) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/advertisements')
      .then(({ data }) => {
        setHotels(data);
        setFilteredHotels(data); // Изначально показываем все отели
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCategorySelect = (categoryId) => {
    if (categoryId === 'all') {
      setFilteredHotels(hotels); // Показать все отели
    } else {
      const filtered = hotels.filter((hotel) => hotel.categoryId === categoryId);
      setFilteredHotels(filtered);
    }
  };

  return (
    <Container
    style={{
      maxWidth: '1400px',
      background: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      padding: '20px',
      marginTop: '20px',
    }}
      className="d-flex flex-column align-items-center"
    >
      <Select
        categories={categories}
        onSelect={handleCategorySelect}
        style={{
          position: 'fixed',
          bottom: '80px', // Расстояние от нижнего края
          right: '20px', // Расстояние от правого края
          width: '100%',
          maxWidth: '300px',
          borderRadius: '20px',
          border: '1px solid #ddd',
          padding: '10px 15px',
          background: '#f9f9f9',
          color: '#333',
          zIndex: 1000, // Поверх других элементов
        }}
      />
      <Row className="g-4">
        {filteredHotels.map((item) => (
          <Col key={item.id}>
            <ItemsCard item={item} />
          </Col>
        ))}
      </Row>
      <button
        onClick={() => navigate('/map')}
        style={{
          position: 'fixed',
          bottom: '20px', // Расстояние от нижнего края
          right: '20px', // Расстояние от правого края
          width: '65px',
          height: '52px',

          background: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          zIndex: 1000, // Поверх других элементов
        }}
        onMouseOver={(e) => (e.target.style.background = '#2980b9')}
        onMouseOut={(e) => (e.target.style.background = '#3498db')}
      >
        <img
           style={{
            width: '30px'}} 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO3azatNURgG8B9uuSVS7gCRAXHHIgMf/4HSLZnIneCWiaHMDCWSoamhyMBQ3ehSyIgBl2JAkZmv5HNp1T631W7fc/Y6H6LWU7vWXuddz7vf91nrTJ5Fwb+HW3iKaYwNkXes4pzHM8xg3HBxAI8xG19C8rzC8QELWoqDVQGh9rzHGawZsIBduF3jXhi8qI1zFeooUOfpjOeS8SdcxKbMArbhesLzrqmQpk62UajXuoVE2I4r+FnN/cJN7OxRwATO4lu17kv1vqqpkLYflhtX54/YjEv4mvx+F/uxJIlbgVP4kBQeG7Guib8pUbetMt1lvkm5xfgj1uNc8qEBj3AIJ2pb5wYmu/F3S9Tr8LbZer34I1biJF435HiAfW342yRKFerEt/0zaMsfsRxHkzVTOfw5if5GfO6aUkgoirRHKFvLaLrVT3xEUSRoj6JIBkI57EbTrX7iI4oiQXsURTIQymE3mm71Ex9RFAnaoyiSgVAOu9F0q5/4iKJI0B5FkQyEctiNplv9xEcURYL2KIpkIJTDbvg2Qd2GOFbZBsNUZCqNncs0QXslaXK6Os9bnMbqAQvZjXtJ3J3FEvdjpTXxRH/9cOWHp4k/4gI2ZhYyWVlwaWNm6t/Zr7nZtO7lIpbcHlxNXN3v1fuOHoVMVObpj2r+c+LqDmw35xRQx5Yurq5kru7qxsIvY60hXgBIx89xBMtyEmADzldbrcP1MBl3XN3fuIatBsCgrm4bdFzdNw057mOvEV2SmR/BJZyI8aox8ZLPk+pPosD/iD8s9UEjSb4d0gAAAABJRU5ErkJggg=="
          alt="map--v1"
        />
      </button>
    </Container>
  );
}
