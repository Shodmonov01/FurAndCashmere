import React, { memo, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../../services/options';
import { getAllProducts } from '../../../redux/reducers/rootReducer';
import close_extra from '../../../assets/close_extra.svg';
import close from '../../../assets/close.svg';

function MenuComponent(props) {
    const { data } = props;

    // umumiy filter so'rovi
    useEffect(() => {
        if (data?.length > 0) {

            let urls = "";
            data.forEach(elem => {
                let title = getCategory(elem);
                elem.datas?.length > 0 && elem.datas.forEach(item => {
                    if (title !== "price") {
                        item.dropdown && item.arr?.length > 0 && item.arr.forEach(el => {
                            if (el.active) urls += "&" + "id_sub_category" + "=" + el.id;
                        })
                        if (!item.dropdown && item.active) {
                            urls += "&" + title + "=" + item.id;
                        }
                    } else {
                        if (!item.dropdown && item.active) {
                            urls += "&price_min=" + item.min + "&price_max=" + item.max;
                        }
                    }
                })
            });
            props.onGetAllProducts({ selectedId: props.selected + 1, params: urls });
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }, [data, props.selected]);

    // checked item
    const checkedHandler = (data_index, datas_index, datas_active, value) => {
        props.checkedHandler(data_index, datas_index, datas_active, value);
    };

    // checked inline
    const checkedInlineHandler = (data_index, datas_index, arr_index, arr_active, value) => {
        props.checkedInlineHandler(data_index, datas_index, arr_index, arr_active, value);
    };

    // clear all choosed item
    const clearHandler = () => {
        props.clearHandler();
    };

    return (
        <div className='w-full font-inter font-normal text-[14px] overflow-y-scroll'>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-[20px]'>
                {data?.length > 0 && data.map((item, index) => (
                    <div key={item.id} className={`col-span-1 ${index === data?.length - 1 && 'flex flex-col items-center lg:items-end w-full col-span-2 lg:col-span-1 justify-center lg:justify-start'} ${(index % 2 == 1 && index !== data?.length - 1) && "w-[50%] lg:w-full ml-auto"}`}>
                        <span className={`${index !== data?.length - 1 ? 'text-dark-red border-b-[1px] border-dark-red' : 'text-normal_text flex justify-center lg:justify-end gap-[10px] lg:gap-[10px] cursor-pointer hover:text-dark-red w-full text-center'}`} onClick={clearHandler}>
                            {item.title}
                            {index === data?.length - 1 && <img src={close} alt='no image' className='w-4' />}
                        </span>
                        <ul className={`flex flex-col gap-[10px] lg:gap-[20px] pt-[20px] lg:pt-[40px]`}>
                            {item.datas?.length > 0 && item.datas.map((elem, i) => (
                                <li key={elem.id}>
                                    <div className={`hover:text-dark-red cursor-pointer transition-all flex items-center gap-[10px] ${elem.active && 'text-dark-red'}`} onClick={() => checkedHandler(index, i, elem.active, elem)}>
                                        <p className='flex items-center gap-[6px]'>
                                            <span className={`${(elem.dropdown && elem.active) ? 'font-normal underline text-bold_text' : ''}`}>{elem.name}</span>
                                            {elem.dropdown && (
                                                <svg className={`mt-0.5 ${elem.active ? 'rotate-[180deg]' : 'rotate-[0deg]'}`} width="10.5" height="7.060547" viewBox="0 0 12.707 7.06055" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <desc>
                                                        Created with Pixso.
                                                    </desc>
                                                    <defs />
                                                    <path id="Vector 24" d="M12.35 0.35L6.35 6.35L0.35 0.35" stroke="#2B2B2A" strokeOpacity="1.000000" strokeWidth="1.000000" />
                                                </svg>
                                            )}
                                        </p>
                                        {(!elem.dropdown && elem.active) && (
                                            <img src={close_extra} alt="no image" />
                                        )}
                                    </div>

                                    {elem.dropdown && elem.active && elem.arr?.length > 0 && elem.arr.map((el, k) => (
                                        <div key={el.id} className={`hover:text-dark-red cursor-pointer transition-all flex pt-[10px] lg:pt-[20px] items-center gap-[10px] ${el.active && 'text-dark-red'}`} onClick={() => checkedInlineHandler(index, i, k, el.active, el)}>
                                            <p className='flex items-center gap-[6px]'>
                                                <span>{el.name}</span>
                                            </p>
                                            {el.active && (
                                                <img src={close_extra} alt="no image" />
                                            )}
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllProducts: value => dispatch(getAllProducts(value)),
    }
}

export default connect(null, mapDispatchToProps)(memo(MenuComponent));