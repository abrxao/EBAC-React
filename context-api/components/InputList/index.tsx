import { InputProps, Select, SelectProps } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useCounter } from "../Context/Context";

interface InputList extends SelectProps {
  id?: string;
  disabled?: boolean;
  title?: string;
  isLoading?: boolean;
  options: string[];
}

const InputList: React.FC<InputList> = ({
  id,
  disabled,
  title,
  isLoading,
  options,
  ...props
}) => {
  return (
    <div id={id}>
      <label htmlFor="autoType">
        {title}
        {isLoading && (
          <div className="loading">
            <span></span>
          </div>
        )}
        {/*@ts-ignore*/}
        <Select {...props}>
          {options.map((tipo, index) => {
            return (
              <option value={tipo} key={index}>
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
