// Step 05: Import Components in App.js

import Books from "./books";
import BooksCard from "./components/BookCard";
import HighRatedBooks from "./components/HighRatedBooks";
import BookDetails from "./components/BookDetails";
import FictionBooks from "./components/FictionBooks";
import BookAuthors from "./components/BookAuthors";

function App() {
  return (
    <>
      <h1 style={{ color: "orange" }}>
        Step 01 - Setup Books Data: <br /> Step 02 - BookCard Component
      </h1>
      {Books.map((book) => (
        <BooksCard {...book} />
      ))}

      <BooksCard books={Books} />

      <h1 style={{ color: "orange" }}>Step 03: Create Functional Components</h1>
      <HighRatedBooks books={Books} />
      <BookDetails books={Books} />
      <FictionBooks books={Books} />
      <BookAuthors books={Books} />
    </>
  );
}

export default App;
