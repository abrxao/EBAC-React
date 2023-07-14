"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import leoMessibanner from "@/public/images/leo_messi_banner.avif";
import Container from "../../Container";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import FloatButton from "@/components/FloatButton";

import { BsArrowRight } from "react-icons/bs";

const XCrazyFastSection: FunctionComponent = () => {
  return (
    <div>
      <Image src={leoMessibanner} alt="banner Leo Messi" />
      <Container className="-mt-56">
        <Title className="mb-4">X CRAZYFAST</Title>
        <Paragraph>Feita para a velocidade</Paragraph>
        <div className="flex items-start flex-col gap-3 mt-4">
          <FloatButton>
            COMPRAR AGORA <BsArrowRight size={22} />
          </FloatButton>
          <FloatButton>
            VER MAIS <BsArrowRight size={22} />
          </FloatButton>
        </div>
      </Container>
    </div>
  );
};

export default XCrazyFastSection;
