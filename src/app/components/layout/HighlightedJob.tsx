import React from 'react'

import { IconBriefcase, IconClockFilled, IconCoins, IconLink, IconMapPinFilled } from '@tabler/icons-react';

import Image from 'next/image'

import { Job } from '../../types/job'

function HighlightedJob({ title, company, background_image, postal_code, salary, contract_type, work_days }: Job) {
    return (
        <div className='border rounded-md w-full sticky h-[831px] top-4 left-0 overflow-scroll'>
            <div className='aspect-[5/1] mb-8 relative'>
                <Image
                    src={background_image?.img}
                    width={0}
                    height={0}
                    style={{ height: '100px', width: '100%', objectFit: "cover" }}
                    quality={75}
                    alt={background_image?.alt}
                />
                <Image
                    src={background_image?.img}
                    width={0}
                    height={0}
                    style={{ position: 'absolute', width: '60px', height: '60px', bottom: '-30px', left: '13px', borderRadius: '3px', objectFit: "" }}
                    quality={100}
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
            <div className='border-b-1 p-4 '>
                <h3 className='text-xl font-bold mb-4'>Locatie</h3>
                <div className='flex items-center'>
                    <IconMapPinFilled size={20} className='mr-4' />
                    <p className='-mb-1'>{postal_code}</p>
                </div>
            </div>
            <div className='border-b-1 p-4'>
                <h3 className='text-xl font-bold mb-4'>Vacaturegegevens</h3>
                <ul>
                    <li className='flex mb-4'>
                        <IconCoins size={20} className='mr-4' />
                        <div>
                            <div className='flex items-center mb-2'>
                                <p className='font-bold'>Salaris</p>
                            </div>
                            <div className='bg-gray-200 px-2 py-1 inline-block rounded-md text-sm font-bold'>{salary}</div>
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
                    <li className='flex mb-4'>
                        <IconClockFilled size={20} className='mr-4' />
                        <div>
                            <div className='flex items-center mb-2'>
                                <p className='font-bold'>Werkdagen</p>
                            </div>
                            <div className='bg-gray-200 px-2 py-1 inline-block rounded-md text-sm font-bold'>{work_days}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default HighlightedJob