'use client'

import Jobs from './components/layout/Jobs'

import { jobs } from '../../data'

import React, { useEffect, useState } from 'react'

import { Job } from './types/job'

import Wrap from './components/layout/Wrap'

import HighlightedJob from './components/layout/HighlightedJob';

export default function Home({ }) {
  const [vacancy, setVacancy] = useState<Job>();

  useEffect(() => {
    const result = jobs.filter((job: Job) => Number(job.id) === 1);
    setVacancy(result[0]);
  }, [])

  return (
    <>
      <Wrap>
        <div className='flex justify-center gap-6 py-12 relative grow'>
          <Jobs />
          {
            vacancy &&
            <HighlightedJob {...vacancy} />
          }
        </div>
      </Wrap>
    </>
  );
}
