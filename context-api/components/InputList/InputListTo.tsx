import { Select } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useCounter } from "../Context/Context";

interface InputList {
  id?: string;
  disable?: boolean;
  title?: string;
  isLoading?: boolean;
  options: string[];
}

export const InputListTo: React.FC<InputList> = ({
  id,
  disable,
  title,
  isLoading,
  options,
}) => {
  const amountValue = useCounter();
  if (!amountValue) {
    return null;
  }
  const {changeToCoin } = amountValue;
  return (
    <div id={id}>
      <label htmlFor="autoType">
        {title}
        {isLoading && (
          <div className="loading">
            <span></span>
          </div>
        )}
        <Select
          name={id}
          onChange={(e) => changeToCoin(e.target.value)}
          style={{ display: isLoading ? "none" : "block" }}
        >
          {options.map((tipo, index) => {
            return (
              <option key={index}>
                {tipo[0].toUpperCase() + tipo.substring(1)}
              </option>
            );
          })}
        </Select>
      </label>
    </div>
  );
};
