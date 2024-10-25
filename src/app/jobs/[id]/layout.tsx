'use client'

import React from 'react'

import Wrap from '../../components/layout/Wrap';
import Jobs from '../../components/layout/Jobs';
import SearchForm from '@/app/components/layout/SearchForm';

import Providers from '../../providers'

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Wrap>
                <Providers>
                    <div className='flex flex-col items-center py-12'>
                        <SearchForm />
                        <div className='flex justify-center gap-5 relative grow'>
                            <Jobs />
                            {children}
                        </div>
                    </div>
                </Providers>
            </Wrap>
        </>
    )
}