import React from 'react'

type Props = {
    children: React.ReactNode
}

function Wrap({ children }: Props) {
    return (
        <div className='px-4 w-[1040px] flex justify-center mx-auto'>
            {children}
        </div>
    )
}

export default Wrap