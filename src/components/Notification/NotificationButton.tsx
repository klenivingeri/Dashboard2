import { Box} from '@chakra-ui/react'
import { AiOutlineBell } from 'react-icons/ai'
import { BsFillCircleFill} from 'react-icons/bs'
export function NotificationButton(){
    return(
            <Box position="relative">
                <Box position="absolute" color="red" top={-1} right={0}>
                    <BsFillCircleFill fontSize="7" />
                </Box>
                    <AiOutlineBell fontSize="20" />
                </Box>
    )
}