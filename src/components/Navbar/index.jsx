import styled from "styled-components"
import logo from '../../assets/images/logo.svg'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={logo} alt="logo"></Logo>
          <Button>
            <FaBars />
          </Button>
        </Left>
        <Links>
          <Link>
            <LinkButton>products</LinkButton>
          </Link>
          <Link>
            <LinkButton>developers</LinkButton>
          </Link>
          <Link>
            <LinkButton>company</LinkButton>
          </Link>
        </Links>
        <SignIn>Sign in</SignIn>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
height: 70px;
`

const Wrapper = styled.div`
height: 100%;
margin: 0 200px;
display: grid;
grid-template-columns: auto 1fr auto;
align-items: center;

`

const Left = styled.div`
display: flex;
align-items: center;
`

const Logo = styled.img``

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
  display: none
`

const Links = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
`

const Link = styled.li`
margin: 0 30px;
`

const LinkButton = styled.button`
font-size: 20px;
text-transform: capitalize;
background: transparent;
color: #fff;
border: none;
cursor: pointer;
`
  
const SignIn = styled.button`
  padding: 5px 15px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background: gray;
  }
`

export default Navbar
