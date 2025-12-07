import React from 'react'
import Button from './Button'

function Card({title , imageUrl}) {
  return (
    <> 
   
    <div className='bg-white border border-blue-500 rounded-xl mt-5 max-w-sm '>
        <img 
         className='w-full h-50 p-2'
        src={imageUrl} 
        alt="loading" />

        <div className='p-1'>
          <h2 className='text-black font-bold text-lg '>{title}</h2>
          <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsum ea suscipit officiis nam expedita vel,
             esse delectus enim? In, asperiores dicta nihil quibusdam 
             laborum itaque! Assumenda sed unde dolor repellat.</p>
    </div>

   <Button/>
    
       
    </div>
    
    
    </>
  )
}

export default Card