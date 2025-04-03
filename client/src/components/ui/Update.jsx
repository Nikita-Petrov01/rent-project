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
      <Button variant="primary" onClick={handleShow}>
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
