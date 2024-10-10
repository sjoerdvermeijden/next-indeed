import React from 'react'

import Link from 'next/link'

function Header() {
    return (
        <div className='bg-red-500 py-2 px-4 text-lg font-bold'>
            <Link href="/">Header</Link>
        </div>
    )
}

export default Header