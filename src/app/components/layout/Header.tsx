import React from 'react'

import Link from 'next/link'

function Header() {
    return (
        <div className='border-b-1 py-2 px-4 text-lg font-bold'>
            <Link href="/">Indeed</Link>
        </div>
    )
}

export default Header