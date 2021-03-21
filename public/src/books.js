function findAuthorById(authors, id) {
  //use find()
  return authors.find((author) => author.id === id);
};

function findBookById(books, id) {
  //use find()
  return books.find((book) => book.id === id);
};

function partitionBooksByBorrowedStatus(books) {
  //user forEach(), some()
  let arrayOne = [];
  let arrayTwo = [];
  let combinedArray = [arrayOne, arrayTwo];
  books.forEach((book) => book.borrows.some((borrow) => borrow.returned === false) ? arrayOne.push(book) : arrayTwo.push(book));
  return combinedArray;
};

function getBorrowersForBook(book, accounts) {
  //use map()
  const length = 10 
  const borrowerList = book.borrows.map((borrow) => {
    const account = accounts.find((acc) => acc.id === borrow.id);
    return {...borrow, ...account}
  });
  return borrowerList.slice(0, length);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
