import React, { memo } from 'react';

function Header(props) {
    return (
        <div className='text-center'>
            <h2 className='leading-[31px] lg:leading-[48px] text-[26px] lg:text-[40px] uppercase text-dark-red'>
                {props.name}
            </h2>
        </div>
    )
}

export default memo(Header);