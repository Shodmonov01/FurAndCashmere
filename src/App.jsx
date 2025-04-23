import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';
import ScrollToTop from './components/ScrollToTop ';
import Loader from './components/Loader';

// swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'react-toastify/dist/ReactToastify.css'; //toastify

// react-international-phone
import 'react-international-phone/style.css';

// image lazy load
import 'react-lazy-load-image-component/src/effects/blur.css';

import './App.css';

function App() {

  return (
    <div className="App font-inter">
      <BrowserRouter>
        <Suspense fallback={
          <Loader />
        }>
          <ScrollToTop>
            <RouterConfig />
          </ScrollToTop>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
