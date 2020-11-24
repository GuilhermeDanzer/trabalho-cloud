import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &&:after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 1px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: #ffffff82;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex:1;
  justify-content: space-around;
  align-items: baseline;
}
`;
const ItensNav = styled.div`
  transition: all 0.45s ease;
  cursor: pointer;
  color: #ffffff;
  &&:hover {
    color: #020;
  }
`;

const Texto = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <ItensNav>
            <Texto>Home</Texto>
          </ItensNav>
        </Link>
        <Link href="/info">
          <ItensNav>
            <Texto>Info</Texto>
          </ItensNav>
        </Link>
        <Link href="/video">
          <ItensNav>
            <Texto>Video</Texto>
          </ItensNav>
        </Link>
      </Nav>
    </Wrapper>
  );
};
