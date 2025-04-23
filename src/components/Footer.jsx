import React, { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'
import Layout from '../services/Layout'
import footer_logo from '../assets/footer_logo.svg'
import footer_logo_mobile from '../assets/footer_logo_mobile.svg'
// import { getEngName } from '../services/options';

function Footer(props) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [openBlog, setOpenBlog] = useState(false)

    // navigate
    const navigateHandler = value => {
        navigate(`/catalog/${value.slug}`, { state: value })

        // let findName = getEngName.find(el => el.ru === value.name);
        // navigate(`/catalog/${findName ? findName.en : "collection"}`, { state: value });
    }

    const navigateOtherHandler = value => {
        navigate(`/catalog/${value.slug}`, { state: value })
    }

    // open handler
    const openHandler = item => {
        let category = document.querySelector(`.${item.slug}`)
        let icon = document.querySelector(`.${item.slug + '_icon'}`)
        if (category.style.display === 'none') {
            category.style.display = 'flex'
            icon.style.rotate = '180deg'
        } else {
            category.style.display = 'none'
            icon.style.rotate = '0deg'
        }
    }

    return (
        <div className='bg-dark-red pt-[30px] lg:pt-[40px] pb-[20px] lg:pb-[22px] text-[14px] font-inter font-normal'>
            <Layout>
                <div className='grid grid-cols-2 lg:grid-cols-4 text-white gap-[20px] lg:gap-[10px]'>
                    <div className='col-span-1'>
                        <ul className='flex flex-col gap-[20px] lg:gap-[10px]'>
                            {props.categories &&
                                props.categories?.length > 0 &&
                                props.categories.map(item =>
                                    item.sub_category?.length > 0 ? (
                                        <li
                                            key={Math.random().toString()}
                                            className='cursor-pointer transition-all flex flex-col gap-[20px] lg:gap-[10px]'
                                        >
                                            <div
                                                className='flex items-center gap-4 hover:text-white/80 transition-all'
                                                onClick={() => openHandler(item)}
                                            >
                                                <span>{item.name}</span>
                                                <IoIosArrowDown className={`${item.slug + '_icon'} transition-all`} />
                                            </div>
                                            <div
                                                className={`flex flex-col gap-[10px] ${item.slug}`}
                                                style={{ display: 'none' }}
                                            >
                                                {item.sub_category?.length > 0 &&
                                                    item.sub_category.map(element => (
                                                        <span
                                                            className='hover:text-white/80 transition-all cursor-pointer'
                                                            key={element.slug}
                                                            onClick={() => navigateOtherHandler(element)}
                                                        >
                                                            {element.name}
                                                        </span>
                                                    ))}
                                            </div>
                                        </li>
                                    ) : (
                                        <li
                                            key={Math.random().toString()}
                                            className='cursor-pointer hover:text-white/80 transition-all'
                                            onClick={() => navigateHandler(item)}
                                        >
                                            {item.name}
                                        </li>
                                    )
                                )}
                        </ul>
                    </div>
                    <div className='col-span-1 hidden lg:block'>
                        <ul className='flex flex-col gap-[20px] lg:gap-[10px] text-right lg:text-left'>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/custom_tailoring'}>Индивидуальный пошив</Link>
                            </li>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/company'}>Компания</Link>
                            </li>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/fabric_excellence'}>Превосходство тканей</Link>
                            </li>
                            {/* <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/exclusivity_of_furs'}>Эксклюзивность мехов</Link>
                            </li> */}
                            <li className='cursor-pointer'>
                                <Link
                                    to={'/exclusivity_of_furs'}
                                    className='hover:text-white/80 transition-all lg:whitespace-normal whitespace-pre-line'
                                >
                                    Эксклюзивность мехов
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* mobile */}
                    <div className='col-span-1 block lg:hidden'>
                        <ul className='flex flex-col gap-[20px] lg:gap-[10px] text-right'>
                            <li className='cursor-pointer transition-all flex flex-col gap-[20px] lg:gap-[10px]'>
                                <div
                                    className='flex items-center justify-end gap-4 hover:text-white/80 transition-all'
                                    onClick={() => setOpenBlog(!openBlog)}
                                >
                                    <span>Блог</span>
                                    <IoIosArrowDown className={`${openBlog ? 'rotate-180' : ''} transition-all`} />
                                </div>
                                {openBlog && (
                                    <div className='flex flex-col gap-[10px]'>
                                        <span className='hover:text-white/80 transition-all cursor-pointer'>
                                            <Link to={'/gallery'}>
                                                Внутри <br /> FUR & CASHMERE
                                            </Link>
                                        </span>
                                        {/* <span className='hover:text-white/80 transition-all cursor-pointer'>
                                            <Link to={'/reviews'}>Отзывы </Link>
                                        </span> */}
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>

                    <div className='col-span-1 hidden lg:block'>
                        <ul className='flex flex-col gap-[20px] lg:gap-[10px]'>
                            <li className='cursor-pointer transition-all flex flex-col gap-[20px] lg:gap-[10px]'>
                                <div
                                    className='flex items-center gap-4 hover:text-white/80 transition-all'
                                    onClick={() => setOpenBlog(!openBlog)}
                                >
                                    <span>Блог</span>
                                    <IoIosArrowDown className={`${openBlog ? 'rotate-180' : ''} transition-all`} />
                                </div>
                                {openBlog && (
                                    <div className='flex flex-col gap-[10px]'>
                                        <span className='hover:text-white/80 transition-all cursor-pointer w-full'>
                                            <Link to={'/gallery'} className='w-full'>
                                                Внутри FUR & CASHMERE
                                            </Link>
                                        </span>
                                        {/* <span className='hover:text-white/80 transition-all cursor-pointer w-full'>
                                            <Link to={'/reviews'} className='w-full'>
                                                Отзывы{' '}
                                            </Link>
                                        </span> */}
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* mobile */}
                    <div className='col-span-1 block lg:hidden'>
                        <ul className='flex flex-col gap-[20px] lg:gap-[10px] text-left'>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/custom_tailoring'} className='hidden lg:block'>
                                    Индивидуальный пошив
                                </Link>
                                <Link to={'/custom_tailoring'} className='block lg:hidden'>
                                    Индивидуальный <br /> пошив
                                </Link>
                            </li>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/company'}>Компания</Link>
                            </li>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/fabric_excellence'} className='hidden lg:block'>
                                    Превосходство тканей
                                </Link>
                                <Link to={'/fabric_excellence'} className='block lg:hidden'>
                                    Превосходство <br /> тканей
                                </Link>
                            </li>
                            {/* <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <Link to={'/exclusivity_of_furs'} className='hidden lg:block'>
                                    Эксклюзивность мехов
                                </Link>
                                <Link to={'/exclusivity_of_furs'} className='block lg:hidden'>
                                    Эксклюзивность <br /> мехов
                                </Link>
                            </li> */}
                            <li className='cursor-pointer'>
                                <Link
                                    to={'/exclusivity_of_furs'}
                                    className='hover:text-white/80 transition-all lg:whitespace-normal whitespace-pre-line'
                                >
                                    Эксклюзивность мехов
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={`col-span-1 ${openBlog ? '-mt-[30px]' : '-mt-[120px]'}  lg:mt-auto`}>
                        <ul className='flex flex-col gap-[20px] lg:gap-[10px] text-right'>
                            <li className='cursor-pointer hover:text-white/80 transition-all hidden lg:block'>
                                Санкт Петербург, Петроградский район, м. Горьковская
                            </li>
                            <li className='cursor-pointer hover:text-white/80 transition-all block lg:hidden'>
                                Санкт-Петербург, Петроградский район, <br /> м. Горьковская
                            </li>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                По предварительной записи
                            </li>
                            <li className='cursor-pointer hover:text-white/80 transition-all'>
                                <a href='mailto:fur.cashmere@mail.ru'>fur.cashmere@mail.ru</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 items-center lg:items-end pt-[40px] text-white/50'>
                    <span className='col-span-1 text-center lg:text-left'>Политика конфиденциальности</span>
                    <div className='flex justify-center order-first lg:order-none pb-[30px] lg:pb-0'>
                        <img src={footer_logo} alt='no image' className='col-span-1 hidden lg:block' />
                        <img src={footer_logo_mobile} alt='no image' className='col-span-1 block lg:hidden' />
                    </div>
                    <span className='col-span-1 text-center lg:text-right pt-[20px] lg:pt-0'>
                        Пользовательское соглашение
                    </span>
                </div>
            </Layout>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.rootReducer.categories
    }
}

export default connect(mapStateToProps, null)(memo(Footer))
