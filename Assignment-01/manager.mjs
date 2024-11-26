import books from "./books.mjs";

// +++++   Grater then 4.5 rating Books titles  +++++
let booksTitle = books
  .filter((book) => book.rating > 4.5)
  .map((book) => console.log(book.title)); 

  console.log("-------------------------------------------");
  

// +++++   Fiction Books   +++++
books
  .filter((book) => book.genre === "Fiction")
  .map((fiction) => console.log(fiction.title));

  console.log("-------------------------------------------");


// +++++  Array of Books Author   +++++
let booksAuthor = books
  .map((book) => book.author);

console.log(booksAuthor); 

console.log("-------------------------------------------");


// +++++   All Book Author   +++++
let allBooks = books
  .map((book) => console.log(book));
  

