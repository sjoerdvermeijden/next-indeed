import React from 'react'

import { IconBriefcase, IconClockFilled, IconCoins, IconLink } from '@tabler/icons-react';

import Image from 'next/image'

import { Job } from '../../types/job'

function HighlightedJob({ title, company, background_image, postal_code, contract_type }: Job) {
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
                <div className='flex mb-1'>
                    <a href="https://www.google.nl/" className='underline mr-2' target="_blank">{company}</a><IconLink size={20} />
                </div>
                <p>{postal_code}</p>
            </div>
            <div className='border-b-1 p-4'>
                <h3 className='text-xl font-bold mb-6'>Location:</h3>
            </div>
            <div className='border-b-1 p-4'>
                <h3 className='text-xl font-bold mb-6'>Vacaturegegevens:</h3>
                <ul>
                    <li className='mb-4'>
                        <div className='flex items-center mb-2'>
                            <IconCoins size={20} className='mr-4' />
                            <p className='font-bold'>Salaris</p>
                        </div>
                    </li>
                    <li className='flex mb-4'>
                        <IconBriefcase size={20} className='mr-4' />
                        <div>
                            <div className='flex items-center mb-2'>
                                <p className='font-bold'>Dienstverband</p>
                            </div>
                            <ul>
                                <li></li>
                                <li><div className='bg-gray-200 px-2 py-1 inline-block rounded-md text-sm font-bold'>{contract_type}</div></li>
                            </ul>
                        </div>
                    </li>
                    <li className='mb-4'>
                        <div className='flex items-center mb-2'>
                            <IconClockFilled size={20} className='mr-4' />
                            <p className='font-bold'>Werkdagen</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default HighlightedJob