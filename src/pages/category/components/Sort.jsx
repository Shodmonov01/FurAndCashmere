import React, { memo, useState } from 'react';
import close_extra from '../../../assets/close_extra.svg';
let d = [
    {
        id: Math.random().toString(),
        name: "По популярности",
        active: false,
    },
    {
        id: Math.random().toString(),
        name: "По возрастанию цены",
        active: false,
    },
    {
        id: Math.random().toString(),
        name: "По убыванию цены",
        active: false,
    },
];

function Sort() {
    const [data, setData] = useState(d);

    // active handler
    const activeHandler = (index, active) => {
        setData(prev => {
            return prev.filter((elem, i) => {
                if (index === i) elem.active = !active;
                else elem.active = false;
                return elem;
            })
        })
    }

    return (
        <div className='text-[14px]'>
            <ul className={`flex flex-col gap-[10px] lg:gap-[20px] relative ${data?.length > 0 && data.some(el => el.active === true) ? 'pt-[25px]' : 'pt-0'} lg:pt-0 shadow-black/25`}>
                {data?.length > 0 && data.map((item, index) => (
                    <li key={item.id} className='flex items-center justify-between cursor-pointer' onClick={() => activeHandler(index, item.active)}>
                        <span className={`${item.active ? 'text-dark-red border-b-[1px] border-dark-red font-inter' : 'text-normal_text'}`}>{item.name}</span>
                        {item.active && (
                            <img src={close_extra} alt="no image" className='absolute top-2 right-2' />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(Sort);