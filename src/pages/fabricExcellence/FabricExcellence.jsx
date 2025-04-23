import React from 'react'
import { Helmet } from 'react-helmet';
import ContactMap from '../../components/ContactMap';
import Layout from '../../services/Layout';
import Footer from '../../components/Footer';
import tkan2 from '../../assets/tkan2.png';
import tkan2_mobile from '../../assets/tkan2_mobile.png';
import tkan4 from '../../assets/tkan4.png';
import tkan4_mobile from '../../assets/tkan4_mobile.png';
import tkan5 from '../../assets/tkan5.png';
import tkan5_mobile from '../../assets/tkan5_mobile.png';
import tkan7 from '../../assets/tkan7.png';
import tkan7_mobile from '../../assets/tkan7_mobile.png';
import tkan8 from '../../assets/tkan8.png';
import tkan8_mobile from '../../assets/tkan8_mobile.png';
import tkan9 from '../../assets/tkan9.jpg';
import tkan9_mobile from '../../assets/tkan9_mobile.jpg';

function FabricExcellence() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Качественные материалы в FUR&CASHMERE</title>
                <meta
                    name="description"
                    content="В коллекции FUR & CASHMERE представлены регулярные и лимитированные позиции кашемира. Оставляйте заявку на сайте"
                />
            </Helmet>

            <Layout>
                <div className='font-inter pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[100px] font-normal'>
                    {/* row 1 */}
                    <div>
                        <div className='text-center w-full lg:w-[70%] m-auto'>
                            <h2 className='leading-[31px] lg:leading-[60px] text-[26px] lg:text-[50px] uppercase text-dark-red hidden lg:block'>Превосходство тканей</h2>
                            <h2 className='leading-[31px] lg:leading-[60px] text-[26px] lg:text-[50px] uppercase text-dark-red block lg:hidden'>Превосходство <br /> тканей</h2>
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className='pt-[50px] lg:pt-[100px]'>
                        <div className='text-center w-full lg:w-[70%] m-auto'>
                            <h2 className='leading-[31px] lg:leading-[48px] text-[26px] lg:text-[40px] uppercase text-dark-red'>FUR & CASHMERE закупает ткани на самых известных европейских мануфактурах</h2>
                        </div>

                        <div className='flex flex-col gap-[10px] lg:gap-[30px]'>
                            <div className='w-full lg:w-[50%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-center'>
                                <ul>
                                    <li>
                                        В коллекции FUR & CASHMERE представлены регулярные и лимитированные позиции кашемира.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src={tkan2} alt="no image" className='w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block' />
                                <img src={tkan2_mobile} alt="no image" className='w-full block lg:hidden' />
                            </div>
                        </div>
                    </div>

                    {/* row 3 */}
                    <div className='pt-[50px] lg:pt-[100px]'>
                        <div className='text-center w-full lg:w-[70%] m-auto'>
                            <h2 className='leading-[31px] lg:leading-[48px] text-[26px] lg:text-[40px] uppercase text-dark-red'>
                                Кашемир - олицетворение особой мягкости и роскоши
                            </h2>
                        </div>

                        <div className='flex flex-col gap-[10px] lg:gap-[30px]'>
                            <div className='w-full lg:w-[50%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-center'>
                                <ul>
                                    <li>
                                        Кашемир - редкое и драгоценное волокно, полученное из кашемировых коз, обитающих в горных регионах Азии.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src={tkan8} alt="no image" className='w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block' />
                                <img src={tkan8_mobile} alt="no image" className='w-full block lg:hidden' />
                            </div>
                        </div>
                    </div>

                    {/* row 4 */}
                    <div className='pt-[50px] lg:pt-[100px]'>
                        <div className='text-center w-full lg:w-[70%] m-auto'>
                            <h2 className='leading-[31px] lg:leading-[48px] text-[26px] lg:text-[40px] uppercase text-dark-red'>Шерсть мериноса</h2>
                        </div>

                        <div className='flex flex-col gap-[10px] lg:gap-[30px]'>
                            <div className='w-full lg:w-[50%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-center'>
                                <ul className='flex flex-col gap-[6px] lg:gap-[10px]'>
                                    <li>
                                        Шерсть мериноса - самая ценная. Невероятно тонкая, обладает исключительными свойствами.
                                    </li>
                                    <li>
                                        Поступает из специально отобранных стай овец мериноса Австралии и Новой Зеландии.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src={tkan4} alt="no image" className='w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block' />
                                <img src={tkan4_mobile} alt="no image" className='w-full block lg:hidden' />
                            </div>
                        </div>
                    </div>

                    {/* row 5 */}
                    <div className='pt-[50px] lg:pt-[100px]'>
                        <div className='text-center w-full lg:w-[70%] m-auto'>
                            <h2 className='leading-[31px] lg:leading-[48px] text-[26px] lg:text-[40px] uppercase text-dark-red'>Double (double face) cashmere</h2>
                        </div>

                        <div className='flex flex-col gap-[10px] lg:gap-[30px]'>
                            <div className='w-full lg:w-[50%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-center'>
                                <ul className='flex flex-col gap-[6px] lg:gap-[10px]'>
                                    <li>
                                        Ткани double face создают путем двухслойного ткацкого переплетения, за счет которого образуется единое полотно, состоящее из двух тканей, соединенных между собой.
                                    </li>
                                    <li>
                                        Главная особенность тканей double face - возможность носить изделия на обе стороны.
                                    </li>
                                    <li>Мастера FUR & CASHMERE создают изделия из тканей double face исключительно вручную уникальным, искусным способом.</li>
                                    <li>Пальто double получаются особенно легкими, но при это теплыми, обладающими собственным шармом и особым подчерком.</li>
                                </ul>
                            </div>
                            <div>
                                <img src={tkan5} alt="no image" className='w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block object-fill' />
                                <img src={tkan5_mobile} alt="no image" className='w-full block lg:hidden' />
                            </div>
                        </div>
                    </div>


                    {/* row 7 */}
                    <div className='pt-[50px] lg:pt-[100px]'>
                        <div className='text-center w-full lg:w-[70%] m-auto'>
                            <h2 className='leading-[31px] lg:leading-[48px] text-[26px] lg:text-[40px] uppercase text-dark-red'>Кашемир и шерсть storm system / rain system technology</h2>
                        </div>

                        <div className='flex flex-col gap-[10px] lg:gap-[30px]'>
                            <div className='pt-[20px]'>
                                <img src={tkan7} alt="no image" className='w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block' />
                                <img src={tkan7_mobile} alt="no image" className='w-full block lg:hidden' />
                            </div>
                            <div className='w-full lg:w-[50%] m-auto text-[14px] lg:text-[15px] text-normal_text text-center'>
                                <ul className='flex flex-col gap-[6px] lg:gap-[10px]'>
                                    <li>
                                        Инновационная обработка storm system делает ткани водонепроницаемыми и ветроустойчивыми, не влияя на мягкость натурального волокна.
                                    </li>
                                    <li>
                                        Storm system состоит из двойного барьера. Снаружи ткань обработана технологией rain system, которая образует невидимый барьер вокруг каждого волокна.
                                    </li>
                                    <li>На обратной стороне ткани находится экспозивные дышащие  мембраны, которые устойчивы как к воде, так и к ветру, и помогают поддерживать оптимальную температуру тела.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 8 */}
                    <div className='py-[50px] lg:py-[100px]'>
                        <div className='flex flex-col gap-[10px] lg:gap-[30px]'>
                            <div className='pt-[20px]'>
                                <img src={tkan9} alt="no image" className='w-full h-[calc(100vh_-_50px)] xxxl:h-auto hidden lg:block object-cover' />
                                <img src={tkan9_mobile} alt="no image" className='w-full block lg:hidden' />
                            </div>
                            <div className='w-full lg:w-[50%] m-auto text-[14px] lg:text-[15px] text-normal_text text-center'>
                                <ul className='flex flex-col gap-[6px] lg:gap-[10px]'>
                                    <li>
                                        FUR & CASHMERE внедряет передовые технологии материалов и пошива. Сочетает качество и практичность для создания изысканной casual коллекции для самых взыскательных клиентов.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ContactMap />
                </div>
            </Layout>

            <Footer />
        </>
    )
}

export default FabricExcellence