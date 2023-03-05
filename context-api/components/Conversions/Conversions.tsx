import { Box, keyframes, Text, Tooltip } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useConversion } from "../ConversionContext/ConversionContext";

const animationKeyframes = keyframes`
  0% { background-position-x: 0%}
  100% { background-position-x: -300%}
  `;

const animation = `${animationKeyframes} 2s linear infinite`;

const Conversions: FunctionComponent = () => {
  const convertContext = useConversion();

  useEffect(() => {
    if (window !== undefined) {
      const localConversions = localStorage.conversions ?? " ";
      const conversions =
        localConversions.trim() !== ""
          ? JSON.parse(localConversions).reverse()
          : [];
      convertContext?.changeConversions(conversions);
      window.addEventListener("storage", (e) => {
        convertContext?.changeConversions(
          JSON.parse(localStorage.conversions).reverse()
        );
      });
    }
  }, []);

  const handleDate: Function = (ms: number) => {
    const date = new Date(ms);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month: string = months[date.getMonth()];
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    return (
      <>
        {day} of {month} of <b>{year}</b>
        <br />
      </>
    );
  };
  return (
    <Box maxWidth="sm" w="100%">
      {!convertContext?.conversions && (
        <Box>
          <Text>SEM RESPOSTAS AINDA</Text>
        </Box>
      )}

      {convertContext?.conversions && (
        <>
          {convertContext?.conversions.map((conversion: any, index: number) => {
            return (
              <Box
                key={index}
                w="100%"
                p={[".6em", "1.2em"]}
                pt={["1.6em", "2.5em"]}
                display="flex"
                justifyContent="space-between"
                border={["1px solid #A17C6B33", "2px solid #A17C6B33"]}
                borderRadius=".8em"
                marginY="1em"
                position="relative"
              >
                <Box maxWidth={[110, 140]}>
                  <Box>
                    <Text
                      fontSize={[".55em", ".8em"]}
                      textAlign="left"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      {conversion.from}
                    </Text>
                  </Box>
                  <Tooltip
                    label={conversion.amount.toLocaleString("en-US", {
                      style: "currency",
                      currency: conversion.from.slice(
                        conversion.from.length - 4,
                        conversion.from.length - 1
                      ),
                      minimumFractionDigits: 2,
                    })}
                  >
                    <Text
                      fontSize={[".8em", "1.2em"]}
                      fontWeight="bold"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      {conversion.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: conversion.from.slice(
                          conversion.from.length - 4,
                          conversion.from.length - 1
                        ),
                        minimumFractionDigits: 2,
                      })}
                    </Text>
                  </Tooltip>
                </Box>

                <Box
                  fontSize={[".6em", "1.6em"]}
                  color="#3C887E"
                  bgGradient="linear(125deg, #E0F2E9 15%, #CEB5A7, #E0F2E9 85%)"
                  backgroundSize="300%"
                  borderRadius="4px"
                  display={"flex"}
                  position="absolute"
                  left={"calc(50% - .7em)"}
                  top={"calc(60% - .7em)"}
                  fontWeight="bold"
                  animation={animation}
                >
                  <BsFillArrowRightSquareFill />
                </Box>

                <Box
                  position={"absolute"}
                  top=".3em"
                  width={"calc(100% - 2em)"}
                >
                  <Text fontSize={[".55em", ".8em"]} textAlign="center">
                    {handleDate(conversion.date)}
                  </Text>
                </Box>

                <Box maxWidth={[110, 140]}>
                  <Box>
                    <Text
                      fontSize={[".55em", ".8em"]}
                      textAlign="right"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      {conversion.to}
                    </Text>
                  </Box>
                  <Tooltip
                    label={conversion.result.toLocaleString("en-US", {
                      style: "currency",
                      currency: conversion.to.slice(
                        conversion.to.length - 4,
                        conversion.to.length - 1
                      ),
                      minimumFractionDigits: 2,
                    })}
                  >
                    <Text
                      fontSize={[".8em", "1.2em"]}
                      fontWeight="bold"
                      textAlign={"right"}
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      {conversion.result.toLocaleString("en-US", {
                        style: "currency",
                        currency: conversion.to.slice(
                          conversion.to.length - 4,
                          conversion.to.length - 1
                        ),
                        minimumFractionDigits: 2,
                      })}
                    </Text>
                  </Tooltip>
                </Box>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Conversions;
