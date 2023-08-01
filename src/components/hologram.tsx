import React from 'react'

const Hologram = () => {
    return (
        <div className='relative'>
        <div className=
        'rounded-full w-64 blur-2xl h-20 opacity-20 absolute bg-[#32A5D3] inset-y-2/4 left-28'></div>
          <div className=
          'h-2/6 w-full blur-2xl opacity-100 bg-black  absolute -top-16'
          ></div>
        <div className='flex'>
            <div className='hologram-backdrop w-72 h-96 transform -scale-x-100'></div>
            <div className='hologram-backdrop w-72 h-96'></div>
        </div>
        <div className=
        'rounded-full w-64 blur-2xl h-20 opacity-20 absolute bg-[#32A5D3] inset-y-2/4 left-28'
        ></div>
        <div className=
        'h-2/6 w-full blur-2xl opacity-100 bg-black  absolute -bottom-16'
        ></div>
    </div>
  )
}

export default Hologram