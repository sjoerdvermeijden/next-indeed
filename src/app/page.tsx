import Jobs from './components/layout/Jobs'
import SingleJob from './components/layout/SingleJob'

import Wrap from './components/layout/Wrap'

export default function Home() {
  return (
    <>
      <Wrap>
        <div className='flex py-12 gap-3 justify-start w-[1040px]'>
          <Jobs />
          <SingleJob />
        </div>
      </Wrap>
    </>
  );
}
