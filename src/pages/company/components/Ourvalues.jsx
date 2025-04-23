import React, { memo } from 'react';

function Ourvalues() {
    return (
        <div className='w-full lg:w-[70%] m-auto pt-[10px] lg:pt-[30px] text-[14px] lg:text-[15px] text-normal_text text-left'>
            <ul className='flex flex-col gap-2'>
                <li className='flex items-start gap-2'>
                    <span>1.</span>
                    <span>Качество: Мы используем только лучшие материалы, будь то натуральный мех, шерсть или другие высококачественные ткани. Каждое изделие проходит строгий контроль качества, чтобы вы могли наслаждаться идеальной посадкой и долговечностью.</span>
                </li>
                <li className='flex items-start gap-2'>
                    <span>2.</span>
                    <span>Индивидуальность: Мы стремимся создавать изделия, которые отражают ваш уникальный стиль и личность. Наши дизайнеры работают над тем, чтобы каждая шуба и пальто были не только модными, но и функциональными.</span>
                </li>
                <li className='flex items-start gap-2'>
                    <span>3.</span>
                    <span>Ответственность: Мы заботимся о природе и этике производства. Наш бренд поддерживает устойчивые практики и соблюдает высокие стандарты экологической ответственности.</span>
                </li>
                <li className='flex items-start gap-2'>
                    <span>4.</span>
                    <span>Клиентоориентированность: Мы ценим каждого нашего клиента и всегда готовы помочь с выбором, уходом и любыми вопросами, связанными с нашими изделиями.</span>
                </li>
            </ul>
        </div>
    )
}

export default memo(Ourvalues);