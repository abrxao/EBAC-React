"use client";
import { FunctionComponent, MouseEvent, useState } from "react";
import Container from "../../Container";
import ProductsSlider from "@/components/ProductsSlider";
import Paragraph from "@/components/Paragraph";
import { BsArrowRight } from "react-icons/bs";
import LinkButton from "@/components/LinkButton";

const ProductsSection: FunctionComponent = () => {
  const [urlProducts, setUrlProducts] = useState<string>("novidades");

  function changeSection(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const name = target.innerText.toLowerCase();
    const correctName = name == "coleções" ? "colecoes" : name;
    if (name !== urlProducts) {
      setUrlProducts(correctName);
    } else {
    }
  }

  return (
    <div>
      <Container className="mt-4 pr-0">
        <div className="group flex items-center">
          <button className=" h-12" onClick={(e) => changeSection(e)}>
            <Paragraph
              className={`font-bold text-xl pr-8 translate-x-6 duration-300 ${
                urlProducts !== "novidades" && "opacity-50 translate-x-0"
              }`}
            >
              NOVIDADES
            </Paragraph>
          </button>
          <button
            className="flex items-center ml-1"
            onClick={(e) => changeSection(e)}
          >
            <Paragraph
              className={`font-bold text-xl opacity-50 ${
                urlProducts !== "novidades" && "opacity-100"
              }`}
            >
              COLEÇÕES
            </Paragraph>
          </button>
          <div
            className={`translate-x-0 -translate-y-2 duration-300 absolute ease-out ${
              urlProducts !== "novidades" && "translate-x-32"
            }`}
          >
            <BsArrowRight size={22} className="h-8" />
          </div>
        </div>
        <ProductsSlider
          id={urlProducts}
          url={`http://localhost:3004/${urlProducts}`}
        />
        <LinkButton href="#">VER TUDO</LinkButton>
      </Container>
    </div>
  );
};

export default ProductsSection;
