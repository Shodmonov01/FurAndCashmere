import React, { useState } from 'react';
import circle_icon from '../assets/circle.svg';

function PopUp() {
    const [open, setOpen] = useState(false);

    document.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.getElementById("popupmenu_container").style.display = "flex";
        } else {
            document.getElementById("popupmenu_container").style.display = "none";
        }
    })

    // open menu 
    const openMenuHandler = (isBool) => {
        if (isBool) {
            document.querySelector('#popupmenu').style.display = "block";
        }
        else {
            document.querySelector('#popupmenu').style.display = "none";
        }
        setOpen(!open);
    }

    return (
        <div className='fixed left-0 right-2 bottom-2 transition-all z-10 flex items-center justify-end max-w-[2048px] m-auto cursor-pointer' style={{ display: "none" }} id="popupmenu_container">
            <span className="relative flex h-[60px] lg:h-[100px] w-[60px] lg:w-[100px] items-center justify-center " onClick={() => openMenuHandler(!open)}>
                <span className={`${open ? '' : 'animate-ping'} absolute inline-flex h-[45px] lg:h-[70px] w-[45px] lg:w-[70px] rounded-full bg-gray-300 opacity-75`}></span>
                <img src={circle_icon} alt="no image" className='absolute inset-0 inline-flex rounded-full' />
            </span>
            <div className='min-h-[100px] bg-white rounded-[20px] px-[15px] py-[10px] transition-all duration-1000' style={{ display: "none" }} id="popupmenu">
                {/* <ul className='text-[12px] lg:text-[14px] flex flex-col gap-[10px] items-end'>
                    <li className='text-dark-red'>+7 921 553 07 51</li>
                    <li className={`text-bold_text hover:text-opacity-80 transition-all`}>
                        <a href="https://t.me/furcashmere" target='_blank'>Telegram</a>
                    </li>
                    <li className={`text-bold_text hover:text-opacity-80 transition-all`}>
                        <a href="https://wa.me/+79215530751" target='_blank'>WhatsApp</a>
                    </li>
                    <li className={`text-bold_text hover:text-opacity-80 transition-all`}>
                        <a href="https://vk.com/fur_and_cashmere" target='_blank'>VK</a>
                    </li>
                    <li className={`text-bold_text hover:text-opacity-80 transition-all`}>
                        <a href="https://www.instagram.com/fur.cashmere/" target='_blank'>Instagram</a>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default PopUp;