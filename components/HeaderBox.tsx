import React from 'react';
export default function HeaderBox() {
  return (
    <div className="w-full pt-10 relative h-52" >
            
            <img src="https://i.pinimg.com/originals/58/ec/ee/58ecee46ef8eaef87c0d594681712b83.jpg" alt="header-img" className="rounded-xl image_blur h-40 w-full object-cover absolute " />

            <div className="h-40 rounded-lg p-8 space-y-1 absolute" >
                <div className="text-sm font-light text-[#E6CC48]" >Hello Pranaav, </div>
                <div className="text-2xl w-2/3 font-semibold" >Fresh start your journey</div>
            </div>

        </div>
  )
}
