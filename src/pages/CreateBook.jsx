// import React, { useState } from 'react';
// import { useMutation, gql } from '@apollo/client';

// const ADD_BOOK_MUTATION = gql`
//   mutation AddBook($title: String!, $author: String!) {
//     addBook(title: $title, author: $author) {
//       id
//       title
//       author
//     }
//   }
// `;

// const CreateBook = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const [addBook] = useMutation(ADD_BOOK_MUTATION, {
//     variables: {
//       name: name,
//       description: description
//     },
//     refetchQueries: ['GetBooks']
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addBook();
//     setName('');
//     setDescription('');
//   };

//   return (
//     <div>
//       <h2>Add a Book</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <label htmlFor="author">Description:</label>
//         <input
//           type="text"
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <br />
//         <button type="submit">Add Book</button>
//       </form>
//     </div>
//   );
// };

// export default CreateBook;

import React from 'react'

const CreateBook = () => {
  return (
    <div>CreateBook</div>
  )
}

export default CreateBook