import Head from "next/head";
import {
  Box,
  ChakraProvider,
  Text,
  keyframes,
  Container,
  Button,
} from "@chakra-ui/react";
import ContextProvider from "../components/Context/Context";
import InputList from "../components/InputList";
import { InputListTo } from "../components/InputList/InputListTo";
import { coinsName } from "../components/utils/coins";
import { FunctionComponent } from "react";
import InputAmount from "../components/InputAmount/InputAmount";
import Conversions from "../components/Conversions/Conversions";
import ConversionProvider from "../components/ConversionContext/ConversionContext";

const Home: FunctionComponent = () => {
  return (
    <ChakraProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
            <ContextProvider>
              <Box>
                <Text>Amount</Text>
                <InputAmount />
              </Box>

              <Box>
                <Text>From</Text>
                <InputList options={coinsName} />
              </Box>

              <Box paddingBottom={"1em"}>
                <Text>To</Text>
                <InputListTo options={coinsName} />
              </Box>
            </ContextProvider>
          </Box>
          <ConversionProvider>
            <Conversions />
          </ConversionProvider>
        </Container>
      </main>
    </ChakraProvider>
  );
};
export default Home;