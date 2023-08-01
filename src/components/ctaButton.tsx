import React from 'react'

const CTAbutton = ({onClick,children}:{onClick:()=>void,children: string | JSX.Element}) => {
  return (
    <button onClick={()=>onClick()} className='bg-[#64AE9D] text-black text-lg rounded-full px-4 py-1 border border-grey border-opacity-25 font-bold m-0 '>{children}</button>
  )
}

export default CTAbutton