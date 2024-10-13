'use client'

import React from 'react'

import { SearchComponent } from './context/searchContext'

type Props = {
    children: React.ReactNode
}

function Providers({ children }: Props) {
    return (
        <SearchComponent>
            {children}
        </SearchComponent>
    )
}

export default Providers