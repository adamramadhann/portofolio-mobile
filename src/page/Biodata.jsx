import React from 'react';
import Header from '../componens/Header';
import BiodataCard from '../componens/BiodataCard'; // Pastikan pathnya sesuai dengan struktur proyek Anda
import Data from '../constand/Data'; // Sesuaikan path dengan lokasi file Data
import { AiFillPhone } from "react-icons/ai";
import { AiFillOpenAI } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import ModalMenu from '../componens/ModalMenu';


const Biodata = () => {


  const HandleIcon = (name) => {
    
    switch (name) {

      case "phone" :
        return <AiFillPhone />

        case "email" :
        return <AiFillOpenAI />

        case "LinkIn" :
        return <AiFillLinkedin />

        
        case "instagram" :
        return <AiFillInstagram />
    }


  }

    return (
        <div className={`w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden`}>
            <Header title={'Biodata'}/>
            <div className={`mt-[60px] flex flex-col justify-center items-center relative pb-14`} >
                <div className={`w-[220px] h-[220px] border-[3px] border-orange-400 rounded-full border-dashed absolute`}></div>
                <img src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=200" alt=""  className={`rounded-full w-[200px]  h-[200px] object-cover`}  />
            </div>
            <div>
            {Data.map((item) => (
                <BiodataCard 
                    key={item.id} // pastikan setiap elemen dalam map memiliki key yang unik
                    label={item.label} 
                    value={item.value} 
                    icon={item.icon && HandleIcon(item.icon)}
                    Link={item.Link} 
                />
            ))}
            </div>

            <ModalMenu/>

          </div>
    );
}

export default Biodata;




