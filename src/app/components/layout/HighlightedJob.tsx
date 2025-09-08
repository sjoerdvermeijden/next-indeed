'use client'

import { IconBriefcase, IconClockFilled, IconCoins, IconLink, IconMapPinFilled } from '@tabler/icons-react';

import Image from 'next/image'

import { Job } from '../../types/job'

function HighlightedJob({ title, company, description, postal_code, salary, contract_type, work_days }: Job) {

    return (
        <div className="hidden md:block border rounded-md w-full sticky h-[calc(100vh-30px)] overflow-hidden top-4 left-0 overflow-y-auto overscroll-y-auto">
            <div className='sticky top-0 left-0 bg-white'>
                <div className='relative h-[76px] w-full lg:h-[132px] xl:h-[160px] mb-10 lg:mb-11'>
                    <figure className='h-full w-full rounded-t-sm overflow-hidden'>
                        <Image
                            src="https://placehold.co/530x120"
                            width={0}
                            height={0}
                            priority
                            style={{ width: '100%', height: '100%', objectFit: "cover" }}
                            quality={75}
                            alt="placeholder"
                            />
                    </figure>
                    <figure className='absolute top-[55px] lg:top-[117px] xl:top-[148px] left-[17px] w-[60px] h-[60px] rounded-md overflow-hidden z-10 shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.1)]'>
                        <Image
                            src="https://placehold.co/60x60"
                            width={0}
                            height={0}
                            style={{ width: '100%', height: '100%', objectFit: "cover" }}
                            quality={75}
                            alt="placeholder"
                            />
                    </figure>
                </div>
                <div className='p-5 shadow-md'>
                    <div className='mb-2'>
                        <h3 className='text-3xl font-bold mb-4'>{title}</h3>
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
                <div className='border-b-1 p-5'>
                    <h3 className='text-2xl font-bold mb-4'>Locatie</h3>
                    <div className='flex items-center'>
                        <IconMapPinFilled size={20} className='mr-4' />
                        <p className='-mb-1 text-lg'>{postal_code}</p>
                    </div>
                </div>
                <div className='border-b-1 p-5'>
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
                                <ul className='list-none'>
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
                    <div className='p-4' dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </div>
        </div >
    )
}

export default HighlightedJob