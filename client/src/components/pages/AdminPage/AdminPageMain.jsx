import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Select from '../../ui/Select';
import ItemsCard from '../../ui/ItemsCard';
import axiosInstance from '../../../API/axiosInstance';
import CreateAdvert from '../../ui/Create';
import UpdateAdvert from "../../ui/Update";

export default function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [hotels, setHotels] = useState([]);
  // const [filteredHotels, setFilteredHotels] = useState([]);
  const [categoryId, setCategoryId] = useState('all');
  //   const { categoryId } = useParams();
  let filteredHotels = hotels;
  if (categoryId !== 'all') {
    filteredHotels = hotels.filter((hotel) => hotel.categoryId === categoryId);
  }

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
        // setFilteredHotels(data); // Изначально показываем все отели
      })
      .catch((error) => console.log(error));
  }, []);

  async function deleteHandler(id) {
    try {
      await axiosInstance.delete(`/advertisements/${id}`);
      setHotels((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  const handleAdvertUpdate = (updatedItem) => {
    setHotels(prevItems => 
      prevItems.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  // const handleCategorySelect = (categoryId) => {
  //   if (categoryId === 'all') {
  //     setFilteredHotels(hotels); // Показать все отели
  //   } else {
  //     const filtered = hotels.filter((hotel) => hotel.categoryId === categoryId);
  //     setFilteredHotels(filtered);
  //   }
  // };

  // const handleDelete = (id) => {
  //   axiosInstance

  // }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Select categories={categories} onSelect={setCategoryId} className="mb-4" />
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {filteredHotels.map((item) => (
          <Col key={item.id}>
            <ItemsCard item={item} />
            <button onClick={()=>deleteHandler(item.id)}>X</button>
            <UpdateAdvert item={item} categories={categories} onUpdate={handleAdvertUpdate} />
          </Col>
        ))}
      </Row>
      <CreateAdvert hotels={hotels} setHotels={setHotels} categories={categories} />
    </Container>
  );
}
