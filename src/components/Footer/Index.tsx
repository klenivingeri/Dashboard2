import { Flex, Text } from "@chakra-ui/layout";

export  function Footer(){
    return(
        <Flex   
        position="fixed" 
        flexDirection="row"
        flex="1"
        left="0"
        bottom="0"
        h="65"
        width="100%"
        background="white"
        justifyContent="center"
        fontSize="20"
        borderTop="1px"
        borderColor="gray.100"
        pt={2}
        >
                <Text color="blue">ti</Text>
                <Text color="green">me</Text>
                <Text color="pink">ly</Text>
                <Text color="orange" >ne</Text>
                <Text color="gray.300" ml="2">© 2021</Text>
        </Flex>
    )
}