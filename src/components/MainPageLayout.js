/* eslint-disable */
import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are You Looking for a movie or Actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
