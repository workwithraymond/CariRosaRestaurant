import React from 'react';

function SliderPagination({ currentPage, totalPages, onPageChange }) {
  const handleDotClick = (index) => {
    onPageChange(index);
  };

  return (
    <div className="slider-pagination">
      <div className="dot-container">
        {/* Render your pagination dots based on the totalPages and currentPage */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SliderPagination;
