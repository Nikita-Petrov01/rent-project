import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

export default function ItemsCard({ item }) {
  return (
    <Card
    style={{
      width: '300px', // Карточка занимает всю ширину колонки
      maxWidth: '300px', // Максимальная ширина карточки
      height: 'auto', // Высота адаптируется под содержимое
      border: 'none',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      borderRadius: '20px',
      overflow: 'hidden',
    }}
      data-testid={item?.id}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'; // Увеличение при наведении
        e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)'; // Усиление тени при наведении
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Возврат к исходному размеру
        e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)'; // Возврат тени
      }}
    >
      <Link
        to={`/categories/card/${item.id}`}
        style={{
          textDecoration: 'none', // Убираем подчеркивание
          color: 'inherit', // Сохраняем цвет текста
        }}
      >
        {item?.image && (
          <Card.Img
            style={{
              height: '180px',
              objectFit: 'cover',
              padding: '5px',
              borderRadius: '20px', // Закругленные углы только сверху
            }}
            variant="top"
            src={item?.image[0]}
          />
        )}
        <Card.Body
          style={{
            padding: '15px',
            background: '#ffffff', // Белый фон для контраста
          }}
        >
          <Card.Title
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#2c3e50', // Темный текст
              marginBottom: '10px',
            }}
          >
            {item?.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: '0.9rem',
              color: '#7f8c8d', // Серый текст для описания
              marginBottom: '10px',
            }}
          >
            {item?.description?.slice(0, 100)}
          </Card.Text>
          {item?.price && (
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'grey',
              }}
            >
              Цена: {item?.price} ₽
            </p>
          )}
        </Card.Body>
      </Link>
    </Card>
  );
}
