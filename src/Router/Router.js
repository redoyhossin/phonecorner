import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorhandle from '../Errorhandle/Errorhandle';
import DashboardLayout from '../MainLayout/DashboardLayout';
import Main from '../MainLayout/Main';
import Blogs from '../pages/Blogs/Blogs';
import Category from '../pages/collectionCategory/Category/Category';
import Product from '../pages/collectionCategory/products/Product';
import Allusers from '../pages/Dashboard/Allusers/Allusers';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';
import Myoders from '../pages/Dashboard/Myoder/Myoders';
import Privacy from '../pages/Footer/Privacy/Privacy';
import Home from '../pages/Mainhome/Home/Home';
import Privateroute from '../pages/privateroute/Privateroute';
import RouterError from '../pages/Sharedpage/RouterError/RouterError';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';

const Router = ({ children }) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement: <RouterError />,
            children: [
                {
                    path: '/',
                    element: <Home />,

                },
                {
                    path: '/Signup',
                    element: <Signup />
                },
                {
                    path: '/Signin',
                    element: <Signin />
                },
                {
                    path: 'Blogs',
                    element: <Blogs />
                },
                {
                    path: 'Category',
                    element: <Category />
                },

                {
                    path: '/Product/:ProductId',
                    element: <Privateroute> <Product></Product></Privateroute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/allproducts/${params.ProductId}`),

                }


            ]
        },
        {
            path: 'Privacy',
            element: <Privacy />
        },
        {
            path: '*',
            element: <Errorhandle />
        },

        {
            path: '/Dashboard',
            element: <Privateroute><DashboardLayout /></Privateroute>,
            children: [
                {
                    path:'/Dashboard',
                    element:<Myoders/>
                },
                {
                    path: '/Dashboard/Allusers',
                    element:<Allusers/>
                }
            ]
        }

    ])
    return (
        <div className='container mx-auto px-3'>
            <RouterProvider router={router}>
                {children}
            </RouterProvider>
        </div>
    );
};

export default Router;