'use client'

import Jobs from './components/layout/Jobs'

import { joblist } from '../../data'

import React, { useEffect, useState } from 'react'

import { Job } from './types/job'

import Wrap from './components/layout/Wrap'
import SearchForm from './components/layout/SearchForm'

import { Tabs, Tab } from "@nextui-org/tabs";

import HighlightedJob from './components/layout/HighlightedJob';

export default function Home({ }) {
  const [vacancy, setVacancy] = useState<Job>();

  useEffect(() => {
    const result = joblist.filter((job) => Number(job.id) === 1);
    setVacancy(result[0]);
  }, [])

  return (
    <>
      <Wrap>
        <div className='flex flex-col items-center py-8'>
          <SearchForm />
          <Jobs />
          <HighlightedJob {...vacancy} />
        </div>
      </Wrap>
    </>
  );
}
