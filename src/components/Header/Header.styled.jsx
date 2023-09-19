import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #F7F7FB;
  padding: 10px;
`;

export const Image = styled.img`

  margin-left: 5px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 30px;
  }

`;

export const Title = styled.h1`
  color: #111111;
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: -0.28px;

  margin-left: 5px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
   
    margin-left: 20px;
    margin-right: 30px;
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
   
    margin-left: 30px;
    margin-right: 50px;
    font-size: 32px;
  }
`;

export const TitleSpan = styled.span`
  color: #3470FF;
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const Button = styled(Link)`
  background: #3470FF;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  // margin-right: 10px;
  margin-left: 10px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #FFFFFF;
    box-shadow: 4px 2px 16px 0px rgba(255, 255, 255, 0.48);
  }

  padding: 10px 15px;

  @media screen and (min-width: 768px) {
    padding: 15.5px 28.5px;
    // margin-right: 24px;
    margin-bottom: 0;
  }

  :active {
    text-decoration: underline;
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
