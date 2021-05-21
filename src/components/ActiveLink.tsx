import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement, } from 'react'

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}
export function ActiveLink({
    children, 
    shouldMatchExactHref = false,
    ...rest}: ActiveLinkProps) {
    const { asPath } = useRouter()
    
    let isActive = false

    if(asPath == rest.href || asPath == rest.as){
        isActive = true
    }
 
    return(
        <Link {...rest} >
            {cloneElement( children,{
                color: isActive ? 'blue.400' : 'gray.400',
                background: isActive ? 'blue.50' : 'transparent',
                borderColor: isActive ? 'blue.500' : 'transparent'

            })}
        </Link>
    )
}

