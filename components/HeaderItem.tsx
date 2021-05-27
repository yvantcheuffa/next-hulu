import React from "react";
import {
    HomeIcon,
    CollectionIcon,
    BadgeCheckIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

interface HeaderItemProps {
    itemIndex: number
}

export const HeaderItem: React.FC<HeaderItemProps> = ({itemIndex}) => {

    const labels = Array.of(
        'HOME',
        'TRENDING',
        'VERIFIED',
        'COLLECTIONS',
        'SEARCH',
        'ACCOUNT'
    )

    const Icons = Array.of(
        HomeIcon,
        LightningBoltIcon,
        BadgeCheckIcon,
        CollectionIcon,
        SearchIcon,
        UserIcon
    )
    const Icon = Icons[itemIndex]
    return (
        <div className={"group flex flex-col hover:text-white items-center w-12 sm:w-20"}>
            <Icon className={'h-8 mb-1 group-hover:animate-bounce'} />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{labels[itemIndex]}</p>
        </div>
    )
}