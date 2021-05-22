import styled from 'styled-components';

export const NavbarContent = styled.nav`
  background: #D40054;
  display: flex;

  img {
    height: 150px;
    width: auto;
  }

  .links-content {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      background: #fff;
      padding: 12px;
      border-radius: 12px;
      color: #D40054;
      text-transform: uppercase;
      transition: 0.3s;

      &:hover {
        background: #e2e2ee
      }
    }
  }
`