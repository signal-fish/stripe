import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import hero from "./assets/images/hero.svg";
import Submenu from "./components/Submenu";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Container hero={hero}>
      <Navbar />
      <Sidebar></Sidebar>
      <Hero />
      <Submenu />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.hero});
  background-origin: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default App;
