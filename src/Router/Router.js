import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../MainLayout/Main';
import Home from '../pages/Mainhome/Home/Home';
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