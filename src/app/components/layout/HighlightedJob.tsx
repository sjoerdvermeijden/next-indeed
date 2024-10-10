import React from 'react'

import { Job } from '../../types/job'

function HighlightedJob({ title, company, postal_code }: Job) {
    return (
        <div className='border rounded w-full sticky h-[831px] top-4 left-0 overflow-scroll'>
            <div className='p-4'>
                <h3 className='text-2xl font-bold mb-4'>{title}</h3>
                <p>{company}</p>
                <p>{postal_code}</p>
            </div>
            <div className='border-b-1 p-4'>
                <h3 className='text-xl font-bold'>Vacaturegegevens:</h3>
            </div>
            <div className='border-b-1 p-4'>
                <h3 className='text-xl font-bold'>Location:</h3>
                <ul>
                    <li><p className='font-bold'>Salaris</p></li>
                    <li><p className='font-bold'>Dienstverband</p></li>
                    <li><p className='font-bold'>Werkdagen</p></li>
                </ul>
            </div>
        </div>
    )
}

export default HighlightedJob