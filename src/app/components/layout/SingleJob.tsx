import React from 'react'

import Image from 'next/image'

import { IconBriefcase, IconClockFilled, IconCoins, IconLink, IconMapPinFilled } from '@tabler/icons-react';

import { Job } from '@/app/types/job'

function SingleJob({ title, company, description, postal_code, salary, contract_type, work_days }: Job) {
  return (
    <>
        <div className='relative h-[115px] p-6 w-full lg:h-[160px] xl:h-[190px] mb-4 lg:mb-11'>
          <figure className='h-full w-full overflow-hidden'>
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
          <figure className='absolute top-[65px] lg:top-[125px] xl:top-[148px] left-[30px] w-[60px] h-[60px] rounded-md overflow-hidden z-10 shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.1)]'>
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
      <div className='p-6'>
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
            <div className='p-6' dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      </div>
    </>
  )
}

export default SingleJob