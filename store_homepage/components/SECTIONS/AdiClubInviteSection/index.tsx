"use client";
import { FunctionComponent } from "react";
import Container from "../../Container";
import Title from "@/components/Title";
import FloatButton from "@/components/FloatButton";
import { BsArrowRight } from "react-icons/bs";
import useGlobalState from "@/stores/modalStore";

const AdiClubInviteSection: FunctionComponent = () => {
  const { setIsAlertOpen } = useGlobalState();
  return (
    <section>
      <Container className="p-8 bg-[#ede734] flex flex-col items-center">
        <Title className="text-3xl text-center mb-4">
          ENTRE PARA O ADICLUB E GANHE 500 PONTOS RESGATÁVEIS
        </Title>
        <FloatButton onClick={(e) => setIsAlertOpen(true)}>
          CADASTRE-SE GRATUITAMENTE <BsArrowRight size={22} />
        </FloatButton>
      </Container>
    </section>
  );
};

export default AdiClubInviteSection;
