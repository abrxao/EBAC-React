import { Input, InputProps } from "@chakra-ui/react";
import { FunctionComponent, useEffect } from "react";
import { useCounter } from "../Context/Context";
import IMask from "imask";

const InputAmount: FunctionComponent<InputProps> = (props) => {
  const amountValue = useCounter();
  useEffect(() => {
    const maskOptions = {
      mask: Number,
      isContentEditable: true,
    };
    const amount: HTMLElement | null = document.querySelector("#amount-input");
    amount ? IMask(amount, maskOptions) : () => {};
  }, []);

  if (!amountValue) {
    return null;
  }
  const { changeValue } = amountValue;

  return (
    //@ts-ignore
    <Input {...props} onChange={(e) => changeValue(e.target.value)} />
  );
};

export default InputAmount;
