import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import sublinks from "../../data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <Wrapper>
        <Button onClick={closeSidebar}>
          <FaTimes />
        </Button>
        <LinksContainer>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <LinksWrapper>
                <Page>{page}</Page>
                <Links>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <Link>
                        <Icon>{icon}</Icon>
                        <Span>{label}</Span>
                      </Link>
                    );
                  })}
                </Links>
              </LinksWrapper>
            );
          })}
        </LinksContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${(props) => (props.isSidebarOpen ? "visible" : "hidden")};
  transition: 0.6s;
  transform-origin: center;
  transform: ${(props) => (props.isSidebarOpen ? "scale(1)" : "scale(0)")};
  z-index: ${(props) => (props.isSidebarOpen ? "2" : "-1")};
`;

const Wrapper = styled.div`
  height: 80%;
  width: 80%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  `;

const Button = styled.button`
  position: absolute;
  display: block;
  right: 0;
  background: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.8);
  font-size: 30px;
  cursor: pointer;
  margin: 20px;
`;

const LinksContainer = styled.div`
  margin: 80px 15px 0px 15px;
`;

const LinksWrapper = styled.div`
  margin-bottom: 30px;
`;

const Page = styled.h4`
font-size: 20px;
font-weight: 700;
text-transform: capitalize;
margin: 0 0 20px 0;
`;

const Links = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
row-gap: 10px;
`;

const Link = styled.a`
display: flex;
align-items: center;


`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
`;

const Span = styled.span`
  text-transform: capitalize;
  font-size: 16px;
  color: rgba(0, 0, 0, .6)
`;

export default Sidebar;
