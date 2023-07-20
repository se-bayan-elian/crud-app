import React from "react";
import StoresCrud from "../../components/storesCrud/StoresCrud";
import { Container } from "react-bootstrap";
import StoresHeader from "../../components/storesHeader/StoresHeader";
const Home = () => {
  return (
    <main style={{paddingTop : '30px'}}>
      <Container>
        <StoresHeader></StoresHeader>
        <StoresCrud></StoresCrud>
      </Container>
    </main>
  );
};

export default Home;
