import React from 'react';
import Header from '../components/Header';
import PostsList from '../components/PostList';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
