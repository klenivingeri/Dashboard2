import {
    Button,
    Popover,
    PopoverArrow, 
    PopoverBody, 
    PopoverContent, 
    PopoverHeader, 
    PopoverTrigger,
    ListItem,
    Box,
    List,
    Text,
    PopoverFooter,
    Center
    } from "@chakra-ui/react"
    
import { AvatarButton } from "./AvatarButton"
import { BsFillGearFill ,BsFillPersonFill } from 'react-icons/bs'
import { AiOutlinePoweroff } from 'react-icons/ai'

export function Avatar(){

    return(
        <Popover trigger="hover">
            <PopoverTrigger>
                <Button w="45px" m="0" p="0" background="transparent" _hover={{ background:'transparent' }}>
                    <AvatarButton />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverHeader><Center> Welcome, Jason </Center></PopoverHeader>
                <PopoverBody>
                <List spacing={1}>
                    <ListItem display="flex" p="2" alignItems="center" _hover={{background:'gray.50'}} >
                         <Box color="blue" mx="2">
                            <BsFillPersonFill />
                        </Box> 
                            <Text>Profile</Text> 
                        
                    </ListItem>
                    <ListItem display="flex" p="2" alignItems="center" _hover={{background:'gray.50'}}>    
                        <Box color="green" mx="2">
                            <BsFillGearFill />
                        </Box>
                        <Text>Setting</Text>
                        
                    </ListItem>
                </List>
                </PopoverBody>
                <PopoverFooter>
                <ListItem display="flex" p="2" alignItems="center" _hover={{background:'orange.100'}}>    
                        <Box color="orange"  mx="2">
                            <AiOutlinePoweroff />
                        </Box>
                        <Text>Logout</Text>
                        
                    </ListItem>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}