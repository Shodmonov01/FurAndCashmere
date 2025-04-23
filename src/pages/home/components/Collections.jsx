import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../../services/Layout';
import Button from '../../../components/Button';
import { getAllCategories } from '../../../redux/reducers/rootReducer';
import Women from './Women';
// import Other from './Other';
// import Men from './Men';
import Header from '../../../components/Header';
let a = [
    { id: 2, name: "Женская коллекция", active: true },
];

function Collections(props) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [arr, setArr] = useState(a);

    // get all categories
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        props.onGetAllCategories({ signal });

        return () => controller.abort();
    }, []);

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     if (props.collection && props.collection.hasOwnProperty("name") && props.collection.name === "Мужская коллекция") {
    //         let urls = `&id_category=${props.collection.name}`;
    //         props.onGetAllProducts({ signal, selectedId: 1, params: urls });
    //         setData([]);
    //     }

    //     if (props.collection && props.collection.hasOwnProperty("name") && props.collection.name === "Женская коллекция") {
    //         let result = [];
    //         props.categories.forEach(item => {
    //             if (item.name.trim().toLowerCase() === "Женская коллекция".trim().toLowerCase()) {
    //                 if (item?.sub_category?.length > 0) {
    //                     item?.sub_category.forEach(elem => {
    //                         result.push(elem);
    //                     })
    //                 }
    //             }
    //         });
    //         setData(result);
    //     }

    //     return () => controller.abort();
    // }, [props.collection]);

    useEffect(() => {
        if (props.categories?.length > 0) {
            let result = [], result2 = [];
            props.categories.forEach(item => {
                let r = arr.find(el => el.active === true);
                if (item.name.trim().toLowerCase() === r.name.trim().toLowerCase()) {
                    if (item?.sub_category?.length > 0) {
                        item?.sub_category.forEach(elem => {
                            result.push(elem);
                        })
                    }
                }
                if (item.name === "Аксессуары" || item.name === "Интерьер" || item.name === "Мужская коллекция") {
                    result.push(item);
                }

                // if (item.name === "Аксессуары" || item.name === "Интерьер") {
                //     const getData = async () => {
                //         try {
                //             let urls = `&id_category=${item.name}`;
                //             const res = await axiosInstance.get(`/product?page=1&page_size=3${urls}`);
                //             if (res.status === 200 || res.status === 201) {
                //                 result2 = [...res.data?.results];
                //             }
                //         } catch (error) { }
                //     }
                //     getData();
                // }
            });
            setData(result);
            // setOther(result2);
        }
    }, [props.categories]);

    // navigate
    const navigateHandler = value => {
        navigate(`/catalog/${value.slug}`, { state: value });
    }

    // const navigateOtherHandler = value => {
    //     navigate(`/catalog/product/${value.name}`, { state: value });
    // }

    // open catalog
    const openCatalogHandler = () => {
        navigate(`/catalog/all_collection`, { state: { name: "Все коллекции", slug: "", sub_category: [] } });
    }

    return (
        <Layout>
            <div className='font-inter pt-[50px] lg:pt-[150px]'>
                <Header name="Лимитированная коллекция" />
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-[9px] pt-[10px] lg:pt-[26px]'>
                    <Women
                        data={data}
                        navigateHandler={navigateHandler}
                    />

                    {/* <Men
                        data={data}
                        navigateOtherHandler={navigateOtherHandler}
                        categoryData={props.categoryData}
                    /> */}
                </ul>
                <div className='flex justify-center w-full'>
                    <div className='w-full md:w-[234px] mt-[20px] lg:mt-[40px]'>
                        <Button
                            name="Перейти в каталог"
                            classname="w-full md:w-[234px] border-normal_text text-normal_text hover:text-white hover:bg-normal_text"
                            svgClassName="stroke-normal_text"
                            stroke={true}
                            fill="#2B2B2A"
                            onClick={openCatalogHandler}
                        />
                    </div>
                </div>

                {/* <Other
                    other={other}
                    navigateOtherHandler={navigateOtherHandler}
                /> */}
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.rootReducer.categories,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllCategories: value => dispatch(getAllCategories(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Collections));