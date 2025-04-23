import React, { memo } from 'react'
import Messangers from './Messangers'

function ContactMap() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-0'>
            <div className='col-span-1 flex flex-col gap-[10px] lg:gap-[40px] justify-center pr-0 lg:pr-[60px]'>
                <h2 className='text-[26px] lg:text-[40px] leading-[31px] lg:leading-[48px] text-dark-red text-center lg:text-left uppercase'>
                    Контакты
                </h2>
                <div className='grid grid-cols-2 xl:grid-cols-3 gap-[25px] text-[14px] font-inter'>
                    <ul className='col-span-1 flex flex-col gap-[10px]'>
                        <li className='text-dark-red'>Почта:</li>
                        <li class='text-bold_text'>
                            <a href='mailto:fur.cashmere@mail.ru'>fur.cashmere@mail.ru</a>
                        </li>
                    </ul>
                    <ul className='col-span-1 flex flex-col gap-[10px]'>
                        <li className='text-dark-red'>Адрес офиса шоурума:</li>
                        {/* <li className='text-bold_text'>г. Город, ул. Улица, <br /> д.1</li> */}
                        <li className='text-bold_text'>Санкт-Петербург, Петроградский район, м. Горьковская</li>
                    </ul>
                    <ul className='col-span-2 lg:col-span-1 flex flex-col gap-[10px] w-full items-center lg:items-start'>
                        <li className='text-dark-red'>Время работы шоурума:</li>
                        <li className='text-bold_text'>По предварительной записи</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-1'>
                <div className='w-full' style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href='https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps'
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Санкт‑Петербург
                    </a>
                    <a
                        href='https://yandex.ru/maps/2/saint-petersburg/house/petrogradskaya_naberezhnaya_20/Z0kYdQRjTkADQFtjfXV0eHVmZw==/inside/?ll=30.333792%2C59.960008&tab=inside&utm_medium=mapframe&utm_source=maps&z=18.25'
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Петроградская набережная, 20 — Яндекс Карты
                    </a>
                    <iframe
                        className='w-full h-[320px] lg:h-[680px]'
                        // src='https://yandex.ru/map-widget/v1/?ll=30.333792%2C59.960008&mode=whatshere&tab=inside&whatshere%5Bpoint%5D=30.334245%2C59.960205&whatshere%5Bzoom%5D=17&z=18.25'
                        src='https://yandex.uz/map-widget/v1/?from=mapframe&ll=30.322086%2C59.956429&masstransit%5BstopId%5D=1887915241&mode=masstransit&tab=overview&z=17.85'
                        frameBorder='1'
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                  
                </div>

            
                {/* <img src={map} className='w-full h-[320px] lg:h-[680px] object-cover' alt="no image" /> */}
            </div>
        </div>
    )
}

export default memo(ContactMap)
