import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Container from './Container';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { LayoutContainer } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      {/* <StyledLayout.MainContainer>
        <StyledLayout.ContainerWrapper> */}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        {/* </StyledLayout.ContainerWrapper>
      </StyledLayout.MainContainer> */}
    </LayoutContainer>
  );
};

export default Layout;
