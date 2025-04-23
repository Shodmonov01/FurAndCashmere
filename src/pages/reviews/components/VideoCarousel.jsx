import React, { memo, useRef, useState } from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { videoExtensions } from '../../../services/options';
import left from '../../../assets/123left.svg';
import right from '../../../assets/123.svg';

function VideoCarousel(props) {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination]);
    const [play, setPlay] = useState(true);

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

    // control buttons
    function myFunction() {
        let video = document.getElementById("myVideo");
        if (video.paused) {
            video.play();
            setPlay(true);
        } else {
            video.pause();
            setPlay(false);
        }
    }

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
                                videoExtensions.filter(e => item.image.indexOf(e) > -1)?.length > 0 && (
                                    <SwiperSlide key={item.id} className=''>
                                        <div className='relative group'>
                                            <div className='flex flex-col gap-[10px] cursor-pointer text-[14px] h-[calc(100vh_-_100px)] w-full'>
                                                <video autoPlay muted loop id="myVideo" className='h-[calc(100vh_-_100px)] w-full object-fill'>
                                                    <source src={item.image} type="video/mp4" />
                                                    Your browser does not support HTML5 video.
                                                </video>
                                                <div className='flex flex-col gap-[15px]'>
                                                    <span className='font-inter_bold uppercase text-bold_text break-words'>{item.full_name}</span>
                                                    <span className='font-normal text-normal_text'>{parse(item?.otzif)}</span>
                                                </div>
                                            </div>
                                            <div className='absolute top-0 bottom-[100px] right-0 left-0 m-auto rounded-full bg-transparent border-4 text-white border-white w-20 h-20 items-center justify-center cursor-pointer transition-all hidden group-hover:flex' onClick={myFunction}>
                                                {play ? (
                                                    <IoIosPause className='w-[42px] h-[42px]' />
                                                ) : (
                                                    <IoIosPlay className='w-[42px] h-[42px]' />
                                                )}
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

export default connect(mapStateToProps, null)(memo(VideoCarousel));