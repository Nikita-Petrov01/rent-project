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
        background: '#f9f9f9', // Светлый фон
        padding: '20px',
      }}
    >
      <Form
        onSubmit={handleSubmit}
        className="p-4 rounded-4"
        style={{
          maxWidth: '450px',
          width: '100%',
          background: '#ffffff', // Белый фон формы
          border: '1px solid #ddd', // Легкая граница
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Легкая тень
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: '#2c3e50', // Темный текст
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Вход
        </h2>

        {error && (
          <Alert
            variant="danger"
            className="mb-4"
            style={{
              borderRadius: '8px',
              border: '1px solid #e74c3c',
              background: '#fce4e4',
              color: '#e74c3c',
              padding: '10px',
              fontSize: '0.95rem',
            }}
          >
            {error}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label
            style={{
              color: '#2c3e50',
              fontSize: '1rem',
              fontWeight: '500',
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
              padding: '10px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3498db')}
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
          <Form.Control.Feedback
            type="invalid"
            style={{
              fontSize: '0.9rem',
              color: '#e74c3c',
              marginTop: '5px',
            }}
          >
            Пожалуйста, введите корректный email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label
            style={{
              color: '#2c3e50',
              fontSize: '1rem',
              fontWeight: '500',
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
              padding: '10px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3498db')}
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
          <Form.Control.Feedback
            type="invalid"
            style={{
              fontSize: '0.9rem',
              color: '#e74c3c',
              marginTop: '5px',
            }}
          >
            Пожалуйста, введите пароль
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="w-100 mb-3"
          style={{
            background: '#3498db',
            border: 'none',
            padding: '10px',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            color: '#fff',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.background = '#2980b9')}
          onMouseOut={(e) => (e.target.style.background = '#3498db')}
        >
          Войти
        </Button>

        <div className="text-center">
          <Link
            to="/signup"
            style={{
              color: '#3498db',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#2980b9')}
            onMouseOut={(e) => (e.target.style.color = '#3498db')}
          >
            Нет аккаунта? Зарегистрируйтесь
          </Link>
        </div>
      </Form>
    </Container>
  );
}