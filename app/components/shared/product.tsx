import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { FaPlus, FaStar } from 'react-icons/fa';

export interface ProductInterface {
    category: string;
    stars: number;
    title: string;
    price: number;
    discountedPrice?: number;
    image: StaticImageData;
}

const Product = (props: { product: ProductInterface }) => {
  return (
    <div className='bg-[#f1f5f9] rounded-3xl pt-8 max-w-[20rem] my-6'>
        <div className=''>
            <Image src={props.product.image} alt="item1" className='max-h-[200px] object-contain' />
        </div>
        <div>
        <div className='bg-white border w-full flex flex-col justify-between rounded-[2.5rem] relative min-h-44 max-h-44 top-10 p-6'>
            <div>
            <div className='text-sm tracking-tighter flex justify-between align-middle text-gray-300 font-semibold'>
                <h1 className=''>{props.product.category}</h1>
                <h1 className='flex align-middle'><FaStar className='text-yellow-500 my-auto' /><span className='my-auto'>({props.product.stars})</span></h1>
            </div>
            <div className='w-2/3'>
                <h1 className='mt-1 font-bold'>{props.product.title}</h1>
            </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <button className='border border-secondary text-secondary px-4 py-2 rounded-full text-sm font-semibold flex align-middle'> <FaPlus className='my-auto mx-1 font-normal' size={12} /> Add to Cart</button>
                <div className='flex gap-2 items-center text-sm'>
                    {
                        props.product.price && !props.product.discountedPrice ?
                        <h1 className='font-bold'>${props.product.price}</h1> :<>
                        <h1 className='text-gray-300 font-semibold line-through'>${props.product.price}</h1>
                        <h1 className='font-bold'>${props.product.discountedPrice}</h1>
                        </>
                    }
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Product