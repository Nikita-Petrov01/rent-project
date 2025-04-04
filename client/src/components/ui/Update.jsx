import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../API/axiosInstance';

export default function UpdateAdvert({ item, categories, onUpdate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleCategoryUpdate(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
  
      // Преобразуем поле image в массив
      if (data.image) {
        data.image = data.image.split(',').map((url) => url.trim()); // Разделяем по запятой и убираем пробелы
      }
  
      const resp = await axiosInstance.put(`/advertisements/update/${item.id}`, data);
  
      if (onUpdate) {
        onUpdate(resp.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}   style={{
        position: 'absolute',
        bottom: '12px',
        right: '12px',
        padding: '5px 10px',
        fontSize: '0.9rem',
        borderRadius: '5px',
        background: '#2ecc71', // Зеленый фон кнопки
        color: '#fff', // Белый текст
        border: 'none',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Легкая тень
        cursor: 'pointer',
        transition: 'background 0.3s ease',
      }}
      onMouseOver={(e) => (e.target.style.background = '#27ae60')} // Эффект при наведении
      onMouseOut={(e) => (e.target.style.background = '#2ecc71')}>
        Изменить
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Создать объявление</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCategoryUpdate}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название:</Form.Label>
              <Form.Control
                type="string"
                defaultValue={item?.title}
                name="title"
                autoFocus
              />
              <Form.Label>URL Photo:</Form.Label>
              <Form.Control
                type="string"
                defaultValue={item?.image}
                name="image"
                autoFocus
              />
              <Form.Label>Категория:</Form.Label>
              <Form.Select name="categoryId" aria-label="Default select example">
                <option>Open this select menu</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
              </Form.Select>

              <Form.Label>Цена:</Form.Label>
              <Form.Control type="integer" name="price" defaultValue={item?.price} />
              <Form.Label>Адрес:</Form.Label>
              <Form.Control type="string" defaultValue={item?.address} name="address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                defaultValue={item?.description}
                name="description"
                as="textarea"
                rows={3}
                type="text"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Создать
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
