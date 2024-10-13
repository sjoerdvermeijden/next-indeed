'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import { Job } from '../../types/job'

function SingleJob({ id, title, company, short_description, postal_code, contract_type, thumbnail }: Job) {
    const pathname = usePathname()

    return (
        <div className={`p-4 border ${pathname === `/jobs/${id}` ? 'border-blue-900' : ''} w-full rounded-md group transition-colors duration-200 hover:shadow-md hover:cursor-pointer relative`}>
            <h3 className='text-2xl font-bold mb-2 group-hover:underline'>{title}</h3>
            <div className='mb-2'>
                <p>{company}</p>
                <p>{postal_code}</p>
            </div>
            <div className='bg-gray-200 py-1 px-2 rounded-md font-bold inline-block mb-2 text-sm'>{contract_type}</div>
            <p className=''>{short_description}</p>
        </div >
    )
}

export default SingleJob