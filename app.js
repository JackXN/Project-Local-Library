
//  let accounts = [{
//     "id": "5f446f2ecfaf0310387c9603",
//     "name": {
//       "first": "Esther",
//       "last": "Tucker"
//     },
//     "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
//     "age": 25,
//     "company": "ZILLACON",
//     "email": "esther.tucker@zillacon.me",
//     "registered": "Thursday, May 28, 2015 2:51 PM"
//   }
  
// ]


// let books = [
//     {
//     "id": "5f4471327864ee880caf5afc",
//     "title": "reprehenderit quis laboris adipisicing et",
//     "genre": "Poetry",
//     "authorId": 20,
//     "borrows": [
//       {
//         "id": "5f446f2e2a4fcd687493a775",
//         "returned": false
//       },
//       {
//         "id": "5f446f2ebe8314bcec531cc5",
//         "returned": true
//       },
//       {
//         "id": "5f446f2ea508b6a99c3e42c6",
//         "returned": true
//       }
//     ]
//   }

//   const authors = [
//     {
//       id: 0,
//       name: {
//         first: "Lucia",
//         last: "Moreno",
//       },
//     },
//     {
//       id: 1,
//       name: {
//         first: "Trisha",
//         last: "Mathis",
//       },
//     },
//     {
//       id: 2,
//       name: {
//         first: "Arnold",
//         last: "Marks",
//       },
//     },
//     {
//       id: 3,
//       name: {
//         first: "Faye",
//         last: "Arnold",
//       },
//     },
//     {
//       id: 4,
//       name: {
//         first: "Tami",
//         last: "Hurst",
//       },
//     }
// ]

//! Should return the account object when given a particular id.
// * May be used as a helper function?

const findAccountById = (accounts,id) => {
    for(let account of accounts) {
      if(account.id === id) {
        return account
      }
    }
  
  }

findAccountById(accounts, '5f446f2ecfaf0310387c9603')




//! Should return the list of accounts ordered by last name
const  sortAccountsByLastName = accounts => {
    let result = accounts.sort((user1, user2) => user1.name.last < user2.name.last ? -1 : 1)
    return result
  }

sortAccountsByLastName(accounts)




//! Number of Borrows
// * Should return the number of times an account has created a 'borrow' record

const numberOfBorrows = (accounts, books) => {
    const numberOfBorrows = (accounts,books) => {
      let result = books.reduce((acc, book) => {
          for(let i = 0; i< books.borrows.length; i++){
              if(book.borrows[i].id === accounts.id) 
              {
                  acc++
              }}
      
          return acc
      }, 0)
      return result
      }
  }

//! getBooksPossesedByAccount
//*Should reutn all of the books taken out by an account with the author embedded

const getPossessedByAccount = (account,books,authors) => {
    books.filter((book) => book.borrows.some(borrowed => borrowed.id === account.id ** borrowed.returned === false))

    .map(book => {let author = authors.find(author => author.id === book.authorId)
    book.author = author ;return book
    })
}