import React, { memo } from 'react';
import Layout from '../../../services/Layout';
import ContactMap from '../../../components/ContactMap';

function Contact() {
    return (
        <Layout>
            <div className='pb-[50px] lg:pb-[150px] font-inter flex flex-col gap-[50px] lg:gap-0'>
                {/* row 1 */}
                <ContactMap />

                {/* row 2 */}
                {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-0 lg:h-[calc(100vh_-_50px)] xxxl:h-auto'>
                    <div className='col-span-1 order-last lg:order-first llg:h-[calc(100vh_-_50px)] xxxl:h-auto'>
                        <video autoPlay muted loop id="myVideo" className='w-full h-full object-cover'>
                            <source src={tiny_new} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <ContactForm />
                </div> */}
            </div>
        </Layout>
    )
}

export default memo(Contact);