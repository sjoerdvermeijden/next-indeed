'use client'

import React from 'react'

import Wrap from '../../components/layout/Wrap';
import Jobs from '../../components/layout/Jobs';

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {

    return (
        <>
            <Wrap>
                <div className='relative w-full md:flex md:justify-center md:gap-7 md:grow'>
                    <Jobs />
                    {children}
                </div>
            </Wrap>
        </>
    )
}