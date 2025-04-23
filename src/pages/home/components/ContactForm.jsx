import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import Button from '../../../components/Button';
import { axiosInstance } from '../../../config/config';
import { getToast, getToastError, getToastWarn } from '../../../services/options';

function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    // save form
    const submitHandler = async data => {
        if (data.firstname.trim()?.length > 0 && phoneNumber?.length > 0) {
            try {
                setLoading(true);
                const res = await axiosInstance.post("/consultation/", {
                    name: data.firstname.trim(),
                    phone: phoneNumber,
                });
                if (res.status === 200) {
                    getToast("Спасибо за заявку. Мы с вами свяжемся");
                    reset();
                    setLoading(false);
                } else getToastWarn(res.data);
            } catch (error) {
                getToastError(error?.message);
                setLoading(false);
            }
        }
    }

    return (
        <div className='col-span-1 order-first lg:order-last flex flex-col gap-[24px] justify-center px-0 lg:px-[56px]'>
            <h2 className='text-[26px] lg:text-[40px] leading-[31px] lg:leading-[48px] text-dark-red text-center lg:text-left font-normal uppercase'>Свяжитесь с нами <br /> для получения <br /> консультации</h2>
            <form onSubmit={handleSubmit(data => submitHandler(data))} className='flex flex-col'>
                <input
                    id="Имя"
                    type="text"
                    autoComplete="current-text"
                    className={`w-full border-b-[1px] bg-transparent border-[#acacac] px-1 py-[12px] placeholder-[#ACACAC] focus:z-10 focus:border-light-blue-500 focus:outline-none focus:ring-light-blue-500 text-xs ${errors.firstname ? "border-red-700" : "border-[#acacac]"}`}
                    placeholder="Имя"
                    {...register('firstname', { required: true })}
                />
                <PhoneInput
                    className={`phone font-[500] focus:outline-none w-full bg-transparent PhoneInput_contact`}
                    defaultCountry="ru"
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    placeholder='Телефон'
                    name="phone"
                    autoComplete="tel"
                    required
                />

                <div className='w-full md:w-[234px] mt-[20px]'>
                    <Button
                        name="Оставить заявку"
                        // className="px-[19px]"
                        classname="w-full md:w-[234px] border-normal_text text-normal_text hover:text-white hover:bg-normal_text"
                        svgClassName="stroke-normal_text"
                        stroke={true}
                        type="submit"
                        loading={loading}
                    />
                </div>
            </form>
        </div>
    )
}

export default memo(ContactForm);