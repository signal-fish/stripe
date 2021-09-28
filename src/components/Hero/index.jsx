import styled from "styled-components";
import phoneImg from "../../assets/images/phone.svg";
import hero from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <Container hero={hero}>
      <Wrapper>
        <Info>
          <Title>
            Payments infrastructure <br />
            for the internet
          </Title>
          <Text>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </Text>
          <Button>Start Now</Button>
        </Info>
        <ImageWrapper>
          <Image src={phoneImg} alt="phone image"></Image>
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 200px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

const Info = styled.div``;

const Title = styled.h1`
  font-size: 90px;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.7);
`;

const Text = styled.p`
  font-size: 30px;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: grey;
  }
`;

const ImageWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img``;
export default Hero;
