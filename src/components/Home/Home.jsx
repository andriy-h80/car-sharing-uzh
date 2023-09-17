import {
    Container,
    Header,
    // Title,
    // TitleSpan,
    Button,
    // Icon,
    // List,
    // Item,
    // ItemSpan,
    // TextSpan,
    ImageWrapper,
    Image,
    // ItemIconLinkedin,
    // ItemIconGithub,
  } from './Home.styled';
import MainPhoto from '../../images/holovna.png';

const Home = () => {
    return (
        <Container>
            <Header>
                <Button to='catalog'>CATALOG</Button>
                <Button to='favorite'>FAVORITE</Button>
            </Header>
            <ImageWrapper>
                <Image src={MainPhoto} alt="Man with phone" />
            </ImageWrapper>

        </Container>
    )
};

export default Home;