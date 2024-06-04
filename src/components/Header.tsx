import Image from 'next/image'
import React from 'react'

interface HeaderProps {
    title: string
    subtitle?: string
}
export default function Header({title, subtitle}: HeaderProps) {
    return (
        <nav className='w-full  pt-2 pb-2 flex justify-between items-center border-b border-grayDark mb-3'>
            <div className='w-2/4'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className='w-2/4 flex justify-end items-center gap-4'>
                <div className='relative'>
                    <Image
                        src={'/search.svg'}
                        alt='user photo'
                        width={16}
                        height={16}
                        className='absolute left-3 top-1/2 transform -translate-y-1/2'
                    />
                </div>

            </div>
        </nav>
    )
}
