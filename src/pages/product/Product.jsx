import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';
import Layout from '../../services/Layout';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Carousel from './components/Carousel';
import Fitting from '../../components/Fitting';

function Product() {
    const { state } = useLocation();
    const [openFitting, setOpenFitting] = useState(false);

    // open fitting modal
    const openFittingModalHandler = () => {
        setOpenFitting(true);
    }
    // close fitting modal
    const closeFittingModalHandler = () => {
        setOpenFitting(false);
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{state && `Купить ${state?.name} в СПБ | FUR&CASHMERE`}</title>
                <meta
                    name="description"
                    content={state && `${state?.name} - широкая размерная сетка, высокое качество производства и лучшие модели.`}
                />
            </Helmet>
            <Layout>
                <div className='grid grid-cols-1 lg:grid-cols-3 font-inter gap-[20px] pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[100px]'>
                    {/* <div className='col-span-2 hidden lg:block'>
                        <div className={`grid grid-cols-1 ${state && state.product_image?.length > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-[10px] lg:gap-[20px]`}>
                            {state && state.product_image?.length > 0 && state.product_image.map(item => (
                                <div key={item.id} className='col-span-1'>
                                    <img src={item.image} alt="no image" className='w-full h-auto lg:h-[calc(100vh_-_100px)] xxxl:h-auto' />
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div className='col-span-2 hidden lg:block'>
                        <div className={`grid grid-cols-2 gap-[10px] lg:gap-[20px]`}>
                            {state && state.product_image?.length > 0 && state.product_image.map((item, index) => {
                                // Если это пятая фотография, используем отдельный div для новой строки
                                if (index % 5 === 4) {
                                    return (
                                        <div key={item.id} className='col-span-2 w-full'>
                                            <img src={item.image} alt="no image" className='w-full h-auto lg:h-[calc(100vh_-_67px)] xxxl:h-auto' />
                                        </div>
                                    );
                                }
                                return (
                                    <div key={item.id} className='col-span-1'>
                                        <img src={item.image} alt="no image" className='w-full h-auto lg:h-[calc(100vh_-_67px)] xxxl:h-auto object-cover' />
                                    </div>
                                );
                            })}
                        </div>
                    </div>



                    <div className='col-span-1 block lg:hidden'>
                        <Carousel
                            data={state ? state.product_image : []}
                        />
                    </div>

                    <div className='col-span-1 flex flex-col'>
                        {state && state?.name && <span className='text-[24px] text-bold_text uppercase'>{state.name}</span>}
                        {state && state?.price && (
                            <>
                                <span className='text-dark-red text-[18px] pt-[20px]'>{new Intl.NumberFormat("en-US", { style: "decimal" }).format(state.price) + "₽"}</span>
                                <hr className='h-[1px] bg-[#E2E2E2] w-full my-[20px]' />
                            </>
                        )}
                        {state?.description && (
                            <>
                                <span className='text-dark-red text-[14px] uppercase'>ОПИСАНИЕ:</span>
                                <div className='pt-[20px] text-[14px] lg:text-[15px] flex flex-col'>
                                    {state?.description && parse(state?.description)}
                                </div>
                                <hr className='h-[1px] bg-[#E2E2E2] w-full my-[20px]' />
                            </>
                        )}
                        <span className='text-dark-red text-[14px] uppercase'>Информация:</span>
                        <div className='pt-[20px] text-[14px] lg:text-[15px] flex flex-col'>
                            <span>Состав: {state?.compound}</span>
                            {/* <span>Страна дизайна: {state?.country_design}</span> */}
                            <span>Страна производства: {state?.country_origin}</span>
                            <span>Артикул: {state?.artikul}</span>
                            <span>На модели: {state?.on_model && parse(state?.on_model)}</span>
                        </div>

                        <div className='w-full md:w-[292px] pt-[40px]'>
                            <Button
                                name="Забронировать примерку"
                                classname="w-full md:w-[292px] hover:text-white border-dark-red text-dark-red hover:bg-dark-red hover:border-dark-red"
                                stroke={false}
                                svgClassName="stroke-dark-red"
                                onClick={openFittingModalHandler}
                            />
                        </div>
                    </div>
                </div>
            </Layout>

            {openFitting && (
                <Fitting
                    open={openFitting}
                    close={closeFittingModalHandler}
                />
            )}

            {/* footer */}
            <Footer />
        </>
    )
}

export default Product;