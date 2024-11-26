import Image from 'next/image'
import React from 'react'
import { CiCreditCard1 } from 'react-icons/ci'
import { IoMdArrowForward } from 'react-icons/io'
import HealthCard from '@/app/assets/health-card.webp'

const CTAHealthCard = () => {
  return (
    <div>
        <div className='bg-[#9ee86f] rounded-3xl px-8 py-8 h-[25rem] flex'>
            <div className='w-7/12 flex flex-col justify-between'>
                <div>
                <div className='bg-[#242611] w-fit text-[#9ee86f] flex gap-1 rounded-md px-4 py-1'>
                    <CiCreditCard1 className='my-auto' />
                    <span className='font-semibold'>Membership Card</span>
                </div>
                <h1 className='text-4xl font-bold text-[#242611] mt-8'>
                    You can enjoy a 5% discount using out health card
                </h1>
                </div>
                <div className='flex align-middle mt-4'>
                    <button className='px-6 py-2 rounded-[8rem] m-0 bg-white font-semibold'>Get Health Card</button>
                    <button className='my-auto rounded-full bg-white p-2'>
                        <IoMdArrowForward size={22} />
                    </button>
                </div>
            </div>
            <div className='w-5/12'>
                <div className='h-full'>
                    <Image src={HealthCard} alt='delivery-image' className='h-full w-full object-cover scale-[1.2]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTAHealthCard