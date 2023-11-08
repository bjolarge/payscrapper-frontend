// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
//   Button,
//   Link
// } from '@chakra-ui/react'

// const BOOKS_QUERY = gql`
//   query GetBooks {
//     books {
//       id
//       name
//       description
//     }
//   }
// `;

// const Look = () => {
//   const { loading, error, data } = useQuery(BOOKS_QUERY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h2>Book List</h2>
//       {/* <ul>
//         {data.books.map(book => (
//           <li key={book.id}>
//             {book.title} by {book.author}
//           </li>
//         ))}
//       </ul> */}

// <TableContainer>
//   <Table variant='simple'>
//     <TableCaption>PayScrapper Book Table</TableCaption>
//     <Thead>
//       <Tr>
//         <Th>Book Name</Th>
//         <Th>Description</Th>
//         <Th >Actions</Th>
//       </Tr>
//     </Thead>
//     <Tbody>
//       {/* <Tr>
//         <Td>inches</Td>
//         <Td>millimetres (mm)</Td>
//         <Td><Button  pl={2} colorScheme="blue">
//         <Link color='white' href='create'>Create</Link></Button>
//         <Button m={2} colorScheme="yellow"> <Link color='white' href='update'>Update</Link></Button>
//         <Button pl={2}  colorScheme="red"> <Link color='white' href='delete'>Delete</Link></Button>
//         </Td>
//       </Tr> */}

// {data.books.map(book => (
//               <Tr key={book.id}>
//                 <Td>{book.name}</Td>
//                 <Td>{book.description}</Td>
//               </Tr>
//             ))}
//     </Tbody>
//   </Table>
// </TableContainer>
//     </div>
//   );
// };

// export default Look;

import React from 'react'

const Look = () => {
  return (
    <div>Looking up now </div>
  )
}

export default Look