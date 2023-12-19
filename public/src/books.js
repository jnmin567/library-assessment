function findAuthorById(authors, id) {
   for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
  return null;
}

function findBookById(books, id) {
  const book = books.reduce((account, book) => {
    if (book.id === id) {
      return book;
    }
    return account;
  }, null);
  return book;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = [];
  const available = [];
  for (let i = 0; i < books.length; i++) {
    const borrows = books[i].borrows;
    if (borrows[0].returned === false) {
      borrowed.push(books[i]);
    } else {
      available.push(books[i]);
    }
  }
  return [borrowed, available];
}


function getBorrowersForBook(book, accounts) {
  let list = []
  for (let i = 0; i < accounts.length; i++) {
    let obj = accounts[i]
    for (let j = 0; j < book.borrows.length; j++){
    if (book.borrows !== undefined && book.borrows[j].id === obj.id) {
     list.push({...accounts[i], returned: book.borrows[j].returned})
    }
   }
  }
  console.log(list)
  return list.slice(0, 10)
}

  

//goes through book input, if borrows.id === true, the gets added to a list and returned overall. 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
