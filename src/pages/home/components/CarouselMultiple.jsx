import React, { memo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Layout from '../../../services/Layout';
import left from '../../../assets/123left.svg';
import right from '../../../assets/123.svg';

function CarouselMultiple(props) {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination]);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    // navigate
    const navigateHandler = value => {
        navigate("/specific_news", { state: value });
    }

    return (
        <Layout>
            <div className='font-inter m-auto flex flex-col gap-[10px] lg:gap-[26px] py-[50px] lg:py-[150px]'>
                <h2 className='text-[26px] text-center lg:text-[40px] font-normal leading-[31px] lg:leading-[48px] text-dark-red uppercase hidden lg:block'>Внутри FUR & CASHMERE</h2>
                <h2 className='text-[26px] text-center lg:text-[40px] font-normal leading-[31px] lg:leading-[48px] text-dark-red uppercase block lg:hidden'>Внутри <br /> FUR & CASHMERE</h2>

                <div>
                    <div className='w-full relative text-[14px] lg:text-[16px] flex flex-col gap-[20px] lg:gap-[40px]'>
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
                            {Array.isArray(props.blogs) && props.blogs?.length > 0 && props.blogs.map((item, index) => (
                                <SwiperSlide key={index + 1} className=''>
                                    <div className='flex flex-col gap-[10px] cursor-pointer' onClick={() => navigateHandler(item)}>
                                        <LazyLoadImage
                                            alt={"Изображение недоступно"}
                                            // height={image.height}
                                            src={item.image} // use normal <img> attributes as props
                                            // width={image.width}
                                            effect="blur"
                                            // wrapperProps={{
                                            //     // If you need to, you can tweak the effect transition using the wrapper style.
                                            //     style: { transitionDelay: "1s" },
                                            // }}
                                            className='w-full h-[350px] lg:h-[calc(100vh_-_200px)] xxxl:h-auto object-cover object-top'
                                        />
                                        {/* <img src={item.image} alt="" className='w-full h-[350px] lg:h-[calc(100vh_-_200px)] object-cover object-top' /> */}
                                        <div className='flex flex-col text-[13px] gap-[15px]'>
                                            <span className='font-inter_medium text-[13px] lg:text-[14px] uppercase text-bold_text break-words'>{item.title}</span>
                                            <span className='font-normal text-normal_text line-clamp-3' style={{ color: "#5B5A57" }}>{parse(item?.content)}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {Array.isArray(props.blogs) && props.blogs?.length > 0 && (
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
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        blogs: state.rootReducer.blogs,
    }
}

export default connect(mapStateToProps, null)(memo(CarouselMultiple));