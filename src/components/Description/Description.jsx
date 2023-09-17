import Advantages from '../../images/car_sharing01.jpg';
import Choice from '../../images/car_sharing02.jpg';
import Rent from '../../images/car_sharing03.jpg';
import {
  Container,
  List,
  Item,
  ItemSpan,
  Number,
  Title,
  TextSpan,
  TextItem,
  ImageWrapper,
  Image,
} from './Description.styled';

const Description = () => {

  return (
    <Container>
      <List>
        <Item key={1}>
          <ItemSpan>
            <Number>1.</Number>
            <div>
              <Title>ADVANTAGES</Title>              
            </div>
            <TextSpan>
              <TextItem>car rental services are more profitable than buying a car, especially if it is needed for a relatively short period of time;</TextItem>
              <TextItem>the lessor guarantees the serviceability of the car, the cleanliness and comfort of the interior. To go on the road, it is enough to simply fill in the fuel;</TextItem>
              <TextItem>freedom of movement, control of one's time and absence of outsiders;</TextItem>
              <TextItem>comfortable long-distance transportation, more profitable than a taxi.</TextItem>
            </TextSpan>
          </ItemSpan>
          <ImageWrapper>
            <Image src={Advantages} alt="Advantages car sharing" />
          </ImageWrapper>
        </Item>
        <Item key={2}>
          <ItemSpan className="reverse">
            <Number>2.</Number>
            <div>
              <Title>CHOICE</Title>
            </div>
            <TextSpan>
            <TextItem>the ability to choose almost any brand, model and type, including minivans and SUVs;</TextItem>
            <TextItem>a wide price range for all customer groups - from economy offers to electric cars, SUVs and executive class cars;</TextItem>
            <TextItem>fast processing of documents.</TextItem>
            </TextSpan>
          </ItemSpan>
          <ImageWrapper>
            <Image src={Choice} alt="Parking" />
          </ImageWrapper>
        </Item>
        <Item key={3}>
          <ItemSpan>
            <Number>3.</Number>
            <div>
              <Title>DOCUMENTS FOR RENT</Title>
            </div>
            <TextSpan>
            <TextItem>a valid driver's license with at least 2 years of experience;</TextItem>
            <TextItem>a bank card issued for the tenant to pay the security deposit;</TextItem>
            <TextItem>passport confirming adulthood (over 21);</TextItem>
            <TextItem>foreigners must provide a national passport and an international driver's license.</TextItem>
            </TextSpan>
          </ItemSpan>
          <ImageWrapper>
            <Image src={Rent} alt="Keys" />
          </ImageWrapper>
        </Item>
      </List>
    </Container>
  );
};

export default Description;
