import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getPrices } from "./services";
import { painting } from "./assets";
import numeral from "numeral";

function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    getPrices()
      .then(({ data: { price } }) => {
        console.log(price);
        setPrice(price);
      })
      .catch((error) => console.log(error));
  }, [getPrices]);

  return (
    <Container>
      <Product>
        <div>Painting</div>
        <ImageContianer>
          <Image src={painting} />
        </ImageContianer>
        <div>Price: {numeral(price).format("$ 0,0")}</div>
      </Product>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ImageContianer = styled.div`
  width: 100px;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
`;
