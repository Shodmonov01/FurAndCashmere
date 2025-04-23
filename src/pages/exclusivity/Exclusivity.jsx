import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../services/Layout";
import Footer from "../../components/Footer";
import ContactMap from "../../components/ContactMap";
import exv1 from "../../assets/exv1.png";
import exv1_mobile from "../../assets/exv1_mobile.png";
import exv2 from "../../assets/exv2.png";
import exv2_mobile from "../../assets/exv2_mobile.png";
import vid from "../../assets/vid.mp4";
// import exv4 from "../../assets/exv4.png";
// import exv4_mobile from "../../assets/exv4_mobile.png";
// import exv5 from "../../assets/exv5.png";
// import exv5_mobile from "../../assets/exv5_mobile.png";
// import exv3 from "../../assets/exv3.png";
// import exv3_mobile from "../../assets/exv3_mobile.png";
// import exv6 from "../../assets/exv6.png";
// import exv6_mobile from "../../assets/exv6_mobile.png";
// import exv7 from "../../assets/exv7.png";
// import exv7_mobile from "../../assets/exv7_mobile.png";

function Exclusivity() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Элитные меха в FUR&CASHMERE</title>
        <meta
          name="description"
          content="FUR&CASHMERE предлагает коллекцию элитных мехов, которые отвечают самым высоким стандартам качества. Оставляйте заявку на сайте"
        />
      </Helmet>
      <Layout>
        <div className="font-inter pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[100px] font-normal">
          {/* row 1 */}
          <div>
            <div className="text-center w-full lg:w-[70%] m-auto">
              <h2 className="leading-[31px] lg:leading-[60px] text-[26px] lg:text-[50px] uppercase text-dark-red">
                Эксклюзивность мехов
              </h2>
            </div>

            <div className="flex flex-col gap-[10px] lg:gap-[30px]">
              <div className="w-full lg:w-[50%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-center">
                <ul>
                  <li>
                    FUR & CASHMERE - дом элитных мехов, наследия и отточенного
                    скорняжного мастерства.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={exv1}
                  alt="no image"
                  className="w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block"
                />
                <img
                  src={exv1_mobile}
                  alt="no image"
                  className="w-full block lg:hidden"
                />
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div className="pt-[50px] lg:pt-[80px]">
            <div className="flex flex-col gap-[10px] lg:gap-[30px]">
              <div className="w-full lg:w-[50%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-center">
                <ul>
                  <li>
                    Для создания коллекций и исполнения Ваших заказов FUR CASHMERE приобретает сырье на крупнейших мировых аукционах SOJUZPUSHNINA , Kopenhagen Fur , Fur Harvesters , Saga Fur и др.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={exv2}
                  alt="no image"
                  className="w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block"
                />
                <img
                  src={exv2_mobile}
                  alt="no image"
                  className="w-full block lg:hidden"
                />
              </div>
            </div>
          </div>

          {/* row 3 */}
          <div className="pt-[50px] lg:pt-[80px] pb-[50px] lg:pb-[80px]">
            <div className="flex flex-col gap-[10px] lg:gap-[30px]">
              <div className="w-full lg:w-[50%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-center">
                <ul>
                  <li>
                    Обладая экспертностью, технологи компании совместно с
                    европейскими коллегами отбирают мех высших качественных
                    характеристик.
                  </li>
                </ul>
              </div>
              <div className="w-full h-auto lg:h-[calc(100vh_-_67px)] xxxl:h-auto">
                <video autoPlay muted loop id="myVideo" className='w-full h-full object-cover'>
                  <source src={vid} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
                {/* <img
                  src={exv3}
                  alt="no image"
                  className="w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block"
                />
                <img
                  src={exv3_mobile}
                  alt="no image"
                  className="w-full block lg:hidden"
                /> */}
              </div>
            </div>
          </div>

          {/* row 4 */}
          {/* <div className="pt-[10px]">
            <div className="flex flex-col gap-[10px] lg:gap-[30px]">
              <div>
                <img
                  src={exv4}
                  alt="no image"
                  className="w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block"
                />
                <img
                  src={exv4_mobile}
                  alt="no image"
                  className="w-full block lg:hidden"
                />
              </div>
            </div>
          </div> */}

          {/* row 5 */}
          {/* <div className="pt-[10px] pb-[50px] lg:pb-[80px]">
            <div className="flex flex-col gap-[10px] lg:gap-[30px]">
              <div>
                <img
                  src={exv5}
                  alt="no image"
                  className="w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block"
                />
                <img
                  src={exv5_mobile}
                  alt="no image"
                  className="w-full block lg:hidden"
                />
              </div>
            </div>
          </div> */}

          {/* contact */}
          <ContactMap />
        </div>
      </Layout>

      {/* footer */}
      <Footer />
    </>
  );
}

export default Exclusivity;
