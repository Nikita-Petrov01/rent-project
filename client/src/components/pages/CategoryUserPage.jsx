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
const navigate = useNavigate()
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
      const filtered = hotels.filter(hotel => hotel.categoryId === categoryId);
      setFilteredHotels(filtered);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <Select 
        categories={categories} 
        onSelect={handleCategorySelect} 
        className="mb-4"
      />
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {filteredHotels.map((item) => (
          <Col key={item.id}>
            <ItemsCard item={item} />
          </Col>
        ))}
      </Row>
      <button onClick={()=>navigate('/map')}>Показать на карте</button>
    </Container>
  );
}