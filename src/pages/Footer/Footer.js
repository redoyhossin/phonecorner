import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 bg-slate-700 text-white">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                            <img className='rounded-3xl' src={logo} alt="" />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            
                            <li>
                                <Link to='/Privacy'>Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <Link>Products Resale</Link>
                        </li>
                        <li>
                            <Link>Instagram</Link>
                        </li>
                        <li>
                            <Link>Facebook</Link>
                        </li>
                        <li>
                            <Link>Twitter</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;