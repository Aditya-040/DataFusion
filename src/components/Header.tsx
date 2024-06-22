import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <nav className='w-full pl-5 pt-2 pb-2 flex justify-between items-center'>
            <Image src={'/logo.png'} width={125} height={75} alt="logo"/>
        </nav>
    )
}
