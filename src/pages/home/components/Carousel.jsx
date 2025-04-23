import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

function Carousel(props) {

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + '</span>';
    //     },
    // };

    return (
        <div className='py-[50px] lg:py-[100px]'>
            <Swiper
                // pagination={pagination}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {Array.isArray(props.bannerImage) && props.bannerImage?.length > 0 && props.bannerImage.map(item => (
                    <SwiperSlide key={item.id} className=''>
                        <div className='relative'>
                            <img src={item.image} className='w-full h-[calc(100vh_-_200px)] lg:h-[calc(100vh_-_67px)] xxxl:h-auto object-cover' alt="Изображение недоступно" />
                            <div className='absolute inset-0 bg-black/5'></div>
                            <div className='absolute top-0 bottom-0 px-[20px] lg:px-[80px] flex flex-col justify-center gap-[20px] lg:gap-[30px] text-white font-inter font-normal w-full lg:w-[50%] pt-[180px] lg:pt-0'>
                                <h2 className='text-[26px] lg:text-[40px] leading-[31px] lg:leading-[48px] uppercase'>{item.title}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bannerImage: state.rootReducer.bannerImage,
    }
}

export default connect(mapStateToProps, null)(memo(Carousel));