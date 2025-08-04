import React from 'react'

type Props = {
    children: React.ReactNode
}

function Wrap({ children }: Props) {
    return (
        <div className='w-[1400px] flex justify-center mx-auto'>
            {children}
        </div>
    )
}

export default Wrap