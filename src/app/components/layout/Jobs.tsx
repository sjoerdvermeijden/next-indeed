'use client'

import React, { useEffect } from 'react'

import Link from 'next/link'

import SingleJob from './SingleJob'

import { Job } from '../../types/job'

import { jobs } from '../../../../data'

function Jobs({ }: Job[]) {
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
            sessionStorage.removeItem('scrollPosition');
        }
    }, []);
    return (
        <div className='w-[473px] min-w-[473px]'>
            <ul>
                {
                    jobs?.map((item) => {
                        return <li key={item.id} className='[&:not(:last-child)]:mb-3'>
                            <Link href={`/jobs/${item.id}`} onClick={() =>
                                sessionStorage.setItem('scrollPosition', window.scrollY.toString())
                            }>
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