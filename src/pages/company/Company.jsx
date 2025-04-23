import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../services/Layout';
import Footer from '../../components/Footer';
import ContactMap from '../../components/ContactMap';
import Header from '../../components/Header';
import Brand from './components/Brand';
import company_image from '../../assets/company_image.png';
import company_image2 from '../../assets/company_image2.jpg';

// import Ourvalues from './components/Ourvalues';

function Company() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Продажа шуб и пальто в СПБ | FUR&CASHMERE</title>
                <meta
                    name="description"
                    content="В FUR&CASHMERE вы найдете широкий ассортимент шуб и пальто, созданных из лучших материалов с учетом актуальных модных тенденций. Оставляйте заявку на сайте"
                />
            </Helmet>
            <Layout>
                <div className='font-inter pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[100px] font-normal'>
                    <Header name="о бренде" />

                    <Brand />

                    {/* <div className='text-center pt-[50px] lg:pt-[100px]'>
                        <Header name="Наши ценности" />
                    </div> */}

                    {/* <Ourvalues /> */}

                    {/* <div className='text-center pt-[50px] lg:pt-[100px]'>
                        <h2 className='leading-[31px] lg:leading-[48px] text-[26px] lg:text-[40px] uppercase text-dark-red'>Наша миссия</h2>
                    </div> */}

                    {/* <div className='w-full lg:w-[70%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-left'>
                        <ul>
                            <li>
                                Нашей главной целью является создание верхней одежды, которая не только согревает в холодное время года, но и подчеркивает индивидуальность и утонченность каждого человека. Мы верим, что каждая шуба и пальто должны стать неотъемлемой частью вашего гардероба, принося радость и комфорт.
                            </li>
                        </ul>
                    </div> */}

                    <div className='py-[50px] lg:py-[100px]'>
                        <img src={company_image2} alt="no image" className='w-full h-[calc(100vh_-_200px)] lg:h-[calc(100vh_-_50px)] xxl:h-auto object-cover' />
                    </div>

                    {/* contact, map */}
                    <ContactMap />
                </div>
            </Layout>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Company;