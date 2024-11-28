// Step 03: Create Functional Components

import React from "react";

const BookAuthors = ({ books }) => {
  let booksAuthor = books.map((book) => book.author);
  console.log(booksAuthor);
  return (
    <div>
      <h3 style={{ color: "yellow" }}> → Displays an array of book authors.</h3>

      {/* <div> */}
      {booksAuthor.map((author, index) => (
        <p>
          {index} {author}
        </p>
      ))}
      {/* </div> */}
    </div>
  );
};

export default BookAuthors;
