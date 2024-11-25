import Image from 'next/image'
import React from 'react'

import AppStore from "@/app/assets/app-store.png";
import PlayStore from "@/app/assets/play-store.png";
import Ad from "@/app/assets/ad.png";

const AppDownload = () => {
  return (
    <div>
         <div className='bg-[#ededed] rounded-3xl px-8 pt-8 h-[35rem]'>
            <div className='mb-4 flex'>
                <Image src={Ad} alt="logo" className='w-full' />
            </div>
            <div className='text-secondary font-bold text-5xl'>
                <h1>Download Our <span className='text-[#848d96]'>Healthcare</span> App for Easy Access</h1>
            </div>
            <div className="flex justify-start gap-4 mt-10">
                <Image src={AppStore} alt="logo" width={150} height={100} />
                <Image src={PlayStore} alt="logo" width={150} height={100} />
          </div>
        </div>
    </div>
  )
}

export default AppDownload