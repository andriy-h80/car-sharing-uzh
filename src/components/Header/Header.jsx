import React from 'react';
import { HeaderContainer, Image, Title, TitleSpan, Button, ButtonText} from './Header.styled';
import Logo from '../../images/logo.png';

const Header = () => {
    return (
      <HeaderContainer>
        <Image src={Logo} alt="Logo" width={50} height={50}/>
        <Title>
            UZHGO<TitleSpan>RIDE</TitleSpan>
        </Title>
        <Button to='/'>
            <ButtonText>
                HOME
            </ButtonText>
        </Button>
        <Button to='catalog'>
            <ButtonText>    
                CATALOG
            </ButtonText>
        </Button>
        <Button to='favorite'>
            <ButtonText>
                FAVORITE    
            </ButtonText>
        </Button>
      </HeaderContainer>
    );
  };
  
  export default Header;