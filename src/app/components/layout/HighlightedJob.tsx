import React from 'react'

import { IconBriefcase, IconClockFilled, IconCoins } from '@tabler/icons-react';

import Image from 'next/image'

import { Job } from '../../types/job'

function HighlightedJob({ title, company, background_image, postal_code }: Job) {
    return (
        <div className='border rounded-md w-full sticky h-[831px] top-4 left-0 overflow-scroll'>
            <div className='aspect-[5/1] overflow-hidden'>
                <Image
                    src={background_image?.img}
                    width={500}
                    height={100}
                    style={{ objectFit: "cover" }}
                    alt={background_image?.alt}
                />
            </div>
            <div className='p-4 shadow-md'>
                <h3 className='text-2xl font-bold mb-4'>{title}</h3>
                <a href="https://www.google.nl/" className='underline' target="_blank">{company}</a>
                <p>{postal_code}</p>
            </div>
            <div className='border-b-1 p-4'>
                <h3 className='text-xl font-bold mb-6'>Location:</h3>
            </div>
            <div className='border-b-1 p-4'>
                <h3 className='text-xl font-bold mb-6'>Vacaturegegevens:</h3>
                <ul>
                    <li className='flex items-center mb-4'>
                        <IconCoins size={20} className='mr-4' />
                        <p className='font-bold'>Salaris</p>
                    </li>
                    <li className='flex items-center mb-4'>
                        <IconBriefcase size={20} className='mr-4' />
                        <p className='font-bold'>Dienstverband</p>
                    </li>
                    <li className='flex items-center mb-4'>
                        <IconClockFilled size={20} className='mr-4' />
                        <p className='font-bold'>Werkdagen</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HighlightedJob