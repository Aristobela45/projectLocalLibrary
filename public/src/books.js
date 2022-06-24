function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id)
  return found
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id)
  return found
}

function partitionBooksByBorrowedStatus(books) {
  let arr1 = books.filter((book) => book.borrows[0].returned === false);
  let arr2 = books.filter((book) => book.borrows[0].returned !== false)
  return [arr1,arr2 ]  
}

function getBorrowersForBook(book, accounts) {
  
  let result = book.borrows.map(borrower => { 
   let result = accounts.find(account => borrower.id === account.id )
   result.returned = borrower.returned 
   
   return result
  })
  console.log(result)
  return result.filter((borrower, i)=> result.findIndex(item => item.id === borrower.id) === i) 

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
