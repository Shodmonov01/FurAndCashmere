import React, { memo } from 'react';

function Other({ other, navigateOtherHandler }) {
    return (
        other?.length > 0 && (
            <ul className='grid grid-cols-2 lg:grid-cols-3 gap-[9px] pt-[20px] lg:pt-[40px]'>
                {other.map(elem => (
                    <li key={elem.slug} className='col-span-1 flex flex-col gap-[6px] text-[14px] lg:text-[16px] cursor-pointer' onClick={() => navigateOtherHandler(elem)}>
                        <div className='h-[250px] lg:h-[600px]'>
                            {elem?.product_image?.length > 0 ? (
                                <img src={elem.product_image[0].image} className='w-full h-[250px] lg:h-[600px] object-cover' alt="Изображение недоступно" />
                            ) : (
                                <div className='border border-gray-200 w-full h-full flex items-center justify-center text-bold_text opacity-70'>
                                    <span>Изображение недоступно</span>
                                </div>
                            )}
                        </div>
                        <div className='text-bold_text uppercase font-inter_medium'>
                            <span>{elem.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        )
    )
}

export default memo(Other);