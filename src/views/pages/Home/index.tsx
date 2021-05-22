import React from 'react';

import Navbar from '../../../components/NavBar'
import Footer from '../../../components/Footer'

import {  SectionComponent } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <SectionComponent>
          <h1>Home</h1>
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
}

export default Home;
