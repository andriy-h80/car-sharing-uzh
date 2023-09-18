import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color:rgba(255, 255, 255, 0.5); 
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100vh;
  padding: 0;

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
  position: sticky;
  top: 0;
  display: flex;
  background-color: #F7F7FB;
  text-align: center;
  width: 100%;
  justify-content: right;
  align-items: center;
  padding: 10px 0;

//   @media screen and (max-width: 767px) {
//     max-width: 375px;
//   }

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     min-width: 768px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 1440px;
//   }
`;

export const Button = styled(Link)`
  background: #3470FF;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  margin-right: 10px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  cursor: pointer;

  :hover {
    color: #FFFFFF;
    box-shadow: 4px 2px 16px 0px rgba(255, 255, 255, 0.48);
  }

  padding: 10px 15px;

  @media screen and (min-width: 768px) {
    padding: 15.5px 28.5px;
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

export const ButtonText = styled.span`
  color: #FFFFFF;
  font-family: inherit;
  font-size: 16px;
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
