import { Box, Image } from '@chakra-ui/react'

export function AvatarButton(){
    return(
            <Box position="relative">
                <Image
                border="1px"
                borderColor="gray.100"
                    borderRadius="4"
                    boxSize="45px"
                    objectFit="cover"
                    src="assets/avatar/avatar6.jpg"
                />
                </Box>
    )
}