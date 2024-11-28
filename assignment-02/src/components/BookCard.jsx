// Step 02 - BookCard Component Structure:

import "./BookCard.css";

const BooksCard = ({ title, author, rating, genre }) => (
  <div className="height">
    <div className="card">
      <h2> {title} </h2>
      <ul>
        <li>Author: {author} </li>
        <li>Rating: {rating} </li>
        <li>Genre: {genre} </li>
      </ul>
    </div>
  </div>
);

export default BooksCard;
