import { FunctionComponent } from "react";
import InputList from "../InputList";
import { coinsName } from "../utils/coins";
import { useCounter } from "../Context/Context";
import { Box, Tag, Text } from "@chakra-ui/react";
import InputAmount from "../InputAmount/InputAmount";
const ExchangeForms: FunctionComponent = () => {
  const amountValue = useCounter();
  if (!amountValue) {
    return (
      <>
        {/*@ts-ignore*/}
        <Tag>Error</Tag>
      </>
    );
  }
  const { changeFrom, changeToCoin } = amountValue;

  return (
    <>
      {/*@ts-ignore*/}
      <Box>
        {/*@ts-ignore*/}
        <Text>Amount</Text>
        <InputAmount maxLength={30} id="amount-input" data-testid="testid" />
      </Box>

      <Box>
        <Text>From</Text>
        <InputList
          data-testid="input-list-from"
          onChange={(e) => changeFrom(e.target.value)}
          options={coinsName}
        />
      </Box>

      <Box paddingBottom={"1em"}>
        <Text>To</Text>
        <InputList
          data-testid="input-list-to"
          onChange={(e) => changeToCoin(e.target.value)}
          options={coinsName}
        />
      </Box>
    </>
  );
};

export default ExchangeForms;
