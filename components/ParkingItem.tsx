import React from 'react';
import { IoIosMore } from "react-icons/io";
export default function ParkingItem() {
  return (
    <div className='p-2 pr-4 bg-[#4545458c] rounded-md flex items-center space-x-4' >
        
        {/* Left Container */}
        <div className='' >
            <img src="https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="parking-lot-image" className='h-20 w-36 object-cover bg-slate-500 rounded-md' />
            {/* <div className='h-20 w-24 bg-slate-500 rounded-md' ></div> */}
        </div>

        {/* Right Container */}
        <div className='flex flex-col justify-between w-full' >

            {/* Top Text */}
            <div className='flex justify-between' >
                <div className='font-semibold' >Marina Mall Parking</div>
                <IoIosMore className='text-lg' />
            </div>
            
            {/* Middle Text */}
            <div className='text-xs font-light mb-3 text-[#E6CC48]' >Los Santos, California</div>
            
            {/* Bottom Text */}
            <div className='flex justify-between' >
                <div className='font-medium text-xs text-[#9e9e9e] ' >0.1 KM</div>
                <div className='font-medium text-xs text-[#8aec8add]' >₹10.00 / HOUR</div>
            </div>
        
        </div>

    </div>
  );
}
