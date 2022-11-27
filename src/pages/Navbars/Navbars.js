import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbars = () => {

    // const handlelogout = () => {
    //     logout()
    //         .then(() => {
    //             toast.success('Signout successull')
    //         }).catch(err => console.log(err));
    // }

    const navbars = <>
        <li><Link>Hone</Link></li>
        <li><Link>category</Link></li>
        <li><Link>Advertised</Link></li>
        <li><Link>Blogs</Link></li>
        <li><Link>Sign up</Link></li>
        <li><Link>Sign in</Link></li>
    </>

    // const categorynav = <>

    //     <li><Link>Submenu 3</Link></li>
    //     <li><Link>Submenu 4</Link></li>
    //     <li><Link>Submenu 5</Link></li>
    // </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbars}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">phone corner</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbars}
                </ul>
            </div>

        </div>
    );
};
export default Navbars;