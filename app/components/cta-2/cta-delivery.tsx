import React from 'react'
import { BsBox } from 'react-icons/bs'
import { IoMdArrowForward } from 'react-icons/io'
import DeliveryImage from '@/app/assets/delivery-image.webp'
import Image from 'next/image'

const CTADelivery = () => {
  return (
    <div>
        <div className='bg-[#ffea67] rounded-3xl px-8 pt-8 h-[25rem] flex'>
            <div className='w-1/2 flex flex-col justify-between pb-8'>
                <div>
                <div className='bg-[#242611] w-fit text-[#ffea67] flex gap-1 rounded-md px-4 py-1'>
                    <BsBox className='my-auto' />
                    <span className='font-semibold'>Delivery</span>
                </div>
                <h1 className='text-4xl font-bold text-[#242611] mt-8'>
                    Enjoy Free Delivery within 2 hours
                </h1>
                </div>
                <div className='flex align-middle mt-4'>
                    <button className='px-6 py-2 rounded-[8rem] m-0 bg-white font-semibold'>Order Now</button>
                    <button className='my-auto rounded-full bg-white p-2'>
                        <IoMdArrowForward size={22} />
                    </button>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='h-full'>
                    <Image src={DeliveryImage} alt='delivery-image' className='h-full object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTADelivery