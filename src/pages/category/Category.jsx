import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import MenuComponent from './components/Menu';
import Sort from './components/Sort';
import down_icon from '../../assets/down_icon.svg';
import Layout from '../../services/Layout';
import MainData from './components/MainData';
import { getAllProducts } from '../../redux/reducers/rootReducer';
import { helmetTitle } from '../../services/options';
import { axiosInstance } from '../../config/config';
let d = [
    {
        id: Math.random().toString(),
        title: "Категория",
        datas: [],
    },
    {
        id: Math.random().toString(),
        title: "Материал",
        datas: [],
    },
    {
        id: Math.random().toString(),
        title: "Размер",
        datas: [],
    },
    {
        id: Math.random().toString(),
        title: "Цвет",
        datas: [],
    },
    {
        id: Math.random().toString(),
        title: "Цена",
        datas: [
            {
                id: Math.random().toString(),
                name: "До 200 000₽",
                min: "200000",
                max: "",
                active: false,
                dropdown: false,
            },
            {
                id: Math.random().toString(),
                name: "200 000 — 250 000₽",
                min: "200000",
                max: "250000",
                active: false,
                dropdown: false,
            },
            {
                id: Math.random().toString(),
                name: "250 000 — 300 000₽",
                min: "250000",
                max: "300000",
                active: false,
                dropdown: false,
            },
            {
                id: Math.random().toString(),
                name: "300 000 — 350 000₽",
                min: "300000",
                max: "350000",
                active: false,
                dropdown: false,
            },
            {
                id: Math.random().toString(),
                name: "350 000 — 400 000₽",
                min: "350000",
                max: "400000",
                active: false,
                dropdown: false,
            },
            {
                id: Math.random().toString(),
                name: "400 000 — 450 000₽",
                min: "400000",
                max: "450000",
                active: false,
                dropdown: false,
            },
        ],
    },
    {
        id: Math.random().toString(),
        title: "Сбросить все фильтры",
        datas: [],
        active: false,
        dropdown: false,
    },
];

