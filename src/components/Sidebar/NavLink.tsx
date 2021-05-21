import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    children: string;
    href: string
}

export function NavLink({icon, children, href, ...rest }: NavLinkProps){
    return(
        <ActiveLink href={href} passHref>
        <ChakraLink  {...rest} 
        box-sizing="border-box"
        display="flex" 
        alignItems="center"
        borderRadius="3"
        px="2"
        mx="1"
        height="65px"
        borderBottom="4px"
        borderColor="white"
        fontWeight="500"
        _hover={{
            textDecoration:'none',
            background: 'blue.50',
            borderBottom: '4px',
            borderColor: 'blue.500'
        }}
        >
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medim" >{children}</Text>
        </ChakraLink>
        </ActiveLink>
    )
}