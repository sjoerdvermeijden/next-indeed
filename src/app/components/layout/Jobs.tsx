'use client'

import React, { useEffect } from 'react'

import Link from 'next/link'

import SingleJob from './SingleJob'

import { jobs } from '../../../../data'

function Jobs({ }) {
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
            sessionStorage.removeItem('scrollPosition');
        }
    }, []);
    return (
        <div className='w-full md:w-[435px] lg:w-[495px] shrink-0'>
            <ul className='list-none'>
                {
                    jobs.map((item) => {
                        return <li key={item.id} className='[&:not(:last-child)]:mb-3.5'>
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