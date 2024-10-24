'use client'

import { IconBriefcase, IconClockFilled, IconCoins, IconLink, IconMapPinFilled } from '@tabler/icons-react';

import Image from 'next/image'

import { Job } from '../../types/job'

function HighlightedJob({ title, company, description, postal_code, salary, contract_type, work_days }: Job) {

    return (
        <div className="border rounded-md w-full sticky h-[calc(100vh-89px)] overflow-hidden top-4 left-0 overflow-y-auto overscroll-y-auto">
            <div className='sticky top-0 left-0 bg-white'>
                <div className='aspect-[5/1] mb-8 relative'>
                    <Image
                        src="https://placehold.co/530x120"
                        width={0}
                        height={0}
                        priority
                        style={{ height: '110px', width: '100%', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', objectFit: "cover" }}
                        quality={75}
                        alt="placeholder"
                    />
                    <Image
                        src="https://placehold.co/60x60"
                        width={0}
                        height={0}
                        style={{ height: '60px', width: '60px', borderRadius: '5px', position: 'absolute', top: '80px', left: '14px', objectFit: "cover", boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                        quality={75}
                        alt="placeholder"
                    />
                </div>
                <div className='p-4 shadow-md'>
                    <div className='mb-2'>
                        {
                            title &&
                            <h3 className='text-2xl font-bold mb-4'>{title}</h3>
                        }
                        <div className='flex items-center mb-1'>
                            <a href="https://www.google.nl/" className='underline mr-2 text-lg' target="_blank">{company}</a><IconLink size={20} />
                        </div>
                        <p className='text-lg'>{postal_code}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-lg'>{salary} - {contract_type}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='border-b-1 p-4 '>
                    <h3 className='text-2xl font-bold mb-4'>Locatie</h3>
                    <div className='flex items-center'>
                        <IconMapPinFilled size={20} className='mr-4' />
                        <p className='-mb-1 text-lg'>{postal_code}</p>
                    </div>
                </div>
                <div className='border-b-1 p-4'>
                    <h3 className='text-2xl font-bold mb-4'>Vacaturegegevens</h3>
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
                    <div className='p-4'>
                        <p>{description}</p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default HighlightedJob