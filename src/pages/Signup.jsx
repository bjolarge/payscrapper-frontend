import React,  {useState} from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

export default function Signup() {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            name:"",
            email: "",
            password: "",
            //rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 3));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                <Text colorScheme="green" w="full"> Kindly register PayScrappers</Text>

                  <FormLabel htmlFor="name">Enter Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />

                  {/* email field */}
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      if (value.length < 8) {
                        return "Password should be at least 8 characters and a strong one.";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
               
                <Button type="submit" colorScheme="green" w="full">
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );
