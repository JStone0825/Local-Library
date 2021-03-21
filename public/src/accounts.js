function findAccountById(accounts, id) {
  //use find() 
  return accounts.find((account) => account.id === id);
};

function sortAccountsByLastName(accounts) {
  //use sort()
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
};

function getTotalNumberOfBorrows({ id }, books) {
  //can destructure account for just id
  //use forEach()
  let borrows = 0;
  books.forEach((book) => {
    //use some()
    if (book.borrows.some((user) => user.id === id)) {
      borrows++;
    }
  });
  return borrows;
};

function getBooksPossessedByAccount({ id }, books, authors) {
  let checkedOut = [];
  for (let book in books) {
    const thisBook = books[book];
    const borrowers = thisBook.borrows;
    const isCheckedOut = borrowers.some(
      (borrow) => borrow.id === id && !borrow.returned
    );
    if (isCheckedOut) {
      let bookAuthor = authors.find((author) => author.id === thisBook.authorId);
      let match = thisBook;
      match.author = bookAuthor;
      checkedOut.push(match);
    }
  }
  return checkedOut;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
