import Jobs from './components/layout/Jobs'
import SingleJob from './components/layout/HighlightedJob'

import Wrap from './components/layout/Wrap'

export default function Home() {
  return (
    <>
      <Wrap>
        <div className='flex justify-center py-12 gap-3 relative'>
          <Jobs />
          <SingleJob />
        </div>
      </Wrap>
    </>
  );
}
