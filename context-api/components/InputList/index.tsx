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

const InputList: React.FC<InputList> = ({ id, disable, title, isLoading, options}) => {
  const amountValue = useCounter();
  if (!amountValue) {
    return null;
  }
  const { from, changeFrom } = amountValue;
  return (
    <div
      id={id}
    >
      <label htmlFor="autoType">
        {title}
        {isLoading && (
          <div className="loading">
            <span></span>
          </div>
        )}
        <Select
          name={id}
          onChange={e=>changeFrom(e.target.value)}
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

export default InputList;