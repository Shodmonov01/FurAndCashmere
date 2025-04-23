import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import Layout from '../../services/Layout';
import Button from '../../components/Button';
import Contact from '../../components/Contact';
import Consultation from '../../components/Consultation';
import individualniy_poshiv from '../../assets/individualniy_poshiv.png';


function CustomTailoring() {
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Пошив шуб в СПБ | FUR&CASHMERE</title>
                <meta
                    name="description"
                    content="FUR&CASHMERE предлагает индивидуальный пошив шуб. Оставляйте заявку на сайте"
                />
            </Helmet>
            <div className='font-inter pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[100px]'>
                <Layout>
                    <div className='flex items-center justify-center lg:justify-between flex-wrap gap-[20px]'>
                        <h2 className='leading-[31px] lg:leading-[60px] text-[26px] lg:text-[50px] uppercase text-dark-red text-center lg:text-left'>Индивидуальный пошив</h2>
                        <div className='w-full md:w-[280px]'>
                            <Button
                                name="Получите консультацию"
                                classname="w-full md:w-[280px] hover:text-white hover:bg-dark-red border-dark-red text-dark-red hover:border-dark-red"
                                stroke={true}
                                type="button"
                                onClick={openConsultationModalHandler}
                                svgClassName="stroke-dark-red"
                            />
                        </div>
                    </div>
                </Layout>

                <div className='pt-[20px] lg:pt-[23px] flex flex-col gap-[49px] lg:gap-[99px]'>
                    <img src={individualniy_poshiv} alt="no image" className='w-full lg:h-[calc(100vh_-_200px)] xxl:h-auto object-cover' />
                    <Layout>
                        <div className='w-full lg:w-[75%] m-auto flex flex-col gap-[20px] lg:gap-[40px] text-center'>
                            <div className='h-[1px] bg-dark-red w-full lg:w-[65%] m-auto'></div>
                            <span className='text-[14px] lg:text-[15px]'>
                                {/* Мы предлагаем уникальную услугу по индивидуальному пошиву шуб и пальто. Мы понимаем, что каждый человек заслуживает не просто качественную и стильную одежду, а вещь, которая идеально подходит именно ему. Поэтому мы создаем изделия, которые подчеркнут вашу индивидуальность и подарят вам комфорт и уверенность в себе. */}

                                Мы предлагаем услугу индивидуального пошива меховых и кашемировых изделий, парок и аксессуаров.
                            </span>
                            <span className='text-[14px] lg:text-[15px]'>
                                Изделия от FUR CASHMERE - произведение высокого скорняжного и портновского искусства.
                                Подчеркнут Вашу индивидуальность, подарят комфорт и уверенность в себе.
                            </span>
                            <span className='text-[14px] lg:text-[15px]'>
                                Исходя из Ваших пожеланий и персональных мерок, дизайнеры FUR CASHMERE помогут определиться с фасоном и материалами.
                                На выбор представлена большая коллекция эксклюзивных тканей и меха.
                            </span>
                            <div className='h-[1px] bg-dark-red w-full lg:w-[65%] m-auto'></div>
                        </div>
                    </Layout>
                </div>

                {/* <div className='pt-[50px] lg:pt-[158px] '>
                    <Layout>
                        <h2 className='leading-[31px] lg:leading-[56px] text-[26px] lg:text-[40px] uppercase text-dark-red flex w-full lg:w-[60%] m-auto text-center'>Эксклюзивные изделия, созданные специально для вас</h2>
                    </Layout>

                    <div className='grid grid-cols-1 lg:grid-cols-2 pt-[20px] lg:pt-[22px]'>
                        <div className='col-span-1 h-[360px] lg:h-[720px]'>
                            <img src={cat1} alt="no image" className='w-full h-full object-fill' />
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center bg-white h-[360px] lg:h-[720px]'>
                            <Layout>
                                <div className='flex flex-col gap-[4px] px-0 lg:px-[85px] py-[89px] lg:py-0 text-normal_text text-[16px] lg:text-[18px]'>
                                    <span>Мы начинаем с детального обсуждения ваших пожеланий и требований. Наши специалисты помогут вам определиться с выбором материала и фасона.</span>
                                    <span>Тщательно снимаем мерки, чтобы обеспечить идеальную посадку изделия.</span>
                                </div>
                            </Layout>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='col-span-1 order-first lg:order-last h-[360px] lg:h-[720px]'>
                            <img src={cat2} alt="no image" className='w-full h-full object-fill' />
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center bg-white h-[360px] lg:h-[720px]'>
                            <Layout>
                                <div className='flex flex-col gap-[4px] px-0 lg:px-[85px] py-[89px] lg:py-0 text-normal_text text-[16px] lg:text-[18px]'>
                                    <span>На основе ваших пожеланий и мерок мы создаем индивидуальный эскиз будущего изделия.</span>
                                </div>
                            </Layout>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='col-span-1 h-[360px] lg:h-[720px]'>
                            <img src={cat3} alt="no image" className='w-full h-full object-fill' />
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center bg-white h-[360px] lg:h-[720px]'>
                            <Layout>
                                <div className='flex flex-col gap-[4px] px-0 lg:px-[85px] py-[89px] lg:py-0 text-normal_text text-[16px] lg:text-[18px]'>
                                    <span>Пошив изделия включает несколько примерок, чтобы убедиться, что оно сидит идеально.</span>
                                </div>
                            </Layout>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='col-span-1 order-first lg:order-last h-[360px] lg:h-[720px]'>
                            <img src={cat4} alt="no image" className='w-full h-full object-fill' />
                        </div>
                        <div className='col-span-1 flex flex-col items-center justify-center bg-white h-[360px] lg:h-[720px]'>
                            <Layout>
                                <div className='flex flex-col gap-[4px] px-0 lg:px-[85px] py-[89px] lg:py-0 text-normal_text text-[16px] lg:text-[18px]'>
                                    <span>После окончательной примерки и внесения всех необходимых корректировок ваше изделие будет готово.</span>
                                </div>
                            </Layout>
                        </div>
                    </div>
                </div> */}

                <Contact
                    openConsultationModalHandler={openConsultationModalHandler}
                />
            </div>

            {openConsultation && (
                <Consultation
                    open={openConsultation}
                    close={closeConsultationModalHandler}
                />
            )}

            {/* footer */}
            <Footer />
        </>
    )
}

export default CustomTailoring;