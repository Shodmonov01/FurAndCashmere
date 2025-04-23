import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../../services/Layout';
import Collections from '../home/components/Collections';
import Carousel from './components/Carousel';
import Brand from './components/Brand';
import CarouselMultiple from './components/CarouselMultiple';
import Contact from './components/Contact';
import Footer from '../../components/Footer';
import { getAllBlogs, getBannerImage, getBannerVideo } from '../../redux/reducers/rootReducer';
import StickyComponent from './components/StickyComponent';
import Banner from './components/Banner';

function Home(props) {

    // get data
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        props.onGetBannerVideo({ signal }); // get all banner videos
        props.onGetBannerImage({ signal }); // get all banner images
        props.onGetAllBlogs({ signal, selectedId: 1, size: 9 }); // get all blogs

        return () => controller.abort();
    }, []);

    return (
        <>
            <div className='text-[15px] lg:text-[16px] font-inter text-bold_text'>
                <Layout>
                    <Banner />
                    <StickyComponent />

                    {/* <div className='text-center w-[full] lg:w-[39%] text-[15px] m-auto leading-[22px] pt-[49px] lg:py-[150px] pb-[50px]'>
                        <span>
                            Итальянская классика в сочетании с эксклюзивными материалами и технологиями — воплощение коллекции FUR & CASHMERE, где каждое изделие как произведение искусства.
                        </span>
                    </div>
                    <div>
                        <hr className='h-[1.5px] bg-dark-red w-full md:w-[60%] m-auto' />
                    </div> */}
                </Layout>
            </div>

            {/* collections */}
            <a name="collection"></a>
            <Collections />

            {/* carousel */}
            <Carousel />

            {/* about brand */}
            <Brand />

            {/* carousel multiple */}
            <CarouselMultiple />

            {/* contact */}
            <Contact />

            {/* footer */}
            <Footer />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGetBannerVideo: value => dispatch(getBannerVideo(value)),
        onGetBannerImage: value => dispatch(getBannerImage(value)),
        onGetAllBlogs: value => dispatch(getAllBlogs(value)),
    }
}

export default connect(null, mapDispatchToProps)(Home);