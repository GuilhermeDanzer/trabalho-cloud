import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  padding-right: 10px;
`;
const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <h3>Nome: Guilherme Danzer </h3>
          <h3>R.A: 1113611 </h3>
          <h3>Semestre: 8º </h3>
        </Card>
        <Card>
          <h3>Nome: Mateus Girardi </h3>
          <h3>R.A: 1113444 </h3>
          <h3>Semestre: 8º </h3>
        </Card>
        <Card>
          <h3>Nome: Flademir Albuquerque </h3>
          <h3>R.A: 1114525 </h3>
          <h3>Semestre: 8º </h3>
        </Card>
        <Card>
          <h3>Nome: Calven Martins </h3>
          <h3>R.A: 1112197 </h3>
          <h3>Semestre: 10º </h3>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Home;
