"use client";
import { FunctionComponent } from "react";
import Container from "../../Container";
import ProductsSlider from "@/components/ProductsSlider";
import Title from "@/components/Title";

const HighlightsSection: FunctionComponent = () => {
  return (
    <div>
      <Container className="mt-4 pr-0">
        <Title className="my-8">EM DESTAQUE</Title>
        <ProductsSlider id='destaques' url={"http://localhost:3004/destaques"} />
      </Container>
    </div>
  );
};

export default HighlightsSection;
