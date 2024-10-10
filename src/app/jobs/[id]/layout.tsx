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
                <div className='flex justify-center py-12 gap-5 relative grow'>
                    <Jobs />
                    {children}
                </div>
            </Wrap>
        </>
    )
}