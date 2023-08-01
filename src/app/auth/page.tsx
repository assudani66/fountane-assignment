import React from 'react'

const pages = () => {
  
  return (
    <div>
      <form className='flex flex-col max-w-xs space-y-4'>   
        <input type='email' className='border border-white border-2 rounded-md bg-black p-3' placeholder='email'/>
        <input type='password' className='border border-white border-2 rounded-md bg-black p-3' placeholder='password'/>
        <button type='submit' className='width-full p-3 bg-green-400 text-black font-lg rounded-lg'>login</button>
        <button>Guest login</button>
      </form>
    </div>
  )
}

export default pages