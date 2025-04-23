import React, { memo } from 'react';

function Men(props) {
    const { data, navigateOtherHandler } = props;

    return (
        data?.length === 0 && props.categoryData && props.categoryData.hasOwnProperty("results") && Array.isArray(props.categoryData?.results) && props.categoryData.results?.length > 0 ? props.categoryData.results.map(elem => (
            <li key={elem.slug} className='col-span-1 flex flex-col gap-[6px] text-[14px] lg:text-[16px]  cursor-pointer' onClick={() => navigateOtherHandler(elem)}>
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
        )) : (
            data?.length === 0 && (
                <div className='text-bold_text text-[14px] font-inter_medium flex items-center justify-center w-full col-span-3'>
                    <span>Информация не найдена.</span>
                </div>
            )
        )
    )
}

export default memo(Men);