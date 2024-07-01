import React from 'react'
import { Link } from 'react-router-dom'

const SkiilCard = ({title, image, kontent, link}) => {
  return (
    <div className={`bg-white flex flex-col gap-4 w-full  p-[20px] rounded-lg`}>
      <h1 className={`text-[16px] font-bold`}>{title}</h1>
      <p className={`font-light`}>{kontent}</p>
      <img src={image} alt="" className={`w-full h-[200px] object-cover rounded-lg`} />
    </div>
  )
}

export default SkiilCard
