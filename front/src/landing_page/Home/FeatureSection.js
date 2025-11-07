import React from 'react'

const FeatureSection = () => {
  return (
    <div className='container p-3'>
      <div className='row  p-5'>
         <div className='col-6 p-5'>
          <h1 className='fs-2 mb-5'>Solve with confidence</h1>
          <h2 className='fs-4'>Smart Search & Filters</h2>
          <p  className='text-muted'>Find problems quickly and efficiently using our advanced search tools. Filter questions by keywords, topics, year, difficulty level, or even by problem type.</p>
          <h2 className='fs-4'>Notes & References</h2>
          <p  className='text-muted'>Access a comprehensive library of formulas, key concepts, and reference materials.</p>
          <h2 className='fs-4'>User-Friendly Interface</h2>
          <p  className='text-muted'>Enjoy a clean, intuitive, and responsive interface designed for both desktop and mobile devices. Navigate effortlessly between topics, and enjoyable.</p>
          <h2 className='fs-4'>Download & Print</h2>
          <p  className='text-muted'>Easily download problems, solutions, and notes in PDF format for offline practice.</p>
         </div>
         <div className='col-6 p-5'>
          <img src='media\images\bolt.jpg' />
         </div>
      </div>
       
    </div>
  )
}

export default FeatureSection;