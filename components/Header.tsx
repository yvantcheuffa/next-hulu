import React from "react";
import Image from 'next/image'
import {HeaderItem} from "./HeaderItem";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header className={'flex flex-col sm:flex-row m-5 justify-between h-auto items-center'}>
            <div className={'flex flex-grow justify-evenly max-w-2xl'}>
                {Array.from(Array(6).keys()).map((i) => <HeaderItem key={i} itemIndex={i}/>)}
            </div>
            <Image
                src={'https://links.papareact.com/ua6'}
                width={200}
                height={100}
                className={'object-contain'}
            />
        </header>
    )
}