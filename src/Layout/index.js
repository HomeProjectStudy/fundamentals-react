import React from 'react';
import Header from '../components/Header';
import PostsList from '../components/PostList';
import Footer from '../components/Footer';

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
