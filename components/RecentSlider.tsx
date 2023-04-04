import React from 'react';
import ParkingItem from './ParkingItem';
export default function RecentSlider() {
  return (
    <div className='mt-6 flex flex-col space-y-5'>

        {/* Slider Title Top Bar */}
        <div className='flex justify-between items-baseline' >
            <div className='text-xl font-semibold' > Last Parking Space </div>
            <div className='text-xs font-medium text-[#E6CC48]' > See more </div>
        </div>

        {/* Slider Contianer */}
        <ParkingItem />
        <ParkingItem />

    </div>
  );
}
