import React from 'react';
import Router from './Router/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router/>
    </div>
  );
};

export default App;