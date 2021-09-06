import React from 'react';
import classes from './pagination.module.css';
const Pagination = ({ paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={classes.page_item}>
            <a onClick={() => paginate(number)} href='!#' className={classes.page_link}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;