import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    Center,
  } from "@chakra-ui/react"
import { NotificationBody } from "./NotificationBody"
import { NotificationButton } from "./NotificationButton"


export function Notification(){

    return(
        <Popover trigger="hover">
            <PopoverTrigger >
            <Button 
            box-sizing="border-box"
            display="flex" 
            alignItems="center"
            borderRadius="3"
            px="2"
            mx="4"
            height="65px"
            borderBottom="4px"
            borderColor="white"
            bg="transparent"
            position="relative"
            _hover={{
            textDecoration:'none',
            background: 'blue.50',
            borderBottom: '4px',
            borderColor: 'blue.500'
            }}
            >
            <NotificationButton />
            </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>

                    <NotificationBody />
                    
                </PopoverBody>
                <PopoverFooter>
                    <Center> SEE ALL NOTIFICATIONS </Center>
                </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}