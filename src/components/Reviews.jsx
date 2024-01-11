import { useState } from 'react';
import SliderPagination from './SliderPagination'; // Adjust the import path as needed
import reviewsData from '../data'

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);

  // Define your reviews data as an array of objects
  const reviewsData = [
    {
      id: 1,
      name: "Jose Rodriguez",
      jobTitle: "Abogado",
      stars: 5,
      review: "Bueno la sopa de habichuela con arroz blanco y pollo adorno es bueno pero el aguacate se vez como un Viejo cocinando en la casa . Ese aguacate es de guachupita."
    },
    {
      id: 2,  
      name: "Jennifer Caba",
      jobTitle: "Doctor",
      stars: 3,
      review: "Buena comida,siempre que puedo pues paso por allá."
    },
    {
      id: 3,  
      name: "Raymond Del Rosario",
      jobTitle: "Profesor",
      stars: 4,
      review: "La comida es muy buena y saben atender bien a los clientes.  Uno de los mejores restaurante"
    },
    // Add more reviews here as needed
  ];

  const totalPages = reviewsData.length; // Calculate the total number of pages

  // Function to handle the next page button click
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the previous page button click
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (index) => {
    setCurrentPage(index)
  }

  const currentReview = reviewsData[currentPage]; // Get the review for the current page

  return (
    <div>
      {/* Your existing JSX for review content */}
      <section id="section5">
        <section id="section5-text-container">
        <span className="page-span">Testimonials</span>
      <h1 className="heading">Customers Say</h1>
          <section id="avatar-name-container">
            <div className="avatar"></div>
            <p className="name">{currentReview.name}</p>
            <p className="job-title">{currentReview.jobTitle}</p>
            <section className="stars">
              {Array(currentReview.stars).fill(<span className="star">&#9733;</span>)}
            </section>
          </section>
          <section id="review">
            <p>{currentReview.review}</p>
          </section>

          {/* Include the SliderPagination component */}
          <SliderPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage} // Pass the function for "Previous" page
          />
        </section>
      </section>
    </div>
  );
}



