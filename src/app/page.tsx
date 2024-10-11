'use client'

import Jobs from './components/layout/Jobs'

import { jobs } from '../../data'

import React, { useEffect, useState } from 'react'

import { Job } from './types/job'

import Wrap from './components/layout/Wrap'

import { Tabs, Tab } from "@nextui-org/tabs";

import HighlightedJob from './components/layout/HighlightedJob';

export default function Home({ }) {
  const [vacancy, setVacancy] = useState<Job>();

  useEffect(() => {
    const result = jobs.filter((job) => Number(job.id) === 0);
    setVacancy(result[0]);
  }, [])

  return (
    <>
      <Wrap>
        <div className='flex flex-col items-center py-12'>
          <Tabs aria-label="Options" className='mb-6'>
            <Tab key="vacancies" title="Vacatures voor jou">
              <div className='flex justify-center gap-5 relative grow'>
                <Jobs />
                <HighlightedJob {...vacancy} />
              </div>
            </Tab>
            <Tab key="search-results" title="Recente zoekopdrachten">
              <div className='flex justify-center gap-5 relative grow'>
                <Jobs />
                <p>Test test</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Wrap>
    </>
  );
}
