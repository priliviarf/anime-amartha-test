import Button from 'react-bootstrap/Button';
import { Badge, Card as BTCard } from 'react-bootstrap';

const Card = ({ anime }) => {
  if (!anime) return;

  const { images, rating, title, title_english } = anime;

  return (
    <BTCard style={{ height: '100%' }}>
      <BTCard.Img style={{ aspectRatio: '1/1' }} variant="top" src={images?.webp?.large_image_url} />
      <BTCard.Body>
        <div style={{ display: 'flex', height: '100%', justifyContent: 'space-between', flexDirection: 'column' }}>
          <div>
            <BTCard.Title className="text-truncate">{title}</BTCard.Title>
            {title_english ? (
              <p className="fw-light" style={{ fontSize: '0.9em' }}>
                ({title_english})
              </p>
            ) : null}
          </div>
          <div>
            <Badge bg="info">{rating}</Badge>
          </div>
        </div>
      </BTCard.Body>
    </BTCard>
  );
};

export default Card;
