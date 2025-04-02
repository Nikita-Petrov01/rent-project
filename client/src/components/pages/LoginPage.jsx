import { Button, Container, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage({ loginHandler }) {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await loginHandler(e);
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Неверный логин или пароль');
      } else {
        setError('Произошла ошибка при входе');
      }
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        minWidth: '100%',
        background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 50%, #1abc9c 100%)',
        padding: '20px',
      }}
    >
      <Form
        onSubmit={handleSubmit}
        className="p-4 rounded-4"
        style={{
          maxWidth: '450px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 15px 35px rgba(46, 204, 113, 0.2)',
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: '#27ae60',
            fontSize: '2.2rem',
            fontWeight: '600',
            letterSpacing: '1px',
            marginBottom: '1.5rem',
            position: 'relative',
            paddingBottom: '10px',
            ':after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: '#2ecc71',
              borderRadius: '2px',
            },
          }}
        >
          Вход
        </h2>

        {error && (
          <Alert
            variant="danger"
            className="mb-4"
            style={{
              borderRadius: '12px',
              border: 'none',
              background: 'rgba(231, 76, 60, 0.1)',
              color: '#e74c3c',
              padding: '15px',
              fontSize: '0.95rem',
            }}
          >
            {error}
          </Alert>
        )}

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label
            style={{
              color: '#27ae60',
              fontSize: '1.1rem',
              fontWeight: '500',
              marginBottom: '8px',
            }}
          >
            Email
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Введите email"
            required
            style={{
              padding: '12px 20px',
              fontSize: '1rem',
              border: '2px solid #e8f3ed',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              ':focus': {
                borderColor: '#2ecc71',
                boxShadow: '0 0 0 3px rgba(46, 204, 113, 0.1)',
                outline: 'none',
              },
            }}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label
            style={{
              color: '#27ae60',
              fontSize: '1.1rem',
              fontWeight: '500',
              marginBottom: '8px',
            }}
          >
            Пароль
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Введите пароль"
            required
            style={{
              padding: '12px 20px',
              fontSize: '1rem',
              border: '2px solid #e8f3ed',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              ':focus': {
                borderColor: '#2ecc71',
                boxShadow: '0 0 0 3px rgba(46, 204, 113, 0.1)',
                outline: 'none',
              },
            }}
          />
        </Form.Group>

        <Button
          type="submit"
          className="w-100 mb-4"
          style={{
            background: '#d35400',
            border: 'none',
            padding: '12px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 7px 14px rgba(46, 204, 113, 0.3)',
            },
          }}
        >
          Войти
        </Button>

        <div className="text-center">
          <Link
            to="/signup"
            style={{
              color: '#27ae60',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#2ecc71',
              },
            }}
          >
            Нет аккаунта? Зарегистрируйтесь
          </Link>
        </div>
      </Form>
    </Container>
  );
}
