import { Pagination as BTPagination } from 'react-bootstrap';
const Pagination = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return <BTPagination>{items}</BTPagination>;
};

export default Pagination;
