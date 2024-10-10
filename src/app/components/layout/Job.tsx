import React from 'react'

type Job = {
    id: number,
    title: string,
    company: string,
    description: string,
    short_description: string,
    salary: string,
    postal_code: string,
    placed: string,
    vacancy_language: string,
    contract_type: string
}

function Job({ title, company, short_description, postal_code, contract_type }: Job) {
    return (
        <div className='p-4 border w-[470px] rounded transition-colors duration-200 hover:shadow-md hover:cursor-pointer hover:border-slate-500'>
            <h1 className='text-xl font-bold mb-2'>{title}</h1>
            <div className='mb-2'>
                <p>{company}</p>
                <p>{postal_code}</p>
            </div>
            <div className='bg-gray-200 py-1 px-2 rounded font-bold inline-block mb-2 text-sm'>{contract_type}</div>
            <p>{short_description}</p>
        </div>
    )
}

export default Job