import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../API/axiosInstance';

export default function CreateAdvert({ hotels, setHotels, categories }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleCategoryCreate(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      if (data.image) {
        data.image = data.image.split(',').map((url) => url.trim()); // Разделяем по запятой и убираем пробелы
      }
      const res = await axiosInstance.post('/advertisements/create', data);
      setHotels([...hotels, res.data]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button
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
        variant="primary"
        onClick={handleShow}
      >
        <img
          style={{
            width: '30px',
          }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVR4nO2XTU4CQRCFPwHZ+HMQ8A7q1hjDQs5gIAbUQ7jSS2iI5xHUGBOMV1CDkQ1lJimTXiAM047dI/WSXkyqu6Ze6lV1NRiKA4l0LYx/RyQWiBHBMpILxKSFSSsXiEkLk1ZxpCUzxoa8xhAxIliN5AKx9ssSSEusaxFX+w0BMSJYRnKBWNdiCdpvCIgR4e8zUgGaQA8YAiPgDbh3MlKNncg+8JKifp6BRhGK/RboADVgTVcd6AJ9Z98lsBIjkU/gCCjNiCmxtXRvcubCl8hvYc8hsb3AuR2HTCM0kYrqXTQTi8bQdmqmGpJI06mJUoYYysBA7YmvYER66r/jEcOJ2m9CEhmq/5pHDHW1J74yO/HFSP2vT/mnpJzFNvT7o+hENvX7tejS2lL7YwzF3vWI4UztVyGJHKr/vkf7vVN74ivohfgtr1aGGI7V9gSsxjSiJGNHWuwCY2ACHMzb7DvFZhka2yqZn1DWTIz1zHka1hJoDfTGrmtrXtfudOrUxERJzJqUgyHtwyqpiblyCo1pT9134AG41u40tbC/AHkJPOfaGbQhAAAAAElFTkSuQmCC"
          alt="add-list"
        />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Создать объявление</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCategoryCreate}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название:</Form.Label>
              <Form.Control
                type="string"
                placeholder="Санкт-Петербург (Ленинградская область)"
                name="title"
                autoFocus
              />
              <Form.Label>URL Photo:</Form.Label>
              <Form.Control
                type="string"
                placeholder="Санкт-Петербург (Ленинградская область)"
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
              <Form.Control type="integer" name="price" />
              <Form.Label>Адрес:</Form.Label>
              <Form.Control
                type="string"
                placeholder="Санкт-Петербург, ул. Большая Конюшенная, д. 19"
                name="address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Описание</Form.Label>
              <Form.Control name="description" as="textarea" rows={3} type="text" />
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
