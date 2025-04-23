import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function AccordionComponent(props) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className='text-dark-red font-inter w-full lg:w-[50%] m-auto pt-[30px] lg:pt-[50px]'>
            {Array.isArray(props.faqs) && props.faqs?.length > 0 && props.faqs.map((item, index) => (
                <Accordion key={item.id} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
                    <AccordionHeader className={`font-medium text-[14px] uppercase py-2 ${index === props.faqs.length - 1 ? 'border-y-[1px] border-y-bold_text' : 'border-t-[1px] border-t-bold_text'}`} onClick={() => handleOpen(index + 1)}>
                        {item.title}
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='py-2'>
                            <span className='text-bold_text text-[14px] lg:text-[15px]'>{item.description}</span>
                        </div>
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        faqs: state.rootReducer.faqs,
    }
}

export default connect(mapStateToProps, null)(memo(AccordionComponent));