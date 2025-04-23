import React, { memo } from 'react';
import Layout from '../../../services/Layout';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';

function Brand() {
    return (
        <Layout>
            <div className='font-inter w-full lg:w-[50%] m-auto text-center flex flex-col gap-[20px] lg:gap-[40px]'>
                <Header name="о бренде" />
                <div className='text-[14px] lg:text-[15px] text-normal_text flex flex-col gap-[6px]'>
                    {/* <p>FUR & CASHMERE создаёт изделия и аксессуары из элитных натуральных мехов, кашемира и шерсти премиального сегмента</p>
                    <p>Многолетний опыт, полученный в совместной работе с итальянскими фабриками, позволил воплотить в изделиях совершенный стиль, безупречное качество и комфорт.</p> */}
                    <span className='text-dark-red'>FUR & CASHMERE создаёт изделия и аксессуары из элитных натуральных мехов, кашемира и шерсти премиального сегмента</span>
                    <span>Многолетний опыт, полученный в совместной работе с итальянскими фабриками, позволил воплотить в изделиях совершенный стиль, безупречное качество и комфорт.</span>
                </div>
                <div>
                    <Link to={"/company"}>
                        <span className='text-[14px] lg:text-[16px] font-inter_medium text-dark-red cursor-pointer'>Подробнее о бренде</span>
                    </Link>
                </div>
            </div>

            <div className='py-[50px] lg:py-[100px]'>
                <hr className='w-full lg:w-[50%] m-auto h-[2px] bg-dark-red' />
            </div>

            <div className='font-inter w-full lg:w-[50%] m-auto text-center flex flex-col gap-[20px] lg:gap-[40px]'>
                <Header name="индивидуальный пошив" />
                <div className='text-[14px] lg:text-[15px] text-normal_text flex flex-col gap-[10px]'>
                    <p>FUR & CASHMERE предлагает как готовые модели из каталога, так и персональный пошив изделий из меха, верхней одежды и аксессуаров.</p>
                </div>
                <div>
                    <Link to={"/custom_tailoring"}>
                        <span className='text-[14px] lg:text-[15px] font-inter_medium text-dark-red cursor-pointer'>Узнайте подробности у наших менеджеров</span>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default memo(Brand);