import React, { memo, useRef } from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { imageExtensions } from '../../../services/options';
import left from '../../../assets/123left.svg';
import right from '../../../assets/123.svg';

function FotoCarousel(props) {
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

    return (
        Array.isArray(props.comments) && props.comments?.length > 0 && (
            <div className='mt-[20px] lg:mt-[30px]'>
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
                            {props.comments.map(item => (
                                imageExtensions.filter(e => item.image.indexOf(e) > -1)?.length > 0 && (
                                    <SwiperSlide key={item.id} className=''>
                                        <div className='flex flex-col gap-[10px] cursor-pointer text-[14px]'>
                                            <img src={item.image} alt="" className='w-full h-[calc(100vh_-_150px)]' />
                                            <div className='flex flex-col gap-[15px]'>
                                                <span className='font-inter_bold uppercase text-bold_text break-words'>{item.full_name}</span>
                                                <span className='font-normal text-normal_text'>{parse(item?.otzif)}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            ))}
                        </Swiper>
                    </div>
                    <div className='flex items-center justify-center gap-[20px]'>
                        <button
                            className='prev_button'
                            onClick={goPrev}
                        >
                            <img src={left} alt="" />
                        </button>{' '}
                        <button
                            className='next_button'
                            onClick={goNext}
                        >
                            <img src={right} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}

const mapStateToProps = state => {
    return {
        comments: state.rootReducer.comments,
    }
}

export default connect(mapStateToProps, null)(memo(FotoCarousel));