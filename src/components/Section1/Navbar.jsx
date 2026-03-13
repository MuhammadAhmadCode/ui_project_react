import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5 px-6'>
      <h3 className='bg-gray-950 px-3 text-sm  py-2 rounded-full uppercase text-white'>Target Audiance</h3>

      <div className='text-sm bg-gray-200 p-2 justify-center items-center rounded-3xl flex gap-4 uppercase'>
        <span>Digital</span>
        <span>Banking</span>
        <span>Platform</span>
      </div>

    </div>
  )
}

export default Navbar
