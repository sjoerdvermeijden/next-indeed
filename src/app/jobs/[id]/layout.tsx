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
                <div className='relative w-full py-12 sm:flex sm:justify-center sm:gap-6 sm:grow'>
                    <Jobs />
                    {children}
                </div>
            </Wrap>
        </>
    )
}