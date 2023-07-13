"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import leoMessibanner from "@/public/images/leo_messi_banner.webp";
import Container from "../../Container";
import Title from "@/components/Title";

const XCrazyFastSection: FunctionComponent = () => {
  return (
    <div>
      <Image src={leoMessibanner} alt="banner Leo Messi" />
      <Container>
        <Title>X CRAZYFAST</Title>
      </Container>
    </div>
  );
};

export default XCrazyFastSection;
