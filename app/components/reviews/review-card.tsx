import React from 'react'  
import { ReviewInterface } from './reviews'
import Star from './star'

const ReviewCard = (props: { ReviewObject: ReviewInterface}) => {
  return (
    <div className='bg-[#f2f4f9] rounded-3xl px-8 py-8 flex flex-col justify-between h-[20rem] w-1/4'>
        <div>
            <h1 className='text-lg font-extrabold tracking-tight'>{props?.ReviewObject?.title}</h1>
            <p className='text-sm mt-4'>"{props?.ReviewObject?.content}"</p>
        </div>
        <div className='gap-4 items-start'>
            <div className='flex gap-1 my-1'>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <h1 className='text-sm font-bold'>{props?.ReviewObject?.author}</h1>
        </div>
    </div>
  )
}

export default ReviewCard