import { Pagination as BTPagination } from 'react-bootstrap';
const Pagination = ({ pagination }) => {
  if (!pagination) return null;

  const { current_page } = pagination || [];
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === current_page}>
        {number}
      </Pagination.Item>,
    );
  }

  return <BTPagination>{items}</BTPagination>;
};

export default Pagination;
