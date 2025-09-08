'use client'

import React from 'react'

import useWindowWidth from "../../utils/useWindowWidth";

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
                <div className='relative w-full py-12 sm:flex sm:justify-center sm:gap-7 sm:grow'>

                    {
                        width < 1024 ?
                        (
                            children
                        )
                        :
                        <>
                            <Jobs />
                            {children}
                        </>
                    }
                </div>
            </Wrap>
        </>
    )
}