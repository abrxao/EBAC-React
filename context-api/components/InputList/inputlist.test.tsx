import React from "react";

import { act, fireEvent, render, screen } from "@testing-library/react";
import ContextProvider from "../Context/Context";
import InputList from ".";

describe("InputList tests", () => {
  const options = ["option0", "option1", "option2", "option3", "option4"];
  const testid = "input-list-test";
  const { container } = render(
    <ContextProvider>
      <InputList data-testid={testid} options={options} />
    </ContextProvider>
  );
  const input = screen.queryByTestId(testid) as HTMLInputElement;

  test("should change selected value", async () => {
    await act(async () => {
      fireEvent.change(input, { target: { value: options[0] } }); //change(input,{ target: { value: "asaas" } } );
    });
    expect(input.value).toEqual(options[0]);
  });

  test("should not change to a value different of 'options' array values", async () => {
    await act(async () => {
      fireEvent.change(input, { target: { value: "" } }); //change(input,{ target: { value: "asaas" } } );
    });
    expect(input.value).toEqual("");
  });
});
