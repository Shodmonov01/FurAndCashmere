import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { imageExtensions, videoExtensions } from "../../../services/options";
import Loading from "../../../components/Loading";

const Banner = (props) => {
    const [play, setPlay] = useState(true);

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
        <div className='w-full h-[calc(100vh_-_67px)]'>
            {props.bannerVideo && Array.isArray(props.bannerVideo) && props.bannerVideo?.length > 0 ? (
                <Swiper
                    // pagination={pagination}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {props.bannerVideo.map(item => {
                        return (
                            <>
                                {/* desktop */}
                                {item.banner_desktop?.length > 0 && (
                                    <SwiperSlide key={item.id} className='hidden lg:block'>
                                        {item.banner_desktop.every(el => imageExtensions.filter(e => el.image.toLowerCase().indexOf(e) > -1)?.length > 0) ? (
                                            <div className='flex items-center w-full h-full'>
                                                {item.banner_desktop.map(e => (
                                                    <img key={e.id} src={e.image} className='' alt="no image" style={{ width: `${100 / item.banner_desktop?.length}%` }} />
                                                ))}
                                            </div>
                                        ) : item.banner_desktop.every(el => videoExtensions.filter(e => el.image.toLowerCase().indexOf(e) > -1)?.length > 0) ? (
                                            <div className='relative w-full'>
                                                <video autoPlay muted loop id="myVideo" className=''>
                                                    <source src={item.banner_desktop[0]?.image} type="video/mp4" />
                                                    Your browser does not support HTML5 video.
                                                </video>
                                                <div className='absolute bottom-4 right-4 lg:left-4 rounded-full bg-transparent border-2 text-white border-white w-10 h-10 flex items-center justify-center cursor-pointer z-50' onClick={myFunction}>
                                                    {play ? (
                                                        <IoIosPause className='w-[26px] h-[26px]' />
                                                    ) : (
                                                        <IoIosPlay className='w-[26px] h-[26px] ml-[2px]' />
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='flex items-center justify-center h-full w-full text-xs font-inter text-normal_text'>
                                                <span>Ничего нет.</span>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                )}

                                {/* mobile */}
                                {item.banner_mobile?.length > 0 && item.banner_mobile.map(el => (
                                    <SwiperSlide key={el.id} className='block lg:hidden'>
                                        {imageExtensions.filter(e => el.image.toLowerCase().indexOf(e) > -1)?.length > 0 ? (
                                            <img src={el?.image} className='w-full h-full' alt="no image" />
                                        ) : videoExtensions.filter(e => el.image.toLowerCase().indexOf(e) > -1)?.length > 0 ? (
                                            <div className='relative w-full'>
                                                <video autoPlay muted loop id="myVideo" className=''>
                                                    <source src={el.image} type="video/mp4" />
                                                    Your browser does not support HTML5 video.
                                                </video>
                                                <div className='absolute bottom-4 right-4 lg:left-4 rounded-full bg-transparent border-2 text-white border-white w-10 h-10 flex items-center justify-center cursor-pointer z-50' onClick={myFunction}>
                                                    {play ? (
                                                        <IoIosPause className='w-[26px] h-[26px]' />
                                                    ) : (
                                                        <IoIosPlay className='w-[26px] h-[26px] ml-[2px]' />
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='flex items-center justify-center h-full w-full text-xs font-inter text-normal_text'>
                                                <span>Ничего нет.</span>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                )
                                )}
                            </>
                        )
                    })}
                </Swiper>
            ) : (
                props.loading ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <div>
                            <Loading />
                        </div>
                    </div>
                ) : (
                    props.bannerVideo?.length === 0 && (
                        <span>Видео или фото пока недоступно.</span>
                    )
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bannerVideo: state.rootReducer.bannerVideo,
        loading: state.rootReducer.loading,
    };
}

export default connect(mapStateToProps, null)(memo(Banner));
