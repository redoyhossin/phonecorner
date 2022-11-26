import React from 'react';
import bannar2 from '../../../Assets/phonegallery/banner/bannar2.jpeg'

const Bannar = () => {
    return (
        <div className="hero min-h-screen  rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <img src={bannar2} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                                <div className="space-y-2">
                                    <a className="inline-block text-2xl font-semibold sm:text-3xl">iPhone 14 and iPhone 14 Plus</a>
                                    <p className="text-xs dark:text-gray-400">
                                        (ᴜ𝐬ᴇᴅ ꜰᴏʀ few days)
                                    </p>
                                </div>
                                <div className="dark:text-gray-100">
                                    <p>is now available - 100%BH look a like new condition with the charger.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">
                        Phone Corner sells used phones</h1>
                   

                </div>
            </div>
        </div>
    );
};

export default Bannar;