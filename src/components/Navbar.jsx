import { UnlockIcon } from "@chakra-ui/icons"
import { 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Spacer, 
  HStack, 
  useToast, 
  AvatarBadge,
  Avatar,
  Link
} from "@chakra-ui/react"
//import { Link } from '@chakra-ui/react'

//import { Link as ReactRouterLink } from 'react-router-dom'

export default function Navbar() {
  const toast = useToast()

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Joseph PayScapper App</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Avatar name="mario" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>bjolarge59@gmail.com</Text>

        {/* <Button 
          colorScheme="purple"
          onClick={() => toast({
            title: 'Logged in.',
            description: "Successfully logged in",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <UnlockIcon />,
          })}
        >Login</Button> */}
       <Link color='teal.500' href='login'>Login</Link>
        <Button 
          colorScheme="purple"
          onClick={() => toast({
            title: 'Logged out.',
            description: "Successfully logged out",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <UnlockIcon />,
          })}
        >Logout</Button>
      </HStack>
    </Flex>
  )
}