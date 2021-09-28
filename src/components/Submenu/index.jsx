import  { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
  } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <Page>{page}</Page>
        <Links>
          <Link></Link>
        </Links>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``

const Wrapper = styled.div``

const Page = styled.h4``

const Links = styled.div``

const Link = styled.a``

export default Submenu;
