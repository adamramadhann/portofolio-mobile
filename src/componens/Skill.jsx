import React from 'react'
import Header from './Header'
import ModalMenu from './ModalMenu'
import SkiilCard from './SkiilCard'
import DataSkiil from '../constand/DataSkiil'

const Skill = () => {


  return (
    <div className={`w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] overflow-hidden`}>

      <Header title={'Skiil Broo'}/>
    
      <div className={`flex flex-col gap-4 mt-12`}>
      {DataSkiil.map((item) => {
        return (
          
          
          <SkiilCard 
          title={item.title}
          kontent={item.kontent}
          image={item.image}
          link={item.Link}
          key={item.id}
          />
        )
      })}
    </div>
      
            <ModalMenu/>


    </div>
  )
}

export default Skill 
