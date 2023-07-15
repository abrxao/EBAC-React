import { FunctionComponent } from "react";
import Container from "../../Container";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import FloatButton from "@/components/FloatButton";
import { BsArrowRight } from "react-icons/bs";

const AdiClubInviteSection: FunctionComponent = () => {
  return (
    <section>
      <Container className="p-8 bg-[#ebe53f] flex flex-col items-center">
        <Title className="text-3xl text-center">
          ENTRE PARA O ADICLUB E GANHE 500 PONTOS RESGATÁVEIS
        </Title>
        <FloatButton>
          CADASTRE-SE GRATUITAMENTE <BsArrowRight size={22} />
        </FloatButton>
      </Container>
    </section>
  );
};

export default AdiClubInviteSection;
