import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    useDisclosure
  } from "@chakra-ui/react"
import React from "react"
  import { RiAddCircleFill} from 'react-icons/ri'

export function CreateNew(){

            const { isOpen, onOpen, onClose } = useDisclosure()
            const firstField = React.useRef()
          
            return (
              <>
                <Button  leftIcon={<RiAddCircleFill fontSize="30" />}  colorScheme="blue" onClick={onOpen}>
                  Create New
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  initialFocusRef={firstField}
                  onClose={onClose}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                      Create a new account
                    </DrawerHeader>
          
                    <DrawerBody>
                      <Stack spacing="24px">
                        <Box>
                          <FormLabel htmlFor="username">Name</FormLabel>
                          <Input
                            ref={firstField}
                            id="username"
                            placeholder="Please enter user name"
                          />
                        </Box>
          
                        <Box>
                          <FormLabel htmlFor="url">Url</FormLabel>
                          <InputGroup>
                            <InputLeftAddon>http://</InputLeftAddon>
                            <Input
                              type="url"
                              id="url"
                              placeholder="Please enter domain"
                            />
                            <InputRightAddon>.com</InputRightAddon>
                          </InputGroup>
                        </Box>
          
                        <Box>
                          <FormLabel htmlFor="owner">Select Owner</FormLabel>
                          <Select id="owner" defaultValue="segun">
                            <option value="segun">Segun Adebayo</option>
                            <option value="kola">Kola Tioluwani</option>
                          </Select>
                        </Box>
          
                        <Box>
                          <FormLabel htmlFor="desc">Description</FormLabel>
                          <Textarea id="desc" />
                        </Box>
                      </Stack>
                    </DrawerBody>
          
                    <DrawerFooter borderTopWidth="1px">
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="blue">Submit</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            )
          }
