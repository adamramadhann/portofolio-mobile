import React from 'react'
import { AiOutlineCaretRight } from "react-icons/ai";
import {Link} from "react-router-dom"

const Home = () => {
  return ( 
    <div className={`w-screen h-screen flex flex-col  p-[30px] bg-[#212121] text-orange-400 overflow-hidden `}>
      <h1 className={`text-[36px] font-bold`}>Home</h1>

    <div className={`mt-8 relative flex flex-col items-center `}>

        <div className={`bg-[url(https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600)] w-[500px] h-[500px] rounded-full bg-cover bg-center`}></div>

        <div className={` border-orange-400 border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px]`}></div>

    </div>

    <div className={`mt-10`}>
        <h1 className={`text-[30px] font-light`}> Saya <br /> Adam Ramadhan </h1>
        <p className={`text-[16px] font-light`}> Seorang Web Developer </p>

        <Link to={'/biodata'} className={` w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full flex justify-center items-center -right-5 fixed -bottom-3`}> 
            <AiOutlineCaretRight className={`text-[42px]`} /> 
        </Link>
    </div>


    </div>
  ) 
}

export default Home

