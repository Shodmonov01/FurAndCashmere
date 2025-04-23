import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import Layout from '../../services/Layout';
import { getAllComments, isClearReviews } from '../../redux/reducers/rootReducer';
import FotoCarousel from './components/FotoCarousel';
import VideoCarousel from './components/VideoCarousel';
// import star from '../../assets/star.svg';
// import yandex from '../../assets/yandex.png';

function Reviews(props) {
    // const [selected, setSelected] = useState(1);
    const [size] = useState(8);
    // const [plusSize, setPlusSize] = useState(0);

    // get data
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        props.onClearReviews([]); // clear blogs
        props.onGetAllComments({ signal, selectedId: 1, size: size }); // get all reviews

        return () => controller.abort();
    }, []);

    // for pagination
    // const handlePageClick = async () => {
    //     props.onGetAllComments({ selectedId: selected + 1, size: size }); // get all reviews
    //     setSelected(selected + 1);
    //     setPlusSize(plusSize + size);
    // }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Отзывы о FUR&CASHMERE</title>
                <meta
                    name="description"
                    content="Прочитайте отзывы наших клиентов и узнайте, почему они выбирают FUR&CASHMERE. Мы гордимся высоким качеством наших изделий и обслуживанием."
                />
            </Helmet>
            <Layout>
                <div className='font-inter pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[100px]'>
                    <div className='text-center'>
                        <h2 className='leading-[31px] lg:leading-[60px] text-[26px] lg:text-[50px] uppercase text-dark-red'>Отзывы</h2>
                    </div>

                    {/* <div className='mt-[26px] lg:mt-[50px]'>
                        <div className='w-full relative flex flex-col gap-[20px] lg:gap-[40px]'>
                            <div className='w-full'>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    pagination={false}
                                    // navigation={true}
                                    // loop={true}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    ref={swiperRef}
                                    className="mySwiper"
                                >
                                    {Array.isArray(props.comments) && props.comments?.length > 0 && props.comments.map(item => (
                                        <SwiperSlide key={item.id} className=''>
                                            <div className='flex flex-col gap-[20px] cursor-pointer bg-white p-[26px]'>
                                                <div className='flex items-center justify-between'>
                                                    <div className='flex items-center gap-5'>
                                                        <img src={item.image} alt="no image" className='!w-[100px] h-[100px] rounded-full' />
                                                        <div className='flex flex-col gap-[15px] text-[14px]'>
                                                            <span className='text-[#ACACAC]'>{new Date(item.create_at).toLocaleDateString()}</span>
                                                            <span className='font-inter_semibold uppercase text-bold_text'>Мария С.</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <img src={star} alt="no image" />
                                                        <img src={star} alt="no image" />
                                                        <img src={star} alt="no image" />
                                                        <img src={star} alt="no image" />
                                                        <img src={star} alt="no image" />
                                                    </div>
                                                </div>

                                                <div className='text-[16px]'>
                                                    <span>
                                                        Я в восторге от своей новой норковой шубы! Качество меха просто великолепное, шуба очень мягкая и теплая. Заказала размер S, и он идеально подошел. Обязательно закажу у вас что-нибудь еще!
                                                    </span>
                                                </div>

                                                <div className='w-[139px]'>
                                                    <img src={yandex} alt="no image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className='flex items-center justify-center gap-[20px]'>
                                <button
                                    className='prev_button'
                                    onClick={goPrev}
                                // onMouseDown={event => mouseEnterHandler(event, "prev_button")}
                                // onMouseUp={event => mouseUpHandler(event, "prev_button")}
                                >
                                    <img src={left} alt="" />
                                </button>{' '}
                                <button
                                    className='next_button'
                                    onClick={goNext}
                                // onMouseDown={event => mouseEnterHandler(event, "next_button")}
                                // onMouseUp={event => mouseUpHandler(event, "next_button")}
                                >
                                    <img src={right} alt="" />
                                </button>
                            </div>
                        </div>
                    </div> */}

                    <hr className='w-full lg:w-[50%] m-auto h-[2px] bg-dark-red mt-[30px] lg:mt-[40px]' />

                    <VideoCarousel />

                    <hr className='w-full lg:w-[50%] m-auto h-[2px] bg-dark-red mt-[30px] lg:mt-[40px]' />

                    <FotoCarousel />

                    {/* <div className='text-dark-red w-full lg:w-[50%] m-auto pt-[30px] lg:pt-[50px]'>
                        <ul>
                            {props.comments?.length > 0 && props.comments.map((item, index) => (
                                <li key={item.id} className={`border-t-[1px] border-bold_text flex flex-col gap-[20px] py-[10px] ${index === props.comments?.length - 1 && 'border-b-[1px]'}`}>
                                    <span className='text-[14px] text-dark-red uppercase'>{item.full_name}</span>
                                    <span className='text-[14px] lg:text-[15px] text-bold_text'>{item?.otzif && parse(item?.otzif)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {props.comments?.length >= size + plusSize && (
                        <div className='text-dark-red font-inter_medium cursor-pointer text-center mt-6'>
                            <span onClick={handlePageClick}>Показать еще</span>
                        </div>
                    )} */}
                </div>
            </Layout>

            {/* footer */}
            <Footer />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllComments: value => dispatch(getAllComments(value)),
        onClearReviews: value => dispatch(isClearReviews(value)),
    }
}

export default connect(null, mapDispatchToProps)(Reviews);