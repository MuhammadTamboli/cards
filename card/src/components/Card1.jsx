import React from 'react'

const Card1 = (props) => {
    console.log(props.city)
  return (
    <div className='bg-blue-300   text-black inline-block p-6 text-center rounded'>
        <img className='h-32 w-32 rounded-full mb-3 content-center' src={props.photo}></img>
         <h1 className='bg-violet-700 text-yellow-400 text-2xl font-bold mb-4 p-3 rounded'>{props.username}  </h1>
         <h2 className='bg-red-700 mb-4 p-2 font-semibold text-yellow-400 rounded'>{props.prof}</h2>
        <h2 className='bg-blue-400 font-semibold rounded mb-5'>{props.city}    ,   {props.age}</h2>
        <button className='bg-green-600 text-yellow-500 rounded-full px-4 py-2 font-semibold border-t-black hover:bg-green-900'>Add Friend</button>
      
    </div>
  )
}

export default Card1
