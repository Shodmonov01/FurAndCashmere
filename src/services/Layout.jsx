import React from 'react';

function Layout(props) {
    return (
        <div className='w-full'>
            <div className="px-[20px] md:px-[40px]">
                {props.children}

            </div>
        </div>
    )
}

export default React.memo(Layout);