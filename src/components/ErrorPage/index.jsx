import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Oops!</h2>
      <h3>We can't seem to find the page you're looking for</h3>
    </div>
  );
};

export default ErrorPage;
