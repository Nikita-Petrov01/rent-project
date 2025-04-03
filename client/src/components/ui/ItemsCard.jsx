import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

export default function ItemsCard({ item }) {
  return (
    <Card style={{ width: '18rem' }} data-testid={item?.id}>
    <Link to={`/categories/card/${item.id}`}>
      {item?.image && (
          <Card.Img
          style={{
              height: '180px',
              objectFit: 'cover',
              padding: '5px',
            }}
            variant="top"
            src={item?.image[0]}
            />
        )}
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
        <Card.Text>{item?.description?.slice(0, 100)}</Card.Text>
        {item?.price && (
            <p>
            <b>Цена: {item?.price} ₽</b>
          </p>
        )}
      </Card.Body>
    </Link>
    </Card>
  );
}