import { Container, Flex, Spacer, Box, Heading} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
        <Container maxW="300rem" bg='red.600' color='#252525'>
            <Flex alignContent="center" gap="2">
                <Box p="2" color="black">
                    <Heading size="md">Munay Cosas Maravillosas</Heading>
                </Box>
                    <Spacer/>
                <Box p="2" color="black">
                    <CartWidget/>
                </Box>
            </Flex>
        </Container>
    </>);
};

export default NavBar;