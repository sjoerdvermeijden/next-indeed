import React from 'react'

import Job from './Job'

import { jobs } from '../../../../data'

function Jobs({ }: Job[]) {
    return (
        <div className='w-[500px]'>
            <ul>
                {
                    jobs?.map((item) => {
                        return <li key={item.id} className='[&:not(:last-child)]:mb-3'>
                            <Job {...item} />
                        </li>;
                    })
                }
            </ul>
        </div>
    )
}

export default Jobs