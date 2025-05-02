import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Layout from '../../services/Layout';
import Footer from '../../components/Footer';
import { getAllBlogs, isClearBlogs } from '../../redux/reducers/rootReducer';
import Header from '../../components/Header';


function Gallery(props) {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(1);
    const [size] = useState(9);
    const [plusSize, setPlusSize] = useState(0);

    // get data
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        props.onClearBlogs([]); // clear blogs
        props.onGetAllBlogs({ signal, selectedId: 1, size: size }); // get all blogs

        // props.onClearBlogs(props.blogs); // clear blogs
        // if (props.blogs?.length === 0)
        //     props.onGetAllBlogs({ signal, selectedId: 1, size: size }); // get all blogs

        return () => controller.abort();
    }, []);

    // navigate
    const navigateHandler = value => {
        navigate("/specific_news", { state: value });
    }

    // for pagination
    const handlePageClick = async () => {
        props.onGetAllBlogs({ selectedId: selected + 1, size: size }); // get all blogs
        setSelected(selected + 1);
        setPlusSize(plusSize + size);
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Блог | FUR&CASHMERE</title>
                <meta
                    name="description"
                    content="Блог FUR&CASHMERE - здесь вы найдете полезные статьи и советы по уходу за меховыми изделиями, модные тренды и новинки нашего ассортимента."
                />
            </Helmet>
            <Layout>
                <div className='font-inter pt-[30px] lg:pt-[50px] pb-[50px] lg:pb-[100px] font-normal flex flex-col gap-[20px] lg:gap-[40px] text-[14px] lg:text-[16px]'>
                    <Header name="Внутри FUR & CASHMERE" />

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-[10px]'>
                        {props.blogs?.length > 0 && props.blogs.map((item, index) => (
                            <div key={item.slug} className={`col-span-1 flex flex-col cursor-pointer ${index > 2 && 'pt-[10px] lg:pt-[30px]'}`} onClick={() => navigateHandler(item)}>
                                <LazyLoadImage
                                    alt={item.title}
                                    // height={image.height}
                                    src={item.image} // use normal <img> attributes as props
                                    // width={image.width}
                                    effect="blur"
                                    // wrapperProps={{
                                    //     // If you need to, you can tweak the effect transition using the wrapper style.
                                    //     style: { transitionDelay: "1s" },
                                    // }}
                                    className='h-[calc(100vh_-_200px)] lg:h-[calc(100vh_-_150px)] xxxl:h-[800px] w-full object-cover object-top'
                                />
                                {/* <img src={item.image} alt="no image" className='h-[calc(100vh_-_200px)] lg:h-[calc(100vh_-_150px)] w-full object-cover object-top' /> */}
                                <span className='pt-[10px] text-bold_text font-inter_medium uppercase'>{item.title}</span>
                                <span className='pt-[10px] lg:pt-[15px] text-normal_text line-clamp-3'>{item?.content && parse(item?.content)}</span>
                            </div>
                        ))}
                    </div>
                    {props.blogs?.length >= size + plusSize && (
                        <div className='text-dark-red font-inter_medium cursor-pointer text-center'>
                            <span onClick={handlePageClick}>Показать еще</span>
                        </div>
                    )}
                </div>

                {/* row 2 */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-0 pb-[50px] lg:pb-[100px]'>
                    <div className='col-span-1 order-last lg:order-first lg:h-[calc(100vh_-_50px)] xxxl:h-auto'>
                        {/* <img src={contact} className='w-full lg:h-[calc(100vh_-_50px)] object-cover' alt="no image" /> */}
                        {/* <video autoPlay muted loop id="myVideo" className='w-full h-full object-cover'>
                            <source src={tiny_new} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video> */}
                    </div>
                    {/* <ContactForm /> */}
                </div>
            </Layout>

            {/* footer */}
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        blogs: state.rootReducer.blogs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllBlogs: value => dispatch(getAllBlogs(value)),
        onClearBlogs: value => dispatch(isClearBlogs(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);