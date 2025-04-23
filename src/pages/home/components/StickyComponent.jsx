import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function StickyComponent(props) {
    const navigate = useNavigate();

    document.addEventListener("scroll", () => {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            if (document.querySelector("#categoriesGroup1") && document.querySelector("#categoriesGroup2")) {
                document.querySelector("#categoriesGroup1").style.display = "none";
                document.querySelector("#categoriesGroup2").style.display = "flex";
            }
        } else {
            if (document.querySelector("#categoriesGroup1") && document.querySelector("#categoriesGroup2")) {
                document.querySelector("#categoriesGroup1").style.display = "flex";
                document.querySelector("#categoriesGroup2").style.display = "none";
            }
        }
    })

    // navigate
    const navigateHandler = value => {

        if (Array.isArray(value?.sub_category) && value.sub_category?.length > 0) {
            navigate(`/catalog/product/sub_categories/${value.slug}`, { state: value });
        } else {
            navigate(`/catalog/${value.slug}`, { state: value });
        }


        // let findName = getEngName.find(el => el.ru === value.name);
        // navigate(`/catalog/${findName ? findName.en : "collection"}`, { state: value });

        // let a = document.createElement('a');
        // a.href = "#collection";
        // a.click();
        // a.remove();
        // props.changeCollectionHandler(value);
    }

    return (
        <div className='sticky bottom-0 transition-all pt-[20px] lg:pt-[130px] z-10 flex items-center justify-between'>
            <div></div>
            <ul className='text-center flex flex-col gap-[20px] bg-main_bgcolor w-[234px] p-[20px]' style={{ display: "flex" }} id="categoriesGroup1">
                {props.categories?.length > 0 && props.categories.map(item => (
                    (item.name === "Женская коллекция" || item.name === "Мужская коллекция") && (
                        <span key={item.slug} onClick={() => navigateHandler(item)} >
                            <li key={item.slug} className={`relative cursor-pointer flex items-center justify-center gap-1 group`}>
                                <div className='w-[10px] h-[1px] bg-bold_text transition-all group-hover:w-0'></div>
                                <span className=''>{item.name}</span>
                                <div className='w-[10px] h-[1px] bg-bold_text transition-all group-hover:w-0'></div>
                                <div className='group-hover:w-[100px] absolute -bottom-[9px] left-0 right-0 w-[0px] transition-all h-[1px] bg-dark-red m-auto'></div>
                            </li>
                        </span>
                    )
                ))}
            </ul>
            <ul className='text-center flex flex-col w-[234px] bg-[#eeeae5]' id="categoriesGroup2" style={{ display: "none" }}>
                {props.categories?.length > 0 && props.categories.map((item, index) => (
                    (item.name === "Женская коллекция" || item.name === "Мужская коллекция") && (
                        <li key={item.slug} className={`relative cursor-pointer flex items-center justify-center gap-1 h-[50px] p-[3px] transition-all`} onClick={() => navigateHandler(item)}>
                            <div className={`${item.name === "Женская коллекция" ? 'bg-main_bgcolor' : ''} w-full h-full flex items-center justify-center`}>{item.name}</div>
                        </li>
                    )
                ))}
            </ul>
            <div></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.rootReducer.categories,
    }
}

export default connect(mapStateToProps, null)(memo(StickyComponent));