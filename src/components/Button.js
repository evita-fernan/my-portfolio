import React from 'react'

const Button = (prop) => {
  return (
    <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[color:white] text-lg lg:text-2xl py-2 px-6 rounded md:ml-8 hover:bg-secondary duration-500'>
        {prop.children}
    </button>
  )
}

export default Button