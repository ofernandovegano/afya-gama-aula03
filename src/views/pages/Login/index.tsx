import React from 'react';

import Navbar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import FormSignIn from '../../../components/FormSignIn'

import { SectionComponent } from './styles'

const Login: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <SectionComponent>
          <h2>Formulário de contato</h2>
          <FormSignIn />
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
}

export default Login;