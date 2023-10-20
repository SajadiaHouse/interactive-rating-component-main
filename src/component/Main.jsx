import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
function Main(props) {
  return (
    <>
    <div>
        <div className='w-[370px] h-[380px] rounded-3xl bg-blue-500 p-8'>
            <Top />
            <Bottom setRating={props.setRating} setisLoading={props.setisLoading} isLoading={props.isLoading}/>
        </div>
    </div>
    </>
  )
}

export default Main