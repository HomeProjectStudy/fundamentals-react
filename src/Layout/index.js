import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { Routes } from '../routes';
import { Nav } from './styles';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header/>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/:id">Post</Link>
      </Nav>
      <Routes />
      <Footer/>
    </>
  );
}


Layout.protoType = {
  selectedTheme: PropTypes.string.isRequired,
};
