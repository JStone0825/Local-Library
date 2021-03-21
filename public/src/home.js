function getTotalBooksCount(books) {
  //use reduce()
  let accumulator = 0;
  let result = books.reduce((acc, book) => acc + 1, accumulator);
  return result;
}

function getTotalAccountsCount(accounts) {
  //use reduce()
  let accumulator = 0;
  let result = accounts.reduce((acc, account) => acc + 1, accumulator);
  return result;
};

function getBooksBorrowedCount(books) {
  //user filter() & reduce()
  let accumulator = 0;
  const checkedOut = books.filter((book)=> !book.borrows[0].returned);
  let result = checkedOut.reduce((acc, checked) => acc + 1, accumulator);
  return result;
};

//helper function for last three>>
function limitToFive(dataSet){
  let newArray = dataSet.sort((countA, countB) => (countA.count < countB.count ? 1 : -1));
return newArray.slice(0, 5);
};

function getMostCommonGenres(books) {
  const commonGenres = [];
  for (let book of books) {
    const genre = commonGenres.find(
      (currentGenre) => currentGenre.name === book.genre
    );
    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1 });
    };
  };
  return limitToFive(commonGenres);
};

function getMostPopularBooks(books) {
  //use map()
  const all = books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  });
  return limitToFive(all);
};

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      };
    };
    const authors = { name: authorName, count: count };
    popularAuthors.push(authors);
  };
return limitToFive(popularAuthors);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
