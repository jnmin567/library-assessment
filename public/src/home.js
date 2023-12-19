function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    const borrows = books[i].borrows;
    if (!borrows[0].returned) {
      total++;
    }
  }
  return total;
}


function getMostCommonGenres(books) {
  let list = [];
  let genres = books.map((book)=>book.genre);
  let count = {}
  for (let i = 0; i < genres.length; i++) {
     if (!count[genres[i]]){
      count[genres[i]] = 1
     }else{
       count[genres[i]] ++
     }
    }
  let properties = Object.keys(count)
  list = properties.map((genre)=>{ return { name: genre, count: count[genre] }})
  list.sort((first, second)=> second.count - first.count)
            return list.slice(0,5)
}

function getMostPopularBooks(books) {
  const sortedBooks = books.map((book) => {
    return {name: book.title, count: book.borrows.length,};
  }).sort((first, second) => second.count - first.count).slice(0, 5);
  return sortedBooks;
}

function getMostPopularAuthors(books, authors) {
  const authorCounts = {};
  const sortedBooks = books.map((book) => {
    return {author: book.authorId, name: book.title, count: book.borrows.length};
  });
  for (let i = 0; i < sortedBooks.length; i++) {
    const book = sortedBooks[i];
    if (!authorCounts[book.author]) {
      authorCounts[book.author] = book.count;
    } else {
      authorCounts[book.author] += book.count;
    }
  }
  const sortedAuthors = Object.keys(authorCounts).map((authorId) => {
    const author = authors.find((author) => author.id === parseInt(authorId));
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: authorCounts[authorId],
    };
  }).sort((first, second) => second.count - first.count).slice(0, 5);
  return sortedAuthors;
}                  




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
