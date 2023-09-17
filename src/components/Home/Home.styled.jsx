import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 40px 0;

  @media screen and (max-width: 767px) {
    min-width: 375px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Header = styled.div`
  display: flex;
  background-color: #F7F7FB;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;

//   @media screen and (max-width: 767px) {
//     min-width: 375px;
//   }

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     min-width: 768px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 1440px;
//   }
`;

export const Button = styled(Link)`
  background: #FFFFFF;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  cursor: pointer;

  :hover {
    color: #3470FF;
    box-shadow: 4px 2px 16px 0px rgba(255, 255, 255, 0.48);
  }

  padding: 14px 33.5px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding: 15.5px 28.5px;
    margin-left: 24px;
    margin-bottom: 0;
  }
`;

export const ButtonText = styled.span`
  color: #3470FF;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

  @media screen and (max-width: 767px) {
    min-width: 375px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
