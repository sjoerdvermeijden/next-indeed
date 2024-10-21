'use client'

import Jobs from './components/layout/Jobs'

import { joblist } from '../../data'

import React, { useEffect, useState, useContext } from 'react'

import { Job } from './types/job'

import Wrap from './components/layout/Wrap'
import SearchForm from './components/layout/SearchForm'

import { SearchContext } from './context/searchContext'

import { Tabs, Tab } from "@nextui-org/tabs";

import HighlightedJob from './components/layout/HighlightedJob';

type SearchItem = {
  id: number,
  title: string
}


export default function Home({ }) {
  const [vacancy, setVacancy] = useState<Job>();

  const [searchItems] = useContext(SearchContext);

  useEffect(() => {
    const result = joblist.filter((job) => Number(job.id) === 0);
    setVacancy(result[0]);
  }, [])

  return (
    <>
      <Wrap>
        <div className='flex flex-col items-center py-8'>
          <SearchForm />
          <Tabs aria-label="Options" className='mb-6'>
            <Tab key="vacancies" title="Vacatures voor jou">
              <div className='flex justify-center gap-5 relative grow'>
                <Jobs />
                <HighlightedJob {...vacancy} />
              </div>
            </Tab>
            <Tab key="search-results" title="Recente zoekopdrachten">
              <div className='flex justify-center gap-5 relative grow'>
                <ul>
                  {
                    searchItems.map((item: SearchItem) => {
                      return <li key={item.id}>{item.title}</li>
                    })
                  }
                </ul>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Wrap>
    </>
  );
}
