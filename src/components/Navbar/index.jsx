import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import {tablet, tabletPro, laptop, laptopPro} from '../../responsive'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 2;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <Container onMouseOver={handleSubmenu}>
      <Wrapper>
        <Left>
          <Logo src={logo} alt="logo"></Logo>
          <Button onClick={openSidebar}>
            <FaBars />
          </Button>
        </Left>
        <Links>
          <Link>
            <LinkButton className='link-btn' onMouseOver={displaySubmenu}>products</LinkButton>
          </Link>
          <Link>
            <LinkButton className='link-btn' onMouseOver={displaySubmenu}>developers</LinkButton>
          </Link>
          <Link>
            <LinkButton className='link-btn' onMouseOver={displaySubmenu}>company</LinkButton>
          </Link>
        </Links>
        <SignIn>Sign in</SignIn>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 70px;
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 0 200px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  ${laptopPro({
    margin: "0 150px",
  })}

  ${laptop({
    margin: "0 100px",
  })}

  ${tabletPro({
    margin: "0 50px",
  })}

  ${tablet({
    margin: "0 20px",
  })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img``;

const Button = styled.button`
  background: #000;
  border: none;
  border-radius: 3px;
  font-size: 20px;
  color: #fff;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  display: none;

  ${tablet({
    display: "block",
    position: "absolute",
    right: "20px"
  })}
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  ${tablet({
    display: "none",
  })}
`;

const Link = styled.li`
  margin: 0 30px;

  ${tabletPro({
    margin: "0 20px"
  })}
`;

const LinkButton = styled.button`
  font-size: 20px;
  text-transform: capitalize;
  background: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 110px;
  height: 40px;
`;

const SignIn = styled.button`
  padding: 5px 15px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: gray;
  }

  ${tablet({
    display: "none",
  })}
`;

export default Navbar;
