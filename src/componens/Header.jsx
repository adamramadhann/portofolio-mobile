import React from 'react'

const Header = ({ title }) => {
  return (
    <div className={`w-full px-4 flex items-center bg-orange-400 h-[50px] top-0 left-0 fixed`} >
      <h1 className="text-lg font-bold text-gray-800">
        {title}
      </h1>
    </div>
  )
}

export default Header
