// Step 03: Create Functional Components

import React from "react";

const HighRatedBooks = ({ books }) => {
  const filteredBooks = books.filter((book) => book.rating > 4.5);

  return (
    <div>
      <h3 style={{ color: "yellow" }}>
        {" "}
        → Filters and displays books with a rating higher than 4.5
      </h3>
      {filteredBooks.map((book) => (
        <ul>
          <li key={book.id}>{book.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default HighRatedBooks;
