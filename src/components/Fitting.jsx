import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Button from './Button';
import close from '../assets/close.svg';

function Fitting(props) {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    // save handler
    const saveHandler = () => {
        alert("Вы пока не можете отправить запрос");
    }

    return (
        <Dialog open={props.open} onClose={props.close} className="relative z-10">
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
                                    Забронируйте время на примерку понравившегося Вам изделия, заполнив форму:
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
                                    <input
                                        id="Телефон"
                                        type="text"
                                        autoComplete="current-text"
                                        className={`w-full border-b-[1px] px-1 py-[12px] placeholder-[#ACACAC] focus:z-10 focus:border-light-blue-500 focus:outline-none focus:ring-light-blue-500 text-xs ${errors.phone ? "border-red-700" : "border-[#E2E2E2]"}`}
                                        placeholder="Телефон"
                                        {...register('phone', { required: true })}
                                    />

                                    <div className='w-full md:w-[280px] mt-[20px]'>
                                        <Button
                                            name="Забронировать"
                                            // className="px-[19px]"
                                            classname="w-full md:w-[280px] border-normal_text text-normal_text hover:text-white hover:bg-normal_text"
                                            stroke={false}
                                            svgClassName="stroke-normal_text"
                                            onClick={saveHandler}
                                            type="submit"
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

export default memo(Fitting);