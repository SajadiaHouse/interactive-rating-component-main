import React from 'react'

function Circle(props) {
 const handleClick=(e)=>{
    e.preventDefault();
    let value= e.target.value;
    props.setRating(value);
 }
  return (
    <>
    <button className=' bg-blue-400 hover:bg-orange font-bold hover:text-white text-gray-500 rounded-full w-12 h-12 p-3 text-center m-1 focus:bg-gray-500 focus:text-white' value={props.displayNo} onClick={handleClick}>
        {props.displayNo}
    </button>
    </>
  )
}

export default Circle