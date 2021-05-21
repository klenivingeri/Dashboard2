import { Image } from "@chakra-ui/react"

export function Avatar(){
    return(
        <Image
            borderRadius="4"
            boxSize="45px"
            objectFit="cover"
            src="assets/avatar/avatar6.jpg"
        />
    )
}