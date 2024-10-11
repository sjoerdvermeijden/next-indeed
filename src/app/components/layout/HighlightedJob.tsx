import React from 'react'

import { IconBriefcase, IconClockFilled, IconCoins, IconLink, IconMapPinFilled } from '@tabler/icons-react';

import Image from 'next/image'

import { Job } from '../../types/job'

function HighlightedJob({ title, company, background_image, description, postal_code, salary, contract_type, work_days }: Job) {
    return (
        <div className='border rounded-md w-full sticky h-screen overflow-hidden top-4 left-0'>
            <div className='sticky'>
                <div className='aspect-[5/1] mb-8 relative'>
                    <Image
                        src={background_image?.img}
                        width={0}
                        height={0}
                        style={{ height: '100px', width: '100%', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', objectFit: "cover" }}
                        quality={75}
                        alt={background_image?.alt}
                    />
                    <div className='w-[60px] h-[60px] rounded-md shadow-md absolute top-[70px] left-4 z-10 bg-white flex items-center justify-center text-3xl'>SV</div>
                </div>
                <div className='p-4 shadow-md'>
                    <div className='mb-2'>
                        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
                        <div className='flex mb-1'>
                            <a href="https://www.google.nl/" className='underline mr-2 text-lg' target="_blank">{company}</a><IconLink size={20} />
                        </div>
                        <p className='text-lg'>{postal_code}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-lg'>{salary} - {contract_type}</p>
                    </div>
                </div>
            </div>
            <div className='overflow-y-auto'>
                <div className='border-b-1 p-4 '>
                    <h3 className='text-xl font-bold mb-4'>Locatie</h3>
                    <div className='flex items-center'>
                        <IconMapPinFilled size={20} className='mr-4' />
                        <p className='-mb-1 text-lg'>{postal_code}</p>
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
                <div>
                    <div className='p-4 overflow-y-scroll'>
                        <p>{description}</p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default HighlightedJob