import { FunctionComponent } from "react";
import Container from "../../Container";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";

const About: FunctionComponent = () => {
  return (
    <section>
      <Container className="bg-yellow-50 p-8 ">
        <Title className="text-4xl">
          ADIDAS: HISTÓRIA ESTILO E MATERIAL ESPORTIVO DESDE 1949
        </Title>
        <Paragraph className="tracking-tight">
          O esporte mantém o corpo e a mente em forma. E as pessoas mais
          próximas. Com o esporte, temos o poder de mudar vidas. Pode ser
          através de histórias emocionantes e atletas que te incentivam a
          levantar, fazer alguma coisa. Ou quem sabe uma simples tecnologia de
          performance em uma loja de material esportivo, na medida para melhorar
          o seu desempenho, quebrar seu recorde. Não é à toa que todos sentem-se
          em casa na adidas: corredores, jogadores de basquete, boleiros e
          qualquer um que goste de treinar. Tanto faz se você gosta de natureza
          e adrenalina, ou da paz interior, do yoga e da cidade. As três listras
          estão em tudo. Na cena musical, palcos, festivais. Mentalizando a
          vitória, antes do apito inicial. Na meio da corrida. Na linha de
          chegada. A gente tá sempre lá para quem cria. Para melhorar
          performances. Melhorar vidas e mudar o mundo.
          <br />
          <br /> A adidas é mais do que roupas de treino e esportivas. Temos
          collabs com os melhores para criar em conjunto. Assim, podemos
          oferecer roupas esportivas aos nossos torcedores e atletas, além de
          looks que tem tudo a ver com eles, sem esquecer da sustentabilidade,
          claro. A gente tá sempre lá para quem cria. Para melhorar
          performances. Fazer diferente. Lembrando sempre do nosso impacto no
          planeta.
        </Paragraph>
        <Title className="text-4xl mt-8">
          SUA LOJA DE ESPORTES PARA TODAS AS HORAS
        </Title>
        <Paragraph className="tracking-tight">
          Design adidas para atletas de todos os tipos. Mentes criativas que amam mudar o jogo. Desafiar o bom senso. Quebrar as regras, escrever outras. Quebrar estas regras também. Somos a loja de esportes que fornece roupas pré-jogo para times e craques que precisam de foco total. Fabricamos produtos que cruzam a linha de chegada e vencem a partida com você. Somos a loja de artigos esportivos pensados para as mulheres, com tops e leggings perfeitos para o seu treino, seja ele de alto ou baixo impacto. Desenhamos, inovamos, recriamos. Testamos novas tecnologias em ação: em campo, nas pistas, nas quadras, nas piscinas. Nossas linhas de spostswear voltam no tempo e servem de base para o look street, com peças como o tênis NMD e os agasalhos Firebird. Ícones ganham vida de novo em sneakers como Stan Smith e Superstar, donos das ruas e dos palcos. Nós somos a loja esportiva das Três Listras. Nós somos a casa dos creators.
          <br />
          <br /> Nossos produtos são feitos para derrubar as barreiras entre
          alta moda e alta performance. A nossa coleção esportiva adidas by
          Stella McCartney, por exemplo, foi desenvolvida para mandar bem dentro
          e fora da academia. Além disso, as peças adidas Originals não são só
          estilo. Elas também podem ser usadas como moda esportiva. Nossas vidas
          mudam o tempo todo e são cada vez mais versáteis. O design da adidas
          leva isso em consideração.
        </Paragraph>
      </Container>
    </section>
  );
};

export default About;
