import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 px-17 h-[90vh] flex gap-6 '>
      <Left/>
      <Right users={props.users}/>
    </div>
  )
}

export default Page1Content
