import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
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
