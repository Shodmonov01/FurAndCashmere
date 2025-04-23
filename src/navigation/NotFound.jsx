import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className="relative inset-0 isolate h-[calc(100vh_-_110px)]">
            <div className="mx-auto max-w-7xl px-6 text-center mt-12">
                <div className='flex items-center justify-center bg-white p-4 pt-0'>
                    <h2
                        className="font-medium text-black text-8xl sm:text-9xl"
                        style={{
                            color: "#FFFFFF",
                            textShadow: "1px 3px 0 #969696, 1px 13px 5px #aba8a8"
                        }}
                    >
                        404
                    </h2>
                </div>
                <h1 className="mt-12 text-3xl font-normal tracking-tight text-gray-500 sm:text-5xl sm:mt-6"
                >Страница не найдена</h1>
                <p className="mt-4 text-base text-gray-500 sm:mt-6">К сожалению, мы не смогли найти страницу, которую вы ищете</p>
                <div className="mt-10 flex justify-center">
                    <Link to="/" className="text-sm font-semibold leading-7 text-black">
                        <span aria-hidden="true">&larr;</span> Вернуться домой
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default React.memo(NotFound);