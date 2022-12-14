import React from 'react';
import { Link } from 'react-router-dom';
import errorhandle from '../Assets/errorhandle.jpg';
const Errorhandle = () => {
    return (

        <div>
            <section className="flex items-center h-full p-16 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <div className='flex justify-center'>
                            <img className='w-96 h-24 rounded-xl ' src={errorhandle} alt="" />
                        </div>
                        <p className="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <br />
                        <Link to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 text-xl btn-outline">Back to homepage</Link>
                    </div>
                </div>
            </section>

        </div>


    );
};

export default Errorhandle;