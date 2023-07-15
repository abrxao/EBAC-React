"use client";
import { FunctionComponent } from "react";
import Container from "../../Container";
import Paragraph from "@/components/Paragraph";

const Footer: FunctionComponent = () => {
  return (
    <footer>
      <Container className=" bg-[#282c31] py-4">
        <Paragraph className="text-gray-300 text-xs text-center ">
          adidas do Brasil LTDA - CNPJ/MF nº 42.274.696/0025-61 – Inscrição
          Estadual 298.144.017.112 Endereço: Rua Pataxós nº 241, Galpão 1,
          Bairro Jardim Magali, Município de Embú - SP, CEP 06833-073 | Clique
          na opção “Atendimento ao cliente”, no menu acima, e veja nossos canais
          de atendimento | 08008 234 327 ou 11 5546 3700
        </Paragraph>
      </Container>
    </footer>
  );
};

export default Footer;
