import { Flex, Avatar, Text,Divider } from "@chakra-ui/react";
import { BiTimeFive } from 'react-icons/bi'

export function Messages(props){
    const img = "assets/avatar/" + props.avatar
    return(
        <>
        <Flex flex="1" alignItems="center">

            <Avatar
                size="sm"
                name="Kola Tioluwani"
                src={img}
            />
            <Flex flex="1" mx="2" flexDirection="column">
                <Flex flex="1" fontSize="13"  flexDirection="row" alignItems="center">
                    <Text  mr="1" color="blue.500" > {props.name}</Text> 
                    <Text >{props.message}</Text>
                </Flex>
                <Flex flex="1"  flexDirection="row" alignItems="center"> 
                    <BiTimeFive fontSize="13" />
                    <Text mx="1" fontSize="11"> a moment ago</Text>
                </Flex>
            </Flex>
            
        </Flex>
        <Divider my="2" orientation="horizontal" />
        </>
    )
}