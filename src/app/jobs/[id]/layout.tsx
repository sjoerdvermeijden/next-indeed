'use client'

import React from 'react'

import useWindowWidth from '../../utils/useWindowWidth'

import Wrap from '../../components/layout/Wrap';
import Jobs from '../../components/layout/Jobs';

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    const width = useWindowWidth();

    return (
        <>
            <Wrap>
                <div className='relative w-full md:flex md:justify-center md:gap-7 md:grow'>
                    {
                        width > 768 ?
                        (
                            <>
                                <Jobs />
                                {children}
                            </>
                        )
                        :
                        <>
                            {children}
                        </>
                    }
                </div>
            </Wrap>
        </>
    )
}