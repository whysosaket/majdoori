import React from 'react'
import AppMockup from './app-mockup'
import AppDownload from './app-download'

const AppPromotion = () => {
  return (
    <div className='w-full flex gap-6 px-20 my-20'>
         <div className='w-5/12'>
            <AppDownload />
        </div>
        <div className='w-7/12'>
            <AppMockup />
        </div>
    </div>
  )
}

export default AppPromotion