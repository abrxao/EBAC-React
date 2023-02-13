import { Input } from "@chakra-ui/react";
import { FunctionComponent, useEffect } from "react";
import { useCounter } from "../Context/Context";
import IMask from "imask";

const InputAmount: FunctionComponent = ()=>{
    const amountValue = useCounter();
    useEffect(() => {
      const maskOptions = {
        mask: Number,
        isContentEditable: true,
      };
      const amount: HTMLElement | null = document.querySelector("#amount");
      amount ? IMask(amount, maskOptions) : () => {};
    }, []);

    if(!amountValue){
        return null
    }
    const {value, changeValue} = amountValue;

    return (
      <>
        <Input maxLength={30} id="amount" onChange={e=>changeValue(e.target.value)}/>
      </>
    );
}

export default InputAmount;