function Category(props) {
    const { state } = useLocation();
    const [data, setData] = useState(d);
    const [selected, setSelected] = useState(0);
    const [name, setName] = useState(state?.name);

    // get all colors
    const getAllColors = async (signal) => {
        try {
            const res = await axiosInstance.get("/product/color/", { signal });
            if (res.status === 200 || res.status === 201) return res.data;
        } catch (error) {
            return [];
        }
    }

    // get all materials
    const getAllMaterials = async (signal) => {
        try {
            const res = await axiosInstance.get("/product/material/", { signal })
            if (res.status === 200 || res.status === 201) return res.data;
        } catch (error) {
            return [];
        }
    }

    // get all sizes
    const getAllSizes = async (signal) => {
        try {
            const res = await axiosInstance.get("/product/size/", { signal })
            if (res.status === 200 || res.status === 201) return res.data;
        } catch (error) {
            return [];
        }
    }

    // get all categories
    const getAllCategories = async (signal) => {
        try {
            const res = await axiosInstance.get("/category/", { signal })
            if (res.status === 200 || res.status === 201) return res.data;
        } catch (error) {
            return [];
        }
    }

    // get all data
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const getData = async () => {
            const colors = await getAllColors(signal);
            const materials = await getAllMaterials(signal);
            const sizes = await getAllSizes(signal);
            const categories = await getAllCategories(signal);
            let colorArr = [], materialsArr = [], sizesArr = [], categoriesArr = [];

            if (Array.isArray(colors) && colors?.length > 0) {
                colors.forEach(elem => {
                    colorArr.push({
                        id: elem.slug,
                        name: elem.name,
                        active: false,
                        dropdown: false,
                    });
                })
            }
            if (Array.isArray(materials) && materials?.length > 0) {
                materials.forEach(elem => {
                    materialsArr.push({
                        id: elem.slug,
                        name: elem.name,
                        active: false,
                        dropdown: false,
                    });
                })
            }
            if (Array.isArray(sizes) && sizes?.length > 0) {
                sizes.forEach(elem => {
                    sizesArr.push({
                        id: elem.slug,
                        name: elem.name,
                        active: false,
                        dropdown: false,
                    });
                })
            }
            if (Array.isArray(categories) && categories?.length > 0) {
                categories.forEach(elem => {
                    let res = [];
                    if (elem.sub_category?.length > 0) {
                        elem.sub_category.forEach(e => {
                            res.push({
                                id: e.slug,
                                id_category: e.id_category,
                                name: e.name,
                                active: e.name?.toUpperCase() === state?.name?.toUpperCase() ? true : false,
                            });
                        })
                    }
                    categoriesArr.push({
                        id: elem.slug,
                        name: elem.name,
                        active: elem.name?.toUpperCase() === state?.name?.toUpperCase() ? true : false,
                        dropdown: elem.sub_category?.length > 0,
                        arr: res,
                    });
                })
            }
            setData(prev => {
                return prev.filter(el => {
                    if (el.title === "Категория") el.datas = categoriesArr;
                    if (el.title === "Цвет") el.datas = colorArr;
                    if (el.title === "Материал") el.datas = materialsArr;
                    if (el.title === "Размер") el.datas = sizesArr;
                    return el;
                })
            });

        }
        getData();

        return () => controller.abort();
    }, [state]);

    // checked handler
    const checkedHandler = useCallback((data_index, datas_index, datas_active, value) => {
        setData(prev => {
            return prev.filter((item, index) => {
                if (index === data_index) {
                    item.datas.filter((el, i) => {
                        if (i === datas_index) {
                            el.active = !datas_active;
                            // el.arr.filter((el1, i1) => {
                            //     el1.active = false;
                            // })
                        } else el.active = false;
                        return el;
                    })
                }
                return item;
            })
        });
    }, [data]);

    // checked inline
    const checkedInlineHandler = useCallback((data_index, datas_index, arr_index, arr_active, value) => {
        setData(prev => {
            return prev.filter((item, index) => {
                if (index === data_index) {
                    item.datas.filter((el, i) => {
                        if (i === datas_index) {
                            el.arr.filter((el1, i1) => {
                                if (i1 === arr_index) {
                                    el1.active = !arr_active;
                                } else el1.active = false;
                            })
                            el.active = false;
                        } else el.active = false;
                        return el;
                    })
                }
                return item;
            })
        });
    }, [data]);

    // name change
    useEffect(() => {
        if (data?.length > 0) {
            data.forEach(elem => {
                if (elem.title == "Категория") {
                    elem.datas.forEach(el => {
                        if (el.dropdown) {
                            el.arr.forEach(val => {
                                if (val.active) setName(val?.name);
                            })
                        }
                        if (el.active) setName(el?.name);
                    })
                }
            });
        }
    }, [data]);

    // clear all choosed item
    const clearHandler = useCallback(() => {
        setData(prev => {
            return prev.filter(item => {
                return item.datas.filter(elem => elem.active = false);
            })
        });
    }, [data]);

    // for pagination
    const handlePageClick = useCallback(async (e) => {
        setSelected(e.selected);

        // props.onGetAllProductsWithSlug({ slug: state.slug, selectedId: e.selected + 1 }); //get all data
    }, [selected]);

    // open menu handler
    const openMenuHandler = () => {
        let d = document.querySelector("#menuComponent");
        if (d.style.display === "block") d.style.display = "none";
        else d.style.display = "block";
    }

    // open sort handler
    const openSortHandler = () => {
        let d = document.querySelector("#sortComponent");
        if (d.style.display === "block") d.style.display = "none";
        else d.style.display = "block";
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{state && helmetTitle.find(el => el.header.toLowerCase() === state?.name?.toLowerCase())?.title}</title>
                <meta
                    name="description"
                    content={state && helmetTitle.find(el => el.header.toLowerCase() === state?.name?.toLowerCase())?.desc}
                />
            </Helmet>
            <div className='pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[150px] font-inter text-normal_text'>
                <section className='w-full'>
                    <Layout>
                        <div className='flex flex-col lg:hidden gap-[10px] w-full'>
                            <h2 className='uppercase text-[26px] lg:text-[50px] text-center text-dark-red leading-[31px] lg:leading-[60px] order-first lg:order-none'>
                                {name}
                            </h2>
                            <hr className='w-full h-[1.2px] bg-[#E2E2E2] block lg:hidden' />
                        </div>
                    </Layout>
                    <div className='flex items-end justify-between font-normal relative gap-[10px] lg:gap-0 px-[20px] md:px-[40px] w-full'>
                        <div className='h-[40px] lg:h-[62px] cursor-default flex flex-col items-end lg:mt-5'>
                            <div className='font-inter_medium w-full text-[15px] lg:text-[16px] flex items-center gap-[10px] relative h-full text-dark-red cursor-pointer' onClick={openMenuHandler}>
                                <span>Фильтр</span>
                                <img src={down_icon} alt="no image" className='w-3 group-hover:rotate-180 transition-all' />
                            </div>
                            {/* hidden group-hover:block hidden lg:group-hover:block */}
                            <div className='px-[20px] md:px-[40px] absolute top-[40px] lg:top-[79px] left-0 right-0 bg-main_bgcolor w-full pb-[10px] lg:pb-[20px] pt-[23px] z-10' id="menuComponent" style={{ display: "none" }}>
                                <MenuComponent
                                    selected={selected}
                                    data={data}
                                    checkedHandler={checkedHandler}
                                    checkedInlineHandler={checkedInlineHandler}
                                    clearHandler={clearHandler}
                                    state={state}
                                // state={state}
                                />
                            </div>
                        </div>

                        <h2 className='uppercase text-[26px] text-center lg:text-[50px] text-dark-red leading-[31px] lg:leading-[85px] hidden lg:block w-full'>
                            {name}
                        </h2>

                        <div className='h-[40px] lg:h-[62px] cursor-default lg:mt-5 '>
                            <div className='font-inter_medium text-[15px] lg:text-[16px] flex items-center gap-[10px] relative h-full text-dark-red' onClick={openSortHandler}>
                                <span>Сортировка</span>
                                <img src={down_icon} alt="no image" className='w-3 group-hover:rotate-180 transition-all' />
                            </div>

                            {/* hidden group-hover:block */}
                            <div className='cursor-pointer absolute top-[40px] lg:top-[79px] w-[182px] lg:w-[250px] right-1 lg:right-[40px] bg-main_bgcolor transition-all p-[10px] lg:p-[23px] shadow-md z-10' id="sortComponent" style={{ display: "none" }}>
                                <Sort />
                            </div>
                        </div>
                    </div>
                    <Layout>
                        <hr className='w-full h-[1.2px] bg-[#E2E2E2] hidden lg:block' />
                    </Layout>

                    <Layout>
                        <div className='lg:pt-[27px] font-inter_medium text-[14px] px-[1px]'>
                            <MainData
                                handlePageClick={handlePageClick}
                                selected={selected}
                            />
                        </div>
                    </Layout>
                </section>

            </div>

            {/* footer */}
            <Footer />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllProducts: value => dispatch(getAllProducts(value)),
        // onGetAllColors: value => dispatch(getAllColors(value)),
        // onGetAllMaterials: value => dispatch(getAllMaterials(value)),
        // onGetAllSizes: value => dispatch(getAllSizes(value)),
    }
}

export default connect(null, mapDispatchToProps)(Category);