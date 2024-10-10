'use client'

import React, { useEffect, useState } from 'react'

import { jobs } from '../../../../data';

import { useParams } from 'next/navigation'

import Wrap from '../../components/layout/Wrap';
import Jobs from '../../components/layout/Jobs';

import SingleJob from '../../components/layout/SingleJob';

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

export default function Layout({ }) {
    const params = useParams<{ id: string; item: string }>()

    const [vacancy, setVacancy] = useState<Job>();

    useEffect(() => {
        const result = jobs.filter((job) => Number(job.id) === Number(params.id));
        setVacancy(result[0]);
    }, [params])


    return (
        <>
            <Wrap>
                <div className='flex justify-center py-12 gap-3 relative'>
                    <Jobs />
                    <SingleJob {...vacancy} />
                </div>
            </Wrap>
        </>
    )
}