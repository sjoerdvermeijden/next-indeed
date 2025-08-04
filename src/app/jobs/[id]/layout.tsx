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
                <div className='flex justify-center gap-6 py-12 relative grow'>
                    <Jobs />
                    {children}
                </div>
            </Wrap>
        </>
    )
}