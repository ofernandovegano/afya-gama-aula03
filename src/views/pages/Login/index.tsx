import React from 'react';

import Navbar from '../../../components/NavBar'
import Footer from '../../../components/Footer'

import { SectionComponent } from './styles'

const Login: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <SectionComponent>
          <h1>Login</h1>
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
}

export default Login;