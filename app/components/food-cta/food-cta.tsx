import React from 'react'
import CerealBox from '@/app/assets/cereal-box.png'
import Image from 'next/image'
import { FaRegHandPointRight } from 'react-icons/fa'
import { IoMdArrowForward } from 'react-icons/io'

const FoodCTA = () => {
  return (
    <div className='w-full flex gap-6 px-20 my-20 text-[#21231d]'>
        <div className='bg-[#a0e2e2] w-full rounded-t-[4rem] pt-8'>
            <h1 className='text-center font-bold'>Cereal Honey Flavour</h1>

            <div className='w-full flex justify-center pt-8 px-28'>
              <div className='w-1/3'>
                <div>
                  <h1 className='text-6xl font-bold tracking-tighter'>Cereal Healthy Food</h1>
                  <p className='my-6 font-semibold'>Cereal food offers many benefits that make it a healthy and nutritious breakfast choice.</p>
                  <div className='font-semibold'>
                    <hr className="h-[2px] my-4 bg-[#ccffff] border-0" />
                    <h1 className='flex align-middle'><FaRegHandPointRight className='my-auto mr-4' /> Provides essential nutrients</h1>
                    <hr className="h-[2px] my-4 bg-[#ccffff] border-0" />
                    <h1 className='flex align-middle'><FaRegHandPointRight className='my-auto mr-4' /> High in fiber</h1>
                    <hr className="h-[2px] my-4 bg-[#ccffff] border-0" />
                    <h1 className='flex align-middle'><FaRegHandPointRight className='my-auto mr-4' /> Low in fat</h1>
                    <hr className="h-[2px] my-4 bg-[#ccffff] border-0" />
                  </div>
                </div>

                <div className='flex align-middle mt-12 text-[#a0e2e2]'>
                    <button className='px-6 py-2 rounded-[8rem] m-0 bg-[#21231d] font-semibold'>Buy now from $50.00</button>
                    <button className='my-auto rounded-full bg-[#21231d] p-2'>
                        <IoMdArrowForward size={22} />
                    </button>
                </div>
              </div>
              <div className='w-2/3 flex justify-center'>
               <div className='h-full flex flex-col justify-end'>
                <Image src={CerealBox} alt='cereal-box' className='w-full mx-auto object-cover' />
               </div>
              </div>
            </div>

            <div className='bg-[#ffea68] w-full rounded-t-[4rem] relative min-h-36 top-16 p-8'>
              <h1 className='text-center font-bold'>Chocolate Flavour</h1>
            </div>

            <div className='bg-[#fdc091] w-full rounded-t-[4rem] p-8 relative z-[100]'>
              <h1 className='text-center font-bold'>Oats Flavour</h1>
            </div>
        </div>
    </div>
  )
}

export default FoodCTA