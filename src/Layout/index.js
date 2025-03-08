import React from 'react';
import Header from '../components/Header';
import PostsList from '../components/PostList';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

export default function Layout() {
  return (
    <>
      <Header/>
      <PostsList />
      <Footer/>
    </>
  );
}


Layout.protoType = {
  selectedTheme: PropTypes.string.isRequired,
};
