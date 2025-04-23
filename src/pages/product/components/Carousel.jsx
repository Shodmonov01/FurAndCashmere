import React, { memo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import left_carousel from '../../../assets/left_carousel.svg';

function Carousel(props) {
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
        <div className={`w-full relative`}>
            <div className='w-full px-[0px] lg:px-[100px]'>
                <Swiper
                    slidesPerView={props.slidesPerView}
                    // modules={[Autoplay]}
                    loop="infinite"
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
                            slidesPerView: 4,
                        },
                    }}
                    ref={swiperRef}
                    className="mySwiper"
                >
                    {props.data?.length > 0 && props.data.map(item => (
                        <SwiperSlide key={item.id} className='' >
                            <div className='flex flex-col gap-[10px]'>
                                <img src={item.image} alt="" className='w-full h-[calc(100vh_-_100px)] object-cover object-top' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='flex items-center justify-between mt-6 absolute top-0 bottom-0 right-0 left-0 m-auto z-10 px-[10px]'>
                <button
                    className='prev_button'
                    onClick={goPrev}
                >
                    <img src={left_carousel} alt="no image" className='w-full' />
                </button>{' '}
                <button
                    className='next_button'
                    onClick={goNext}
                // onMouseDown={event => mouseEnterHandler(event, "next_button")}
                // onMouseUp={event => mouseUpHandler(event, "next_button")}
                >
                    <img src={left_carousel} alt="no image" className='w-full rotate-[180deg]' />
                </button>
            </div>
        </div>
    )
}

export default memo(Carousel);