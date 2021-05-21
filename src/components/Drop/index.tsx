import { Box, Stack, Text } from "@chakra-ui/layout";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    
  } from "@chakra-ui/react"


export function Drop(props){
    return(
        <Menu >
        <MenuButton>
          {props.title}
        </MenuButton>
        <MenuList autoSelect={true}>
        {props.children}
        </MenuList>
      </Menu>
        
    )

}

