import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;

  @media screen and (max-width: 767px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    `;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 64px;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
        gap: 48px; 
        padding: 0 32px;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        gap: 228px; 
        flex-direction: row;
        padding-left: 205px;
        padding-right: 128px;

        &:nth-of-type(even) {
            flex-direction: row-reverse;
            padding-left: 128px;
            padding-right: 205px;
        }
    }
`;

export const ItemSpan = styled.div`
   
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        min-width: 275px;

        &.reverse {
            margin-left: auto;
        }
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;


export const Number = styled.div`
  color: #3470FF;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -4px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const Title = styled.h2`
  margin-top: 14px;
  margin-bottom: 14px;

  width: fit-content;
  padding: 8px 18px;
  margin-bottom: 6px;
  border-radius: 44px;
  color: #3470FF;
  background-color: #F7F7FB;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
      font-size: 40px;
      margin-bottom: 24px;
  }
`;

export const TextSpan = styled.ul`
  display: inline-block;
  color: rgba(17, 17, 17, 0.9);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #616161;

  @media screen and (min-width: 768px) {
    width: 275px;
  }
`;

export const TextItem = styled.li`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: block;
  border-radius: 40px;
  background: inherit;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    max-width: 335px;
    max-height: 457px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
    max-height: 700px;
    border-radius: 100px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 604px;
  }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
