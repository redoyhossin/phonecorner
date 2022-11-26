import React from 'react';
import sections1 from '../../../Assets/section/section1.jpg'

const Section1 = () => {
    return (
        <div >
            <div className="hero min-h-screen  " style={{
            background: `url(${sections1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
           
        }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">A nice working day but we all expect</h1>
                        <p className="mb-5">And it is our habit to look at the face of the smartphone at the beginning of the day. Because this small device is closely related to our life</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;