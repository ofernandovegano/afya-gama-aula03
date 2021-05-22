import React from 'react';
import Routes from './routes'
import GolbalStyles from './assets/GlobalStyles'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GolbalStyles />
      <ToastContainer />
    </>
  );
}

export default App;