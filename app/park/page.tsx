'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  return (
    <div className='p-5 flex flex-col' >
        <div className='mt-8' >
            <div className='text-2xl font-bold' >Your Vehicle</div>
            <div className='mt-2 font-extrabold text-5xl text-center text-[#E6CC48] animate-pulse' >KL07CP7356</div>
        </div>
        
        <div className='mt-12' >
            <div className='text-2xl font-bold mb-4' >Your Parking Space</div>
            <div className='w-full flex justify-center' >
                <div className='mt-2 h-52 w-3/4 bg-[#2f2f2f] rounded-sm border-[#E6CC48] border-[2px] text-9xl font-bold flex flex-col justify-center items-center relative' >
                    A1
                    {/* <div className='font-bold text-xl absolute bottom-5 right-5 text-green-500 animate-pulse' >₹20/hour</div>     */}
                </div>
            </div>
        </div>

        <div className='flex justify-center' >
            <div className='text-xl font-bold text-[#E6CC48] text-center mt-10 p-1 w-3/4 cursor-pointer border-[2px] border-[#E6CC48] rounded-sm' onClick={() => router.replace('/')} >
                Unpark
            </div>
        </div>
        
    </div>
  )
}
