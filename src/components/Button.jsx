import React, { memo } from 'react';

function Button(props) {
    const { type = "button", stroke = false, svgClassName = "", classname = "", loading = false } = props;

    return (
        <button
            type={type}
            className={`${classname ? classname : "border-normal_text text-normal_text hover:bg-normal_text hover:border-normal_text"} ${stroke ? '' : ''} group border h-[45px] lg:h-[48px] text-[14px] md:text-[16px] flex items-center transition-all font-inter_medium justify-center leading-[19px] ${props.classname} ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={props.onClick}
            disabled={loading}
        >
            {loading && (
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {props.name}
            {/* <svg width="37" height="15" className={`group-hover:stroke-[#fff] ${svgClassName}`} viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM34.7071 8.20711C35.0976 7.81658 35.0976 7.18342 34.7071 6.79289L28.3431 0.428932C27.9526 0.0384078 27.3195 0.0384078 26.9289 0.428932C26.5384 0.819457 26.5384 1.45262 26.9289 1.84315L32.5858 7.5L26.9289 13.1569C26.5384 13.5474 26.5384 14.1805 26.9289 14.5711C27.3195 14.9616 27.9526 14.9616 28.3431 14.5711L34.7071 8.20711ZM1 8.5H34V6.5H1V8.5Z" fill="#5B5A57" />
            </svg> */}

            {/* <svg width="40" height="15" className={`group-hover:stroke-[#fff] ${svgClassName}`} viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM34.7071 8.70711C35.0976 8.31658 35.0976 7.68342 34.7071 7.29289L28.3431 0.928932C27.9526 0.538408 27.3195 0.538408 26.9289 0.928932C26.5384 1.31946 26.5384 1.95262 26.9289 2.34315L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM1 9H34V7H1V9Z" fill={`#2B2B2A`} className='group-hover:hidden block' />

                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM34.7071 8.70711C35.0976 8.31658 35.0976 7.68342 34.7071 7.29289L28.3431 0.928932C27.9526 0.538408 27.3195 0.538408 26.9289 0.928932C26.5384 1.31946 26.5384 1.95262 26.9289 2.34315L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM1 9H34V7H1V9Z" fill={`#fff`} className='group-hover:block hidden' />
            </svg> */}


            {/* <svg width="37.413574" height="18.379883" className={` group-hover:stroke-[#fff] ${svgClassName}`} viewBox="0 0 37.4136 18.3799" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs />
                <path id="Vector 1" d="M0 9.18L37.4 9.18C30.07 9.24 26.34 7.36 20 0.68M37.4 9.18C30.05 9.19 26.22 11.08 19.9 17.68" strokeOpacity="1.000000" strokeWidth="2.000000" />
            </svg> */}
        </button>
    )
}

export default memo(Button);