import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import routes from './routes';
import Navbar from '../components/navbar/Navbar';
import { getAllCategories } from '../redux/reducers/rootReducer';
// import PopUp from '../components/PopUp';

function RouterConfig(props) {

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        props.onGetAllCategories({ signal }); //get all data

        return () => controller.abort();
    }, []);

    // routes
    const menu = routes.map((route, index) => {
        // return (route.component && route.role.includes(user.status)) ? (
        return (route.component) ? (
            <Route
                key={index}
                path={route.path}
                name={route.name}
                element={<route.component />}
            />
        ) : (null);
    });

    return (
        <div className='routerConfig'>
            <Navbar />
            <Routes>
                {menu}
            </Routes>

            {/* <PopUp /> */}

            {/* for toast */}
            <ToastContainer
                draggablePercent={60}
                style={{ fontSize: "12px" }}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllCategories: value => dispatch(getAllCategories(value)),
    }
}

export default connect(null, mapDispatchToProps)(RouterConfig);