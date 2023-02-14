import Button from 'react-bootstrap/Button';
import { Card as BTCard } from 'react-bootstrap';

const Card = ({ anime }) => {
  if (!anime) return;

  console.log('anime', anime);

  const { images, title, title_english } = anime;

  return (
    <BTCard style={{ height: '100%' }}>
      <BTCard.Img style={{ aspectRatio: '1/1' }} variant="top" src={images?.webp?.large_image_url} />
      <BTCard.Body>
        <BTCard.Title className="text-truncate">{title}</BTCard.Title>
        {title_english ? <p className="fw-light fs-6">({title_english})</p> : null}
      </BTCard.Body>
    </BTCard>
  );
};

export default Card;
