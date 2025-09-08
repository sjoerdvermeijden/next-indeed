import React from 'react'

type Props = {
    children: React.ReactNode
}

function Wrap({ children }: Props) {
    return (
        <div className='w-full lg:w-[1180px] px-6 2xl:w-[1430px] mx-auto'>
            <div className='w-full lg:ps-[80px] 2xl:ps-0 flex flex-wrap justify-center'>
                {children}
            </div>
        </div>
    )
}

export default Wrap