import { Badge, Box, Flex, ListItem } from "@chakra-ui/react";

export function ItemLista(props){
    return(
        
            
            
        <ListItem display="flex" flex="1" p="1" justifyContent="space-between"  alignItems="center" _hover={{background:'gray.50'}}>
            <Flex display="flex" flex="1"  alignItems="center">
            <Box fontSize="35" mx="1" color={props.cor} > 
                {props.children}                     
            </Box> 
            {props.title}
            </Flex>
            <Badge variant="outline" color={props.cor} colorScheme={props.thema}>
             {props.alert}
            </Badge>
        </ListItem>
                                
 
        
    )
}