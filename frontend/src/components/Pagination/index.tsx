import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.css';

const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={10}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      activeLinkClassName="pagination-link-active"
      previousLabel={<ArrowIcon />}
      nextLabel={<ArrowIcon />}
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      disabledClassName="arrow-inactive"
    />
  );
};

export default Pagination;
