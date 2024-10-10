import React from 'react'

import { Job } from '../../types/job'

function SingleJob({ title, company, short_description, postal_code, contract_type }: Job) {
    return (
        <div className='p-4 border w-full rounded-md group transition-colors duration-200 hover:shadow-md hover:cursor-pointer'>
            <h1 className='text-xl font-bold mb-2 group-hover:underline'>{title}</h1>
            <div className='mb-2'>
                <p>{company}</p>
                <p>{postal_code}</p>
            </div>
            <div className='bg-gray-200 py-1 px-2 rounded-md font-bold inline-block mb-2 text-sm'>{contract_type}</div>
            <p>{short_description}</p>
        </div>
    )
}

export default SingleJob