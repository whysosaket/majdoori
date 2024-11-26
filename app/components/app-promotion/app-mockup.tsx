import Image from 'next/image'
import React from 'react'
import Mockup from "@/app/assets/app-mockup.png";

const AppMockup = () => {
  return (
    <div className=''>
        <div className='bg-[#ffea67] rounded-3xl px-8 pt-8 h-[38rem]'>
            <h1 className='text-secondary font-bold text-2xl tracking-tighter text-right mb-4'>MediCare</h1>
            <div className='flex gap-4 items-start h-[calc(100%-48px)] overflow-hidden'>
                <Image src={Mockup} alt="MediCare" width={350} height={300} className='mx-auto' />
            </div>
        </div>
    </div>
  )
}

export default AppMockup