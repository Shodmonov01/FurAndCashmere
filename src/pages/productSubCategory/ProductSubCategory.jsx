import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../services/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProductSubCategory.css";

function ProductSubCategory(props) {
  const { state } = useLocation();
  const navigate = useNavigate();

  // navigate
  const navigateHandler = (value) => {
    navigate(`/catalog/${value.slug}`, { state: value });
  };

  return (
    <>
      <Layout>
        <div className="font-inter pt-[40px] lg:pt-[50px] pb-[50px] lg:pb-[100px]">
          <Header name={state?.name} />

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[9px] pt-[10px] lg:pt-[26px]">
            {state &&
            state.hasOwnProperty("sub_category") &&
            state.sub_category?.length > 0 ? (
              state.sub_category.map((elem, index) => (
                <li
                  key={elem.slug}
                  className={`col-span-1 flex flex-col gap-[6px] text-[14px] lg:text-[16px] cursor-pointer ${
                    (index + 1) % 5 === 0
                      ? "grid-item-start-row lg:grid-item-start-row-lg"
                      : "" // Центрирование каждой 5-й карточки
                  } ${index === 4 ? "grid-item-start-row-mobile" : ""}`} // На мобильных центрируем каждую 5-ю карточку
                  onClick={() => navigateHandler(elem)}
                >
                  <div className="h-[200px] lg:h-[calc(100vh_-_200px)] xl:h-[calc(100vh_-_150px)] w-full ">
                    {elem?.image ? (
                      <img
                        src={elem.image}
                        className="w-full h-[200px] lg:h-[calc(100vh_-_200px)] xl:h-[calc(100vh_-_150px)] object-cover"
                        alt="Изображение недоступно"
                      />
                    ) : (
                      <div className="border border-gray-200 w-full h-full flex items-center justify-center text-bold_text opacity-70">
                        <span>Изображение недоступно</span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`text-bold_text uppercase font-inter_medium ${
                      (index + 1) % 5 === 0 ? "hidden" : "" // Скрытие текста для каждой 5-й карточки
                    }`}
                  >
                    <span>{elem.name}</span>
                  </div>
                </li>
              ))
            ) : (
              <div className="text-bold_text text-[14px] font-inter_medium flex items-center justify-center w-full col-span-3">
                <span>Информация не найдена.</span>
              </div>
            )}
          </ul>
        </div>
      </Layout>

      {/* footer */}
      <Footer />
    </>
  );
}

export default ProductSubCategory;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Layout from '../../services/Layout';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// function ProductSubCategory(props) {
//     const { state } = useLocation();
//     const navigate = useNavigate();

//     // navigate
//     const navigateHandler = value => {
//         navigate(`/catalog/${value.slug}`, { state: value });
//     }

//     return (
//         <>
//             <Layout>
//                 <div className='font-inter pt-[40px] lg:pt-[50px] pb-[50px] lg:pb-[100px]'>
//                     <Header name={state?.name} />
//                     <ul className='grid grid-cols-2 lg:grid-cols-3 gap-[9px] pt-[10px] lg:pt-[26px]'>
//                         {state && state.hasOwnProperty("sub_category") && state.sub_category?.length > 0 ? state.sub_category.map(elem => (
//                             <li key={elem.slug} className='col-span-1 flex flex-col gap-[6px] text-[14px] lg:text-[16px] cursor-pointer' onClick={() => navigateHandler(elem)}>
//                                 <div className='h-[200px] lg:h-[calc(100vh_-_200px)] xl:h-[calc(100vh_-_150px)]'>
//                                     {elem?.image ? (
//                                         <img src={elem.image} className='w-full h-[200px] lg:h-[calc(100vh_-_200px)] xl:h-[calc(100vh_-_150px)] object-cover' alt="Изображение недоступно" />
//                                     ) : (
//                                         <div className='border border-gray-200 w-full h-full flex items-center justify-center text-bold_text opacity-70'>
//                                             <span>Изображение недоступно</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div className='text-bold_text uppercase font-inter_medium'>
//                                     <span>{elem.name}</span>
//                                 </div>
//                             </li>
//                         )) : (
//                             <div className='text-bold_text text-[14px] font-inter_medium flex items-center justify-center w-full col-span-3'>
//                                 <span>Информация не найдена.</span>
//                             </div>
//                         )}
//                     </ul>
//                 </div>
//             </Layout>

//             {/* footer */}
//             <Footer />
//         </>
//     )
// }

// export default ProductSubCategory;