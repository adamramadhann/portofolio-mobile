import React from 'react'

const BiodataCard = ({label, value, icon, Link}) => {
      const HandleClick = ()  => {
        window.open(Link)
    }

  return (
    <div className={` w-full relative flex flex-col gap-2 pb-10`}>
      <h1 className={` text-[16px] font-light`}>{label}</h1>
      <p className={`text-[16px] font-bold`}>{value}</p>

        <div className={`absolute right-2 top-3 text-3xl cursor-pointer `} onClick={HandleClick} >{icon}</div>
    </div>
  )
}

export default BiodataCard


