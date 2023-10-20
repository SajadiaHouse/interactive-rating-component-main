import React from 'react'

function ThankYou(props) {
  return (
    <>
         <div className='w-[370px] h-[380px] rounded-3xl bg-blue-500 p-8'>
            <div className="flex flex-col justify-center items-center">
                 <img src="./images/thank.svg" alt="" className='' />
                 <div className='rounded-2xl w-[200px] text-orange bg-blue-400 text-center p-1 my-6'>
                    You select {props.rating} out of 5
                 </div>
                 <h1 className='text-3xl text-white font-semibold'>Thank you!</h1>
                 <p className='text-gray-200 mt-4 text-center text-sm'>We appreciate you taking the time to give rating. If your ever need more support, don't hesitate to get in touch!</p>
            </div>
            </div>
    </>
  )
}

export default ThankYou