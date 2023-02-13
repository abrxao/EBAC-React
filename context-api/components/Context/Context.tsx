import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface CounterContextValue {
  value: number;
  changeValue: (newValue: string) => void;
  from: string;
  changeFrom: (newValue: string) => void;
  toCoin: string;
  changeToCoin: (newValue: string) => void;
}

const CounterContext = createContext<CounterContextValue | undefined>(
  undefined
);

const CounterProvider: FunctionComponent<PropsWithChildren> = ({
  children
}) => {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("");
  const [toCoin, setToCoin] = useState("");
  const [isLoading, setLoading] = useState(false);

  const config = {
    headers: {
      apikey: "R2F7prjaKsQiUrLLkJnxQu4MIOJGXWV3",
    },
  };

  const request = async (from: string, to: string, amount: number) => {
    setLoading(true);
    await axios
      .get(
        `https://api.apilayer.com/fixer/convert?to=${to.slice(
          to.length - 4,
          to.length - 1
        )}&from=${from.slice(
          from.length - 4,
          from.length - 1
        )}&amount=${amount}`,
        config
      )
      .then((res) => {
        setLoading(false);
        const conversion = {
          from: from,
          amount: amount,
          to: toCoin,
          result: res.data.result,
          date:Date.now(),
        };

        if (localStorage.conversions) {
          var array = JSON.parse(localStorage.conversions);
          var aux = array.map((elem: any) => {
            return elem;
          });

          aux.push(conversion);

          localStorage.setItem("conversions", JSON.stringify(aux));
          window.dispatchEvent(new Event("storage"));
        } else {
          localStorage.setItem("conversions", JSON.stringify([conversion]));
          window.dispatchEvent(new Event("storage"));
        }
      })
      .catch((erro) => {
        console.log(erro);
        setLoading(false);
      });
    setValue(0);
    setToCoin("");
    setFrom("");
  };

  const handleSend = () => {
    if (value && from && toCoin) {
      request(from, toCoin, value);

      const input = document.querySelector("input");
      input ? (input.value = "0") : () => {};
      document.querySelectorAll("select").forEach((select) => {
        select.value = "";
      });
    }
  };

  const changeValue = (newValue: string) => {
    const number = parseFloat(newValue.replace(",", "."));
    setValue(number);
  };

  const changeFrom = (newFrom: string) => {
    setFrom(newFrom);
  };

  const changeToCoin = (newToCoin: string) => {
    setToCoin(newToCoin);
  };

  return (
    <CounterContext.Provider
      value={{
        value,
        changeValue,
        from,
        changeFrom,
        toCoin,
        changeToCoin,
      }}
    >
      {children}
      <Button
        onClick={handleSend}
        w="100%"
        bg="#A17C6B"
        color="#f2f2f2"
        _hover={{
          bg: "#A17C6B",
          filter: "brightness(110%)",
          letterSpacing: "1px",
        }}
        isLoading={isLoading}
        loadingText="getting conversion..."
      >
        convert
      </Button>
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  return context;
};

export default CounterProvider;
