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
                        <Tabs aria-label="Options" className='mb-6'>
                            <Tab key="vacancies" title="Vacatures voor jou">
                                <div className='flex justify-center gap-5 relative grow'>
                                    <Jobs />
                                    {children}
                                </div>
                            </Tab>
                            <Tab key="search-results" title="Recente zoekopdrachten">
                                <div className='flex justify-center gap-5 relative grow'>
                                    <p>Test test</p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </Providers>
            </Wrap>
        </>
    )
}