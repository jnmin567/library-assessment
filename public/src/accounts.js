function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i];
    }
  }
  return null;
}


function testFindAccountById(accounts, id) {
  const account = findAccountById(accounts, id);
  console.log(account);
}





function sortAccountsByLastName(accounts) {
  accounts.sort((first,second)=>{
    if (first.name.last < second.name.last){
      return -1;
    }
    if (first.name.last > second.name.last){
      return 1;
    }
    return 0;
  });
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const borrowedBooks = books.filter(book => {
    return book.borrows.some(borrow => borrow.id === account.id);
  });
  return borrowedBooks.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOut = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrows = book.borrows;
    const recentBorrow = borrows[0];
    if (recentBorrow.id === account.id && !recentBorrow.returned) {
      const author = authors.find((author) => author.id === book.authorId);
      checkedOut.push({ ...book, author });
    }
  }
  return checkedOut;
}

function testGetBooksPossessedByAccount(account, books, authors) {
  const checkedOut = getBooksPossessedByAccount(account, books, authors);
  console.log(checkedOut);
}






module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
