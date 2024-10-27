'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { jobs } from '../../../../data'
import { Job } from '../../types/job'

import HighlightedJob from '../../components/layout/HighlightedJob';

function JobPage({ }) {
    const [vacancy, setVacancy] = useState<Job>();
    const params = useParams<{ id: string; item: string }>()

    useEffect(() => {
        const result = jobs.filter((job) => Number(job.id) === Number(params.id));
        setVacancy(result[0]);
    }, [params])

    return (
        <>
            <HighlightedJob {...vacancy} />
        </>
    )
}

export default JobPage