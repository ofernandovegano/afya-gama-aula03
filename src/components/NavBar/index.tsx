import React from 'react';

import { Link } from 'react-router-dom';

import { NavbarContent } from './styles'

import LogoAfya from '../../assets/img/logo.png'

const NavBar: React.FC = () => {
  return (
    <NavbarContent>
      <Link to="/">
        <img src={ LogoAfya} alt="Logo Afya" />
      </Link>
      <div className="links-content">
        <Link to="/">Home</Link>
        <Link to="/criar-conta">Inscreva-se</Link>
        <Link to="/login">Logar</Link>
      </div>

    </NavbarContent>
  );
}

export default NavBar;