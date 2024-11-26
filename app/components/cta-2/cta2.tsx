import React from 'react'
import CTADelivery from './cta-delivery'
import CTAHealthCard from './cta-health-card'

const CTA2 = () => {
  return (
    <div className='w-full flex gap-6 px-20 my-20'>
         <div className='w-1/2'>
            <CTADelivery />
        </div>
        <div className='w-1/2'>
            <CTAHealthCard />
        </div>
    </div>
  )
}

export default CTA2