"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import leoMessibanner from "@/public/images/leo_messi_banner.webp";
import Container from "../../Container";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import FlutterButton from "@/components/FlutterButton";

import { BsArrowRight } from "react-icons/bs";

const XCrazyFastSection: FunctionComponent = () => {
  return (
    <div>
      <Image src={leoMessibanner} alt="banner Leo Messi" />
      <Container className="-mt-64">
        <Title className="mb-4">X CRAZYFAST</Title>
        <Paragraph>Feita para a velocidade</Paragraph>
        <div className="flex items-start flex-col gap-3 mt-5">
          <FlutterButton>
            COMPRAR AGORA <BsArrowRight size={22} />
          </FlutterButton>
          <FlutterButton>
            VER MAIS <BsArrowRight size={22} />
          </FlutterButton>
        </div>
      </Container>
    </div>
  );
};

export default XCrazyFastSection;
