import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #000;
    margin-top: 16px;
    padding: 16px;
    border-radius: 4px;

  a {
    color: #FFFFFF;
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: 16px;
    }
  }

`;
