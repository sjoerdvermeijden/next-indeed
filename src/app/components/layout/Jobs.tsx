import React from 'react'

import Link from 'next/link'

import SingleJob from './SingleJob'

import { Job } from '../../types/job'

import { jobs } from '../../../../data'

function Jobs({ }: Job[]) {
    return (
        <div className='w-[500px]'>
            <ul>
                {
                    jobs?.map((item) => {
                        return <li key={item.id} className='[&:not(:last-child)]:mb-3'>
                            <Link href={`/jobs/${item.id}`}>
                                <SingleJob {...item} />
                            </Link>
                        </li>;
                    })
                }
            </ul>
        </div>
    )
}

export default Jobs