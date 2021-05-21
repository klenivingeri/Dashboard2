import {  AiFillTwitterSquare } from 'react-icons/ai'
import { MdChat } from 'react-icons/md'
import { FaShoppingCart }  from 'react-icons/fa'
import { RiTimeFill } from 'react-icons/ri'
import { ItemLista } from   './ItemLista'

export function NotificationTab(){
    return(
            <>
                <ItemLista cor="#00B5D8" title="Followers" alert="- 4" thema="blue">
                    <AiFillTwitterSquare />
                </ItemLista>
                <ItemLista cor="#D53F8C" title="New Comments" alert="+ 12" thema="pink">
                    <MdChat />
                </ItemLista>
                <ItemLista cor="#38A169" title="New Orders" alert="+ 12" thema="green">
                    <FaShoppingCart />
                </ItemLista>
                <ItemLista cor="#805AD5" title="Finished processing data!" alert="" thema="purple">
                    <RiTimeFill />
                </ItemLista>
            </>
    )
}