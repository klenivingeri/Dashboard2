import {
    Menu,
    MenuButton,
    MenuList,
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

