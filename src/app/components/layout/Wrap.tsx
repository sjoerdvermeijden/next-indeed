import React from 'react'

type Props = {
    children: React.ReactNode
}

function Wrap({ children }: Props) {
    return (
        <div className='w-full md:w-[1180px] px-6 py-8 md:py-12 xl:w-[1240px] 2xl:w-[1430px] mx-auto'>
            <div className='w-full md:ps-[24px] lg:ps-[80px] 2xl:ps-0 flex flex-wrap justify-center'>
                {children}
            </div>
        </div>
    )
}

export default Wrap