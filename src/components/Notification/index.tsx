import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
  } from "@chakra-ui/react"
  import { AiOutlineBell } from 'react-icons/ai'

export function Notification(){
    return(
        <Popover>
            <PopoverTrigger>
                <Button 
                    box-sizing="border-box"
                    display="flex" 
                    alignItems="center"
                    borderRadius="3"
                    px="2"
                    mx="1"
                    height="65px"
                    borderBottom="4px"
                    borderColor="white"
                    bg="transparent"
                _hover={{
                    textDecoration:'none',
                    background: 'blue.50',
                    borderBottom: '4px',
                    borderColor: 'blue.500'
                }}>
                    <AiOutlineBell />
                </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Header</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    <Button colorScheme="blue">Button</Button>
                </PopoverBody>
                <PopoverFooter>This is the footer</PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}