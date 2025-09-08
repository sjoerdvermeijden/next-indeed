import React from 'react'

type Props = {
    children: React.ReactNode
}

function Wrap({ children }: Props) {
    return (
        <div className='w-full lg:w-[1100px] px-4 flex flex-wrap justify-center mx-auto 2xl:w-[1430px]'>
            {children}
        </div>
    )
}

export default Wrap