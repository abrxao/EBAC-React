import Head from "next/head";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { ReactElement } from "react";
import Conversions from "../components/Conversions/Conversions";
import ConversionProvider from "../components/ConversionContext/ConversionContext";
import CounterProvider from "../components/Context/Context";
import ExchangeForms from "../components/ExchangeForms";

export default function Home(): ReactElement {
  return (
    <ChakraProvider>
      <Head>
        <title>Exchange Query</title>
        <meta name="description" content="Check almost all coins currency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/*@ts-ignore*/}
        <Container
          minH="100vh"
          minW="100%"
          p={[".6em", "1.2em"]}
          display="flex"
          alignItems="center"
          bgColor="#f2f2f2"
          m={0}
          flexDir="column"
          gap="3em"
        >
          <Box maxWidth="sm">
            <CounterProvider>
              <ExchangeForms />
            </CounterProvider>

            <ConversionProvider>
              <Conversions />
            </ConversionProvider>
          </Box>
        </Container>
      </main>
    </ChakraProvider>
  );
}
