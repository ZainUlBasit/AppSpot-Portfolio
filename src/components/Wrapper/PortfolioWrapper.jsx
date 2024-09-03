import React, { useState } from "react";

const PortfolioWrapper = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  // Calculate the start and end index for the current page
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = React.Children.toArray(children).slice(
    startIndex,
    endIndex
  );

  // Handlers for pagination buttons
  const handleNext = () => {
    if (endIndex < React.Children.count(children)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full h-full px-14 pb-28 gap-5 flex-wrap flex justify-start items-center">
      {currentCards}
      <div className="flex justify-end w-full pr-4 gap-2">
        {currentPage > 0 && (
          <button
            onClick={handlePrevious}
            className="py-2 px-8 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg focus:outline-none"
          >
            Previous
          </button>
        )}
        {endIndex < React.Children.count(children) && (
          <button
            onClick={handleNext}
            className="py-2 px-8 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg focus:outline-none"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PortfolioWrapper;
