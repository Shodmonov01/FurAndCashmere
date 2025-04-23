import React, { memo, useCallback, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dialog, DialogPanel } from '@headlessui/react';
import down from '../assets/down.svg';
import Messangers from './Messangers';
const d = [
    {
        id: 1,
        name: "О бренде",
        path: "",
        open: false,
        arr: [
            {
                id: 2,
                name: "Компания",
                path: "/company",
            },
            {
                id: 3,
                name: "Превосходство тканей",
                path: "/fabric_excellence",
            },
            {
                id: 4,
                name: "Эксклюзивность мехов",
                path: "/exclusivity_of_furs",
            },
        ],
    },
];

let d2 = [
    {
        id: 5,
        name: "Индивидуальный пошив",
        path: "/custom_tailoring",
        open: false,
        arr: [],
    },
    {
        id: 6,
        name: "Блог",
        path: "",
        open: false,
        arr: [
            {
                id: 7,
                name: "Внутри FUR & CASHMERE",
                path: "/gallery",
            },
            // {
            //     id: 8,
            //     name: "Вопросы ответы",
            //     path: "/question_answer",
            // },
            // {
            //     id: 9,
            //     name: "Отзывы",
            //     path: "/reviews",
            // },
        ],
    },
];

function Sidebar(props) {
    const navigate = useNavigate();
    const [data, setData] = useState(d);
    const [data2, setData2] = useState(d2);
    const [data3, setData3] = useState([]);

    useEffect(() => {
        if (props.categories?.length > 0) {
            let arr = [];
            props.categories.forEach(elem => {
                arr.push({
                    slug: elem.slug,
                    name: elem.name,
                    path: elem.sub_category?.length > 0 ? "" : "/catalog",
                    open: false,
                    arr: elem.sub_category,
                },);
            })
            setData3(arr);
        }
    }, [props.categories]);

    // open menu
    const openMenuHandler = useCallback((index, isOpen) => {
        setData(prev => {
            return prev.filter((el, i) => {
                if (i === index) {
                    el.open = !isOpen;
                }
                return el;
            })
        })
    }, []);

    // open menu
    const openMenu2Handler = useCallback((index, isOpen) => {
        setData2(prev => {
            return prev.filter((el, i) => {
                if (i === index) {
                    el.open = !isOpen;
                }
                return el;
            })
        })
    }, []);

    // open menu
    const openMenu3Handler = useCallback((index, isOpen) => {
        setData3(prev => {
            return prev.filter((el, i) => {
                if (i === index) {
                    el.open = !isOpen;
                }
                return el;
            })
        })
    }, []);

    // navigate
    const navigateHandler = value => {
        navigate(`/catalog/${value.name}`, { state: value });
        props.close(false);
    }

    return (
        <Dialog open={props.open} onClose={props.close} __demoMode className="relative z-10">
            {/* <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            /> */}

            <div className="fixed inset-0 overflow-hidden max-w-[2048px] m-auto z-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none absolute bottom-0 right-0 top-[50px] flex w-full sm:w-[367px] dialogPanel">
                        <DialogPanel
                            transition
                            className="pointer-events-auto transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-400 w-full"
                        >
                            <div className="h-full overflow-y-scroll bg-main_bgcolor py-[30px]">
                                <div className="relative px-[20px] lg:px-[80px] h-full">
                                    <div className='flex flex-col justify-between gap-[20px] h-full text-[15px] font-inter text-dark-red'>
                                        <ul className='flex flex-col items-center gap-[20px]'>
                                            {data?.length > 0 && data.map((elem, index) => (
                                                <li key={elem.id} className='cursor-pointer w-full flex flex-col'>
                                                    {elem.arr?.length > 0 ? (
                                                        <div className='flex items-center justify-between' onClick={() => openMenuHandler(index, elem.open)}>
                                                            <div className='relative'>
                                                                <h2>{elem.name}</h2>
                                                                {elem.open && (
                                                                    <div className='absolute bottom-0.5 left-0 right-0 h-[1.5px] bg-dark-red'></div>
                                                                )}
                                                            </div>
                                                            <img src={down} alt="no image" />
                                                        </div>
                                                    ) : (
                                                        <NavLink
                                                            to={elem.path}
                                                            key={elem.id}
                                                            onClick={() => props.close(false)}
                                                            className={({ isActive, isPending }) =>
                                                                isActive ? `active text-dark-red` : `text-dark-red`
                                                            }
                                                        >
                                                            <span>{elem.name}</span>
                                                        </NavLink>
                                                    )}
                                                    <div className='flex flex-col gap-[20px]'>
                                                        {elem.open && elem.arr?.length > 0 && elem.arr.map((item, i) => (
                                                            <NavLink
                                                                key={item.id}
                                                                to={item.path}
                                                                onClick={() => props.close(false)}
                                                                className={({ isActive, isPending }) =>
                                                                    isActive ? `active text-[#2b2b2a] ${i === 0 && 'pt-[20px]'}` : `text-[#2b2b2a] ${i === 0 && 'pt-[20px]'}`
                                                                }
                                                            >
                                                                <span>{item.name}</span>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}

                                            {data3?.length > 0 && data3.map((elem, index) => (
                                                <li key={elem.slug} className='cursor-pointer w-full flex flex-col'>
                                                    {elem.arr?.length > 0 ? (
                                                        <div className='flex items-center justify-between' onClick={() => openMenu3Handler(index, elem.open)}>
                                                            <div className='relative'>
                                                                <h2>{elem.name}</h2>
                                                                {elem.open && (
                                                                    <div className='absolute bottom-0.5 left-0 right-0 h-[1.5px] bg-dark-red'></div>
                                                                )}
                                                            </div>
                                                            <img src={down} alt="no image" />
                                                        </div>
                                                    ) : (
                                                        <div
                                                            onClick={() => navigateHandler(elem)}
                                                            className={({ isActive, isPending }) =>
                                                                isActive ? `active text-dark-red` : `text-dark-red`
                                                            }
                                                        >
                                                            <span>{elem.name}</span>
                                                        </div>
                                                    )}
                                                    <div className='flex flex-col gap-[20px] '>
                                                        {elem.open && elem.arr?.length > 0 && elem.arr.map((item, i) => (
                                                            <span
                                                                key={item.slug}
                                                                onClick={() => navigateHandler(item)}
                                                                className={`active text-[#2b2b2a] ${i === 0 && 'pt-[20px]'}`}
                                                            >
                                                                <span>{item.name}</span>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}

                                            {data2?.length > 0 && data2.map((elem, index) => (
                                                <li key={elem.id} className='cursor-pointer w-full flex flex-col'>
                                                    {elem.arr?.length > 0 ? (
                                                        <div className='flex items-center justify-between' onClick={() => openMenu2Handler(index, elem.open)}>
                                                            <div className='relative'>
                                                                <h2>{elem.name}</h2>
                                                                {elem.open && (
                                                                    <div className='absolute bottom-0.5 left-0 right-0 h-[1.5px] bg-dark-red'></div>
                                                                )}
                                                            </div>
                                                            <img src={down} alt="no image" />
                                                        </div>
                                                    ) : (
                                                        <NavLink
                                                            key={elem.id}
                                                            onClick={() => props.close(false)}
                                                            to={elem.path}
                                                            className={({ isActive, isPending }) =>
                                                                isActive ? `active text-dark-red` : `text-dark-red`
                                                            }
                                                        >
                                                            <span>{elem.name}</span>
                                                        </NavLink>
                                                    )}
                                                    <div className='flex flex-col gap-[20px]'>
                                                        {elem.open && elem.arr?.length > 0 && elem.arr.map((item, i) => (
                                                            <NavLink
                                                                to={item.path}
                                                                key={item.id}
                                                                onClick={() => props.close(false)}
                                                                className={({ isActive, isPending }) =>
                                                                    isActive ? `active text-[#2b2b2a] ${i === 0 && 'pt-[20px]'}` : `text-[#2b2b2a] ${i === 0 && 'pt-[20px]'}`
                                                                }
                                                            >
                                                                <span>{item.name}</span>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <ul className='flex lg:flex-col flex-wrap justify-center gap-[15px] lg:gap-[10px]'>
                                            <Messangers
                                                phone="text-dark-red"
                                                other="text-dark-red"
                                            />
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.rootReducer.categories,
    }
}

export default connect(mapStateToProps, null)(memo(Sidebar));