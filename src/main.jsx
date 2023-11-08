import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
//import { ApolloProvider } from '@apollo/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <App />
      {/* </ApolloProvider> */}
    </React.StrictMode>
  </ChakraProvider>
)
