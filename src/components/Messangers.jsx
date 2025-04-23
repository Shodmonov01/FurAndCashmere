import React, { memo } from 'react';

function Messangers(props) {
    const { phone = "", other = "" } = props;
    return (
        <>
            <li className={`text-dark-red ${phone}`}>+7 921 553 07 51</li>
            <li className={`text-bold_text hover:text-opacity-80 transition-all ${other}`}>
                <a href="https://t.me/furcashmere" target='_blank'>Telegram</a>
            </li>
            <li className={`text-bold_text hover:text-opacity-80 transition-all ${other}`}>
                <a href="https://wa.me/+79215530751" target='_blank'>WhatsApp</a>
            </li>
            <li className={`text-bold_text hover:text-opacity-80 transition-all ${other}`}>
                <a href="https://vk.com/fur_and_cashmere" target='_blank'>VK</a>
            </li>
            <li className={`text-bold_text hover:text-opacity-80 transition-all ${other}`}>
                <a href="https://www.instagram.com/fur.cashmere/" target='_blank'>Instagram</a>
            </li>
        </>
    )
}

export default memo(Messangers);