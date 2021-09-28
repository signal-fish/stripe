import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Button>
          <FaTimes />
        </Button>
        <LinksWrapper>
          <Links>
            <Page></Page>
            <Link></Link>
          </Links>
        </LinksWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``

const Wrapper = styled.div``

const Button = styled.button``

const LinksWrapper = styled.div``

const Page = styled.h4``

const Links = styled.div``;

const Link = styled.a``

export default Sidebar;
