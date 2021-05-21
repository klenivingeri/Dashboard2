import { Center } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
export function Hamburger() {
    return(
        <Center
            as="div" 
            w="60px"
            h="60px"
            borderRadius="5"
            >
                <HamburgerIcon
                fontSize="40"
                color="gray.400"
                p="2"
                borderRadius="5px"
                
                _hover={{
                    color: 'gray.400',
                    fontSize: "39px",
                    background:  'gray.50',
                    border: '1px',
                    borderColor: 'gray.100'

                }}
        />
        </Center>
    )
}