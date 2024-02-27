// components/MainPage.js

import React from 'react';
import Header from './Header';
import Content from './Content';
import MessageBox from './MessageBox';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <Content />
      <MessageBox />
    </div>
  );
}

export default MainPage;
