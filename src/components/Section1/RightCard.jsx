import React from 'react'

const RightCard = (props) => {
    console.log(props);
  return (
    <div className='h-full relative shrink-0  overflow-hidden w-70 rounded-4xl'>
      
      <img src={props.image}className='h-full object-cover' alt="" />


      <div className='absolute top-0 left-0 flex-col justify-between py-5 h-full flex  p-4 '>
        <h2 className='bg-white flex justify-center items-center text-xl font-semibold rounded-full h-10 w-10'>{props.id +1}</h2>

        <div className='flex gap-5 flex-col'>

            <p className=' p-4 text-shadow-md text-shadow-black text-white rounded-4xl text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores nemo fuga, tempora similique architecto alias ratione soluta temporibus, totam rem, porro aut!</p>

            <div className='flex justify-between'>
                <button className='bg-blue-800 p-4 px-13 text-lg rounded-full text-white'>{props.tag}</button>
                <button className='rounded-full text-white text-xl flex justify-center items-center bg-blue-800 h-12 w-12'>=&gt;</button>
            </div>

        </div>
      </div>

    </div>
  )
}

export default RightCard
