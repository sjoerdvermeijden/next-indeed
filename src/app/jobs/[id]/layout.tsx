'use client'

import React from 'react'

import Wrap from '../../components/layout/Wrap';
import Jobs from '../../components/layout/Jobs';
import SearchForm from '@/app/components/layout/SearchForm';

import Providers from '../../providers'

import { Tabs, Tab } from "@nextui-org/tabs";

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
                        <Jobs />
                        {children}
                    </div>
                </Providers>
            </Wrap>
        </>
    )
}