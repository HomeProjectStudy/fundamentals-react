import React from 'react';
import Header from '../components/Header';
import PostsList from '../components/PostList';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

export default function Layout({onToggleTheme, selectedTheme}) {
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}


Layout.protoType = {
  selectedTheme: PropTypes.string.isRequired,
};
