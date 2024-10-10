import React from 'react'

type Job = {
    id: number,
    title: string,
    company: string,
    description: string,
    short_description: string,
    salary: number,
    placed: string,
    postcal_code: string,
    vacancy_language: string,
    contract_type: string
}

function Job({ title, company, short_description, postal_code, contract_type }: Job) {
    return (
        <div className='p-4 border rounded transition-colors duration-200 hover:shadow-md hover:cursor-pointer hover:border-slate-500'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p>{company}</p>
            <p>{postal_code}</p>
            <p>{short_description}</p>
        </div>
    )
}

export default Job