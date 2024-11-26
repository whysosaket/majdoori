import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Product, { ProductInterface } from '../shared/product'
import Item1 from "@/app/assets/products/item1.png";
import Item2 from "@/app/assets/products/item2.png";
import Item3 from "@/app/assets/products/item3.png";
import Item4 from "@/app/assets/products/item4.png";

const BabyFoodCollection = () => {
  return (
    <div className='w-full px-20 my-20 text-secondary'>
        <div className='flex justify-between align-baseline'>
            <h1 className='text-4xl font-black'>Baby Food Collection</h1>

            <button className='flex'>
                <span className='my-auto mr-2 font-bold'>SEE ALL PRODUCTS</span>
                <FaArrowRight className='my-auto' />
            </button>
        </div>

        <div className='mt-10'>
            <div className='flex gap-4 justify-between flex-wrap'>
                {
                    products.map((product, index) => {
                        return <Product key={index} product={product} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default BabyFoodCollection

const products: ProductInterface[] = [
    {
        category: "Cereal Honey Flavour",
        stars: 4.2,
        title: "Molfix Baby Diaper 4pcs",
        price: 12.99,
        discountedPrice: 16.99,
        image: Item1,
    },
    {
        category: "Wellness",
        stars: 4.5,
        title: "Meditterranean Fruits",
        price: 40.99,
        image: Item2,
    },
    {
        category: "Medicine",
        stars: 4.6,
        title: "Womens multi Vitamin A, Biotin, Vitamin D",
        price: 20.99,
        image: Item3,
    },
    {
        category: "Baby Care",
        stars: 4.7,
        title: "Baby Bath",
        price: 20.99,
        image: Item4,
    },
]