import { Container, TextSpan, Text, Button } from './Footer.styled';

const Footer = () => {

  return (
    <Container>
      <TextSpan>
        &copy; 2023 |  All Rights Reserved  |&nbsp;
      </TextSpan>
      <Text>
        Developed by
        <Button 
          href="https://www.linkedin.com/in/andriy-hanzel/"
          target="_blank">
            AnH
        </Button>
      </Text>
    </Container>
  );
};

export default Footer;
