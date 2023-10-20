import Main from './component/Main'
import ThankYou from './component/ThankYou'
import React,{useState} from 'react';
function App() {
  const [rating, setrating] = useState(0);
  const [isLoading, setisLoading] = useState(false)

  return (
    <>
    <div className='bg-blue-900'>
      <div className='flex justify-center items-center h-screen'>
        {isLoading ? <ThankYou rating={rating} /> :  <Main setRating={setrating} setisLoading={setisLoading} isLoading={isLoading}/>}
      </div>
      
    </div>
    
    </>
  )
}

export default App
