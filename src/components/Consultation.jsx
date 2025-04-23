import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import close from '../assets/close.svg';
import Button from './Button';
import { getToast, getToastError, getToastWarn } from '../services/options';
import { axiosInstance } from '../config/config';

function Consultation(props) {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    // save handler
    const submitHandler = async data => {
        if (data.firstname.trim()?.length > 0 && phoneNumber?.length > 0) {
            try {
                setLoading(true);
                const res = await axiosInstance.post("/consultation/", {
                    name: data.firstname,
                    phone: phoneNumber
                });
                if (res.status === 200) {
                    getToast("Спасибо за заявку. Мы с вами свяжемся");
                    setLoading(false);
                    props.close();
                } else {
                    getToastWarn(res.data);
                    setLoading(false);
                }
            } catch (error) {
                getToastError(error?.message);
                setLoading(false);
            }
        }
    }

    return (
        <Dialog open={props.open} onClose={props.close} className="relative z-30">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-[#F7F5F180] bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen m-auto">
                <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full lg:w-[596px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 p-[20px]"
                    >
                        <div className='absolute top-[20px] right-[20px] text-bold_text'>
                            <img src={close} alt="" onClick={props.close} className='cursor-pointer' />
                        </div>
                        <div className='font-normal pt-[40px]'>
                            <div className="text-center font-inter">
                                <h2 className="text-dark-red uppercase text-[16px] lg:text-[20px] leading-[28px] w-[90%] lg:w-[70%] m-auto">
                                    Получите консультацию
                                    {/* и забронируйте время на примерку прямо сейчас */}
                                </h2>
                                <form onSubmit={handleSubmit(data => submitHandler(data))} className='px-0 lg:px-[58px] pt-[20px] flex flex-col items-center'>
                                    <input
                                        id="Ваше имя"
                                        type="text"
                                        autoComplete="current-text"
                                        className={`w-full border-b-[1px] px-1 py-[12px] placeholder-[#ACACAC] focus:z-10 focus:border-light-blue-500 focus:outline-none focus:ring-light-blue-500 text-xs ${errors.firstname ? "border-red-700" : "border-[#E2E2E2]"}`}
                                        placeholder="Ваше имя"
                                        {...register('firstname', { required: true })}
                                    />
                                    <PhoneInput
                                        className={`phone font-[500] focus:outline-none w-full`}
                                        defaultCountry="ru"
                                        value={phoneNumber}
                                        onChange={(phone) => setPhoneNumber(phone)}
                                        placeholder='Телефон'
                                        name="phone"
                                        autoComplete="tel"
                                        required
                                    />
                                    {/* <input
                                        id="Телефон"
                                        type="text"
                                        autoComplete="current-text"
                                        className={`w-full border-b-[1px] px-1 py-[12px] placeholder-[#ACACAC] focus:z-10 focus:border-light-blue-500 focus:outline-none focus:ring-light-blue-500 text-xs ${errors.phone ? "border-red-700" : "border-[#E2E2E2]"}`}
                                        placeholder="Телефон"
                                        {...register('phone', { required: true })}
                                    /> */}

                                    <div className='w-full md:w-[280px] mt-[20px]'>
                                        <Button
                                            name="Оставить заявку"
                                            // className="px-[19px]"
                                            classname="w-full md:w-[280px] border-normal_text text-normal_text hover:text-white hover:bg-normal_text"
                                            svgClassName="stroke-normal_text"
                                            stroke={true}
                                            type="submit"
                                            loading={loading}
                                        />
                                    </div>

                                    <div className='flex flex-col justify-center items-center text-[12px] lg:text-[13px] mt-[10px] text-[#ACACAC]'>
                                        <span>Нажимая на кнопку, </span>
                                        <span>вы принимаете <span className='underline cursor-pointer'>условия сервиса</span></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default memo(Consultation);