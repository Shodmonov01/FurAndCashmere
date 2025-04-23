import React, { memo, useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../Sidebar';
import Layout from '../../services/Layout';
import logo from '../../assets/logoo.svg';
import logo_mobile from '../../assets/logoo_mobile.svg';
import close from '../../assets/close.svg';

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);

    // document.addEventListener("scroll", () => {
    //     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    //         document.getElementById("header").style.height = "50px";
    //         document.getElementById("logo").style.height = "20px";
    //         // if (document.getElementById("listInfo")) document.getElementById("listInfo").classList.add("lg:block");
    //     } else {
    //         document.getElementById("header").style.height = "67px";
    //         document.getElementById("logo").style.height = "27.11px";
    //         // if (document.getElementById("listInfo")) document.getElementById("listInfo").classList.remove("lg:block");
    //     }
    // })

    // open sidebar
    const openSidebarHandler = () => {
        setSidebar(true);
    };
    // close sidebar
    const closeSidebarHandler = (bool = false) => {
        setSidebar(false);
    };

    return (
        <>
            <div className={`sticky top-0 left-0 z-30 bg-main_bgcolor h-[67px] border-b-[1px] flex items-center text-dark-red transition-all`} id="header">
                <Layout>
                    <div className='flex items-center justify-between gap-[20px]'>
                        <div className='hidden lg:flex items-center gap-2'>
                        </div>
                        <div>
                            <Link to={"/"}>
                                <img src={logo} className='w-full hidden lg:block transition-all' alt="no image" id="logo" />
                                <img src={logo_mobile} className='w-full block lg:hidden' alt="no image" id="logo_mobile" />
                            </Link>
                        </div>
                        {!sidebar ? (
                            <div className='flex flex-col gap-[7px] cursor-pointer' onClick={openSidebarHandler}>
                                <div className='w-[40px] h-[1px] bg-dark-red'></div>
                                <div className='w-[40px] h-[1px] bg-dark-red'></div>
                                <div className='w-[40px] h-[1px] bg-dark-red'></div>
                            </div>
                        ) : (
                            <div className='w-[40px] cursor-pointer flex justify-center' onClick={closeSidebarHandler}>
                                <img src={close} alt="no image" className='cursor-pointer' />
                            </div>
                        )}
                    </div>
                </Layout>
            </div>

            <Sidebar
                open={sidebar}
                close={closeSidebarHandler}
            />
        </>
    )
}

export default memo(Navbar);