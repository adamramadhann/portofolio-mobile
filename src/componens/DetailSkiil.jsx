import React from 'react';
import { useParams } from 'react-router-dom';

const DetailSkiil = () => {
    const { item } = useParams();

    return (
        <div className={`w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] overflow-hidden`}>
            <h1 className={`text-orange-400 `}>

                {item}

            </h1>
        </div>
    );
}

export default DetailSkiil;
