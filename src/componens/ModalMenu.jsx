import React, { useState } from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ModalMenu = () => {

    const [show, setShow ] = useState(false)

    const HandleModal = () => {
        setShow(!show)
    } 


  return (
    <>

    {show && (
        <div className={`w-screen h-screen flex  flex-col justify-center items-center bg-[#212121] fixed left-0 top-0 z-[200px]`}>


            <Link to={'/'} className={`w-full h-16 flex justify-center items-center text-orange-400 font-bold `}>
            <h1>Home</h1>
            </Link> 


            <Link to={'/biodata'} className={`w-full h-16 flex justify-center items-center text-orange-400 font-bold `} onClick={HandleModal}>
            <h1>biodata</h1>
            </Link>


            <Link to={'/skiil'} className={`w-full h-16 flex justify-center items-center text-orange-400 font-bold `} onClick={HandleModal}>
            <h1>Skiil</h1>
            </Link>



        </div>

        
    )}
    


    <div className={`text-3xl w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full flex justify-center items-center -right-5 fixed -bottom-3 z-[250px]`} onClick={HandleModal}> <AiOutlineBars /></div>
    
    </>
  )
}

export default ModalMenu
