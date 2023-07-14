"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import banner from "@/public/images/first_banner_geisa.webp";
import Container from "../../Container";
import Link from "next/link";
import Title from "@/components/Title";
import LinkButton from "@/components/LinkButton";
import Paragraph from "@/components/Paragraph";

const MainBanner: FunctionComponent = () => {
  return (
    <div>
      <Image src={banner} alt="banner Geisa Ferreira" />
      <Container className="-mt-28 bg-light-gray pb-6">
        <Title>JOGUE ATÉ QUE NÃO POSSAM TE IGNORAR</Title>
        <Paragraph>
          E continue jogando até que eles não consigam parar de olhar
        </Paragraph>
        <div className="flex flex-col items-start space-y-4">
          <LinkButton href="#">COMPRAR AGORA</LinkButton>
          <LinkButton href="#">VER MAIS</LinkButton>
        </div>
      </Container>
    </div>
  );
};

export default MainBanner;
