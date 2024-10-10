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
                <div className='flex justify-center py-12 gap-3 relative'>
                    <Jobs />
                    {children}
                </div>
            </Wrap>
        </>
    )
}