import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import Layout from '../../services/Layout';
import Accordion from './components/Accordion';
import Footer from '../../components/Footer';
import { getAllFaqs } from '../../redux/reducers/rootReducer';

function Answers(props) {

  // get faqs
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    props.onGetAllFaqs({ signal });

    return () => controller.abort();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Вопрос-ответ | FUR&CASHMERE </title>
        <meta
          name="description"
          content="Раздел 'Вопрос-ответ' FUR&CASHMERE поможет найти ответы на все интересующие вас темы. Узнайте больше о наших продуктах, услугах и условиях сотрудничества."
        />
      </Helmet>

      <Layout>
        <div className='font-inter py-[50px] lg:py-[100px]'>
          <div className='text-center'>
            <h2 className='leading-[31px] lg:leading-[60px] text-[26px] lg:text-[50px] uppercase text-dark-red'>Вопросы-ответы</h2>
          </div>

          <Accordion />
        </div>
      </Layout>

      {/* footer */}
      <Footer />
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAllFaqs: value => dispatch(getAllFaqs(value)),
  }
}

export default connect(null, mapDispatchToProps)(Answers);