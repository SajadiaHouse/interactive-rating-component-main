import React from 'react'
import Circle from './Circle';

function Bottom(props) {
  const handleClick=(e)=>{
    e.preventDefault();
    props.setisLoading(!props.isLoading);
  }
  return (
    <>
    <div className='flex flex-col mt-6'>
      <div className="flex flex-row justify-between">
          {Array.from({ length: 5 }, (_, i) => (
            <Circle key={i} displayNo={i + 1} setRating={props.setRating} />
          ))}
        </div>
     <button className='w-full rounded-3xl mt-5 text-sm bg-orange text-white hover:bg-white hover:text-orange p-3 tracking-widest' onClick={handleClick}>SUBMIT</button>
     </div>
    </>
  )
}

export default Bottom