import React from 'react'
import RightCard from './RightCard'

const Right = (props) => {
  return (
    <div id='right' className='w-2/3 overflow-x-auto flex flex-nowrap gap-10 h-full p-3'>
      {props.users.map((elem,idx)=>{
        return <RightCard key={idx} image={elem.img} id={idx} tag={elem.tag} />
      })}
    </div>
  )
}

export default Right
