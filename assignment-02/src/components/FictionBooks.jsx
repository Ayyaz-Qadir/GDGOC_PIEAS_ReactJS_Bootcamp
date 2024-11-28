// Step 03: Create Functional Components

import React from "react";

const FictionBooks = ({ books }) => {
  return (
    <div>
      <h3 style={{ color: "yellow" }}>
        → Filters and displays books with the genre "Fiction"
      </h3>
      {books
        .filter((book) => book.genre === "Fiction")
        .map((fiction, index) => (
          <p>
            {index + 1}. {fiction.title}
          </p>
        ))}
    </div>
  );
};

export default FictionBooks;
