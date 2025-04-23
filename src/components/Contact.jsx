import React, { memo } from 'react';
import Button from './Button';
import Layout from '../services/Layout';

function Contact(props) {

    return (
        <Layout>
            <div className='pt-[50px] lg:pt-[100px] flex flex-col items-center'>
                {/* <h2 className='text-bold_text text-[26px] lg:text-[40px] leading-[31px] lg:leading-[56px] uppercase'>Наши контакты</h2>
                <span className='pt-[10px] lg:pt-[17px] text-normal_text text-[15px] lg:text-[16px] w-full lg:w-[30%] m-auto text-center'>Свяжитесь с нами для записи на консультацию или приходите к нам</span> */}
                <ul className='pt-[20px] lg:pt-[32px] text-center font-inter_medium text-dark-red text-[14px] lg:text-[15px] flex flex-col gap-[15px] lg:gap-[20px]'>
                    {/* <li>+7 921 553 07 51</li> */}
                    {/* <li>г. Город, ул. Улица, д. Дом, офис №1</li> */}
                    <li>Санкт Петербург, Петроградский район, 
                    м. Горьковская</li>
                    {/* <li className='flex items-center gap-[20px] justify-center'>
                        <span><a href="https://t.me/furcashmere" target='_blank'>Telegram</a></span>
                        <span><a href="https://wa.me/+79215530751" target='_blank'>WhatsApp</a></span>
                        <span><a href="https://vk.com/fur_and_cashmere" target='_blank'>VK</a></span>
                        <span><a href="https://www.instagram.com/fur.cashmere/" target='_blank'>Instagram</a></span>
                    </li> */}
                </ul>
                <div className='flex justify-center w-full pt-[20px] lg:pt-[40px]'>
                    <div className='w-full md:w-[280px]'>
                        <Button
                            name="Получите консультацию"
                            classname="w-full md:w-[280px] hover:text-white border-dark-red text-dark-red hover:bg-dark-red hover:border-dark-red"
                            stroke={true}
                            svgClassName="stroke-dark-red"
                            onClick={props.openConsultationModalHandler}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default memo(Contact);