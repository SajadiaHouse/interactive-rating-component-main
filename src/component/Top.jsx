import React from 'react'

const Top = () => {
  return (
   <>
   <div className="flex flex-col">
    <div className='w-12 h-12 p-4 flex justify-center items-center bg-blue-400 rounded-full'>
      <img src="./images/icon-star.svg" alt="" />
    </div>
    <div className='text-white mt-6'>
        <h1 className='font-medium text-3xl'>How did we do?</h1>
        <p className='text-gray-200 mt-4 text-sm'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    </div>
      
   </div>
   </>
  )
}

export default Top