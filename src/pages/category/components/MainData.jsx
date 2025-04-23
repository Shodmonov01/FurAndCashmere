import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "../../../components/Loading";
import previous from "../../../assets/previous.svg";

function MainData(props) {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (
      props.categoryData &&
      props.categoryData.hasOwnProperty("results") &&
      props.categoryData?.results?.length > 0
    ) {
      let d = props.categoryData.results,
        r1 = [];
      let active_false = d.filter((elem) => elem.is_active === false);
      let active_true = d.filter((elem) => elem.is_active === true);
      for (let i = 0; i < active_false.length; i++) {
        if (i === 4 || i === 8) {
          if (active_true.length > 0) {
            r1.push(active_true[0]);
            active_true = active_true.filter((el, i) => i !== 0);
          }
        }
        r1.push(active_false[i]);
      }
      setDatas(r1);
    } else setDatas([]);
  }, [props.categoryData]);

  // navigate
  const navigateHandler = (value) => {
    // console.log(value);

    navigate(`/catalog/product/${value.id}`, { state: value });
  };

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[8px]">
        {datas?.length > 0 && datas.map((item) =>
          !item.is_active ? (
            <div
              key={Math.random().toString()}
              className="col-span-1 flex flex-col gap-[10px] cursor-pointer"
              onClick={() => navigateHandler(item)}
            >
              {item.product_image?.length > 0 ? (
                <LazyLoadImage
                  alt={item?.name}
                  // height={image.height}
                  src={item.product_image[0].image} // use normal <img> attributes as props
                  // width={image.width}
                  effect="blur"
                  // wrapperProps={{
                  //     // If you need to, you can tweak the effect transition using the wrapper style.
                  //     style: { transitionDelay: "1s" },
                  // }}
                  className="w-full h-[300px] lg:h-[394px] xxl:h-[400px] xxxl:h-[600px] object-cover"
                />
              ) : (
                <div className="w-full h-[250px] lg:h-[394px] border flex items-center justify-center">
                  <span className="text-[12px] text-gray-400">
                    Фото не доступны
                  </span>
                </div>
              )}
              {/* <img src={item.product_image[0].image} alt="no image" className='w-full h-[250px] lg:h-[394px] lg:object-cover' /> */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[5px] lg:gap-0 justify-between font-inter_medium">
                <span className="text-bold_text uppercase">{item.name}</span>
                {item.price && (
                  <span className="text-normal_text">
                    {new Intl.NumberFormat("en-US", { style: "decimal", }).format(item.price)}₽
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div
              key={Math.random().toString()}
              className="col-span-2 lg:col-span-4 flex flex-col gap-[10px] cursor-pointer py-[30px]"
              onClick={() => navigateHandler(item)}
            >
              {item.product_image?.length > 0 ? (
                <LazyLoadImage
                  alt={item?.name}
                  // height={image.height}
                  src={item.product_image[0].image} // use normal <img> attributes as props
                  // width={image.width}
                  effect="blur"
                  // wrapperProps={{
                  //     // If you need to, you can tweak the effect transition using the wrapper style.
                  //     style: { transitionDelay: "1s" },
                  // }}
                  className="w-full lg:w-[40%] h-[calc(100vh_-_67px)] object-cover xxxl:h-auto m-auto"
                />
              ) : (
                <div className="w-full h-[250px] lg:h-[394px] border flex items-center justify-center">
                  <span className="text-[12px] text-gray-400">
                    Фото не доступны
                  </span>
                </div>
              )}
              {/* <img src={item.product_image[0].image} alt="no image" className='w-full h-[250px] lg:h-[394px] lg:object-cover' /> */}
              {/* <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[5px] lg:gap-0 justify-between font-inter_medium'>
                                <span className='text-bold_text uppercase'>{item.name}</span>
                                <span className='text-normal_text'>{new Intl.NumberFormat("en-US", { style: "decimal" }).format(item.price)}₽</span>
                            </div> */}
            </div>
          )
        )}
      </div>

      {/* pagination */}
      <div className="flex items-center justify-center">
        {datas?.length > 0 && props.categoryData && props.categoryData.hasOwnProperty("count") && (
          <div className="pt-[50px]">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<img src={previous} className="rotate-180" />}
              onPageChange={props.handlePageClick}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              pageCount={Math.ceil(props.categoryData.count / 14)}
              previousLabel={<img src={previous} />}
              className="paginationUL font-inter_semibold text-[#7B3F00]"
              activeClassName="active text-[#FFFFFF] bg-[#7B3F00]"
              pageClassName="pageItem text-[#7B3F00] hover:text-[#5A2C00]"
              previousClassName="prevItem text-[#7B3F00] hover:text-[#5A2C00]"
              nextClassName="nextItem text-[#7B3F00] hover:text-[#5A2C00]"
              disabledClassName="disabled text-[#A67F5B]"
              forcePage={props?.selected}
            />
          </div>
        )}
      </div>

      {!props.categoryData?.results
        ? props.loading && <Loading />
        : props.categoryData?.results?.length === 0 && (
          <div className="text-xs text-center py-2">
            Не найдено никакой информации, соответствующей вашему запросу.
          </div>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categoryData: state.rootReducer.categoryData,
    loading: state.rootReducer.loading,
  };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onGetAllProducts: value => dispatch(getAllProducts(value)),
//     }
// }

export default connect(mapStateToProps, null)(memo(MainData));
