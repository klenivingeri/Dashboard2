import {Flex, Select } from '@chakra-ui/react'
import {FaBuilding} from 'react-icons/fa'
import { Sidebar } from '../Sidebar'

import { Hamburger } from './Hamburger'
import { Logo } from './Logo'
import { CreateNew } from '../CreateNew'
import { Notification } from '../Notification'
import { Avatar } from '../Avatar'


export default function Header(){
    return(
        <Flex
            as="header" 
            width="100%"
            height="65px"
            px="2"
            alignItems="center"
            background="white"
        >
            <Flex alignItems="center" 
                py="8"
                pr="5"
                h="65px"
                mr="2"
                borderRight="1px" 
                borderColor="gray.100"
            >
                <Hamburger /> 
                <Logo />
            </Flex>
            <Flex display="flex" flex="1" justifyContent="space-between">
                <Sidebar />
                <Flex 
                    display="flex"
                    alignItems="center"
                    
                >
                    <FaBuilding fontSize={20} />
                    <Select 
                        mx="3" 
                        width="200" 
                        placeholder="Magalu">
                        <option value="option2">Netshoes</option>
                    </Select>
                    <CreateNew />
                    <Notification />
                    <Avatar />
                </Flex>
            </Flex>
        </Flex>
    )
}