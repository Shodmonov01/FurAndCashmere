import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import Layout from '../../services/Layout';
import Contact from '../../components/Contact';
import Consultation from '../../components/Consultation';
import Footer from '../../components/Footer';

function SpecificNews() {
    const { state } = useLocation();
    const [openConsultation, setOpenConsultation] = useState(false);

    // open consultation modal
    const openConsultationModalHandler = () => {
        setOpenConsultation(true);
    }
    // close consultation modal
    const closeConsultationModalHandler = () => {
        setOpenConsultation(false);
    }

    return (
        <>
            <div className='font-inter font-normal pb-[50px] lg:pb-[100px]'>
                {state && (
                    <>
                        <div>
                            <img src={state?.image} alt="no image" className='w-full lg:h-[calc(100vh_-_50px)] lg:object-contain'
                            // style={{ aspectRatio: "16/9 auto" }}
                            />
                        </div>

                        <Layout>
                            <div className='pb-[20px] lg:pb-[40px] pt-[20px] lg:pt-[100px] flex flex-col items-center w-full lg:w-[65%] m-auto'>
                                <h2 className='text-[26px] lg:text-[50px] leading-[31px] lg:leading-[60px] text-dark-red text-center uppercase'>{state?.title}</h2>
                                <hr className='h-[2px] bg-dark-red w-[50%] m-auto my-[20px] lg:my-[40px]' />
                                <span className='text-[15px] lg:text-[16px] text-normal_text text-center'>
                                    {state?.content && parse(state?.content)}
                                </span>
                            </div>
                        </Layout>
                    </>
                )}

                {/* contact */}
                <Contact
                    openConsultationModalHandler={openConsultationModalHandler}
                />
            </div>

            {/* footer */}
            <Footer />

            {openConsultation && (
                <Consultation
                    open={openConsultation}
                    close={closeConsultationModalHandler}
                />
            )}
        </>
    )
}

export default SpecificNews;