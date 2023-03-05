import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface CoversionValue {
  conversions: any;
  changeConversions: (array: any) => void;
}

const ConversionContext = createContext<CoversionValue | undefined>(undefined);

const ConversionProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [conversions, setConversions] = useState([]);

  const changeConversions = (array: any) => {
    setConversions(array);
  };

  return (
    <ConversionContext.Provider value={{ conversions, changeConversions }}>
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversion = () => {
  const context = useContext(ConversionContext);
  return context;
};

export default ConversionProvider;
