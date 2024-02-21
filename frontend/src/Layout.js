import React from 'react';
import NavigationBar from './components/navigation-bar/NavigationBar';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <main>{children}</main>
    </>
  );
};
