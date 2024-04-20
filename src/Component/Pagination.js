import React from 'react';
import './Pagination.css'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
 
  // Create an array to hold the page numbers
  const pageNumbers = [];
 // Calculate the total number of pages based on items per page and total items
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map((number) => (
        <li key={number} className='page-item'>
          <button onClick={() => paginate(number)} className='page-link'>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
