import React from 'react'

type Props = {
    children: React.ReactNode
}

function Wrap({ children }: Props) {
    return (
        <div className='flex justify-center'>
            {children}
        </div>
    )
}

export default Wrap