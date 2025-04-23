import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Women({ data, navigateHandler }) {

    return (
        data?.length > 0 ? data.map(elem => (
            <li key={elem.slug} className='col-span-1 flex flex-col gap-[6px] text-[14px] lg:text-[16px] cursor-pointer w-full' onClick={() => navigateHandler(elem)}>
                <div className='w-full lg:h-[calc(100vh_-_100px)] xxl:h-auto womenLazyLoadImage'>
                    {elem?.image ? (
                        <LazyLoadImage
                            alt={"Изображение недоступно"}
                            // height={image.height}
                            src={elem.image} // use normal <img> attributes as props
                            // width={image.width}
                            effect="blur"
                            // wrapperProps={{
                            //     // If you need to, you can tweak the effect transition using the wrapper style.
                            //     style: { transitionDelay: "1s" },
                            // }}
                            className='w-full lg:h-[calc(100vh_-_100px)] xxl:h-auto'
                            style={{display: "block"}}
                        />
                        // <img src={elem.image} className='w-full lg:h-[600px]' alt="Изображение недоступно" />
                    ) : (
                        <div className='border border-gray-200 w-full h-full flex items-center justify-center text-bold_text opacity-70'
                            style={{ background: "linear-gradient(180deg, #BDBEC1 -48.17%, #F0F0F0 100%)" }}
                        >
                            <span className='font-inter_medium text-[14px] lg:text-[16px] text-bold_text'>{elem.name}</span>
                        </div>
                    )}
                </div>
                <div className='text-bold_text uppercase font-inter_medium'>
                    {/* {elem?.image && (
                        !(elem.name.toLowerCase() === "Интерьер".toLowerCase() || elem.name.toLowerCase() === "Мужская коллекция".toLowerCase()) && ( */}
                            <span>{elem.name}</span>
                        {/* )
                    )} */}
                </div>
            </li>
        )) : (
            <div className='text-bold_text text-[14px] font-inter_medium flex items-center justify-center w-full col-span-3'>
                <span>Информация не найдена.</span>
            </div>
        )
    )
}

export default memo(Women);