import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../MainLayout/Main';
import Home from '../pages/Mainhome/Home/Home';

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
                
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>
                {children}
            </RouterProvider>
        </div>
    );
};

export default Router;