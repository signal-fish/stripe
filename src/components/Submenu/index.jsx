import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import styled from "styled-components";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
    columns,
    setColumns,
    closeSubmenu
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    setColumns(2);
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns(3);
    }
    if (links.length > 3) {
      setColumns(4);
    }
  }, [page, location, links]);

  

  return (
    <Container
      onMouseLeave={closeSubmenu}
      isSubmenuOpen={isSubmenuOpen}
      ref={container}
    >
      <Triangle></Triangle>
      <Wrapper>
        <Page>{page}</Page>
        <Links columns={columns}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <Link key={index} href={url}>
                <Icon>{icon}</Icon>
                <Span>{label}</Span>
              </Link>
            );
          })}
        </Links>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  transition: 0.3s;
  display: ${(props) => (props.isSubmenuOpen ? "block" : "none")};
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
`;

const Triangle = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-bottom-color: #fff;
`;

const Page = styled.h4`
  display: block;
  font-size: 22px;
  text-transform: capitalize;
  padding: 0;
  margin: 20px 0;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: 20px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    opacity: 0.6;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  text-transform: capitalize;
  font-size: 18px;
`;

export default Submenu;
