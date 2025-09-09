'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import useWindowWidth from '../../utils/useWindowWidth'

import { jobs } from '../../../../data'
import { Job } from '../../types/job'

import SingleJob from '@/app/components/layout/SingleJob'
import HighlightedJob from '../../components/layout/HighlightedJob';

function JobPage({ }) {
    const [vacancy, setVacancy] = useState<Job>();
    const params = useParams<{ id: string; item: string }>()

    const width = useWindowWidth();

    useEffect(() => {
        const result = jobs.filter((job) => Number(job.id) === Number(params.id));
        setVacancy(result[0]);
    }, [params])

    return (
        <>
        {
            width > 768 ?
            <>
                {
                    vacancy &&
                    <HighlightedJob {...vacancy} />
                }
            </>
            :
            <>
                {
                    vacancy &&
                    <SingleJob {...vacancy} />
                }
            </>
        }
        </>
    )
}

export default JobPage