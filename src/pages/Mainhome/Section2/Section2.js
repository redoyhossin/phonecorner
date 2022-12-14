import React from 'react';
import huaweip30 from '../../../Assets/phonegallery/huawei/huawei-p30-pro.jpg';
import OppoA31 from '../../../Assets/phonegallery/Oppo/Oppo A31.jpeg';
import iphone11 from '../../../Assets/phonegallery/iphone/ipone11.png'
const Section2 = () => {
    return (
        <div className='my-10'>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={huaweip30} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Huge price reductions and unimaginable offers</span>
                            <h3 className="text-3xl font-bold"> Huawei P30 </h3>
                            <p className="my-6 dark:text-gray-400">For Huawei P30 Case Hybrid Shockproof Silicone TPU Back Cover Phone Case For Huawei P30.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={OppoA31} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Huge price reductions and unimaginable offers</span>
                            <h3 className="text-3xl font-bold">Oppo A31</h3>
                            <p className="my-6 dark:text-gray-400">The Oppo A31 is integrated with a big screen of 6.5 inches IPS LCD capacitive touchscreen while it features 480 nits typ. brightness</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={iphone11} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Huge price reductions and unimaginable offers</span>
                            <h3 className="text-3xl font-bold">iPhone 11</h3>
                            <p className="my-6 dark:text-gray-400"> Processor: Apple A13 Bionic (7 nm+) ?? RAM: 4 GB ?? Storage: 64 GB, 128 GB, 256 GB ?? Display: 6.1 inches ?? Camera: 12 MP (wide) + 12 MP (ultrawide).
                                Pros and cons: Fast battery charging.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section2;