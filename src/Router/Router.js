import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorhandle from '../Errorhandle/Errorhandle';
import Main from '../MainLayout/Main';
import Home from '../pages/Mainhome/Home/Home';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';

const Router = ({ children }) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,

                },
                {
                    path: '/Signup',
                    element:<Signup/>
                },
                {
                    path: '/Signin',
                    element:<Signin/>
                }
                
            ]
        },
        {
            path: '*',
            element:<Errorhandle/>
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