import React from "react";

import { act, fireEvent, render, screen } from "@testing-library/react";
import ContextProvider from "../Context/Context";
import InputAmount from "./InputAmount";
test("InputAmount mask", async () => {
  const { container } = render(
    <ContextProvider>
      <InputAmount
        maxLength={30}
        id="amount-input"
        data-testid="testid"
        type="number"
      />
    </ContextProvider>
  );
  expect(container).toMatchSnapshot();
  const input = screen.queryByTestId("testid") as HTMLInputElement;
  await act(async () => {
    fireEvent.keyPress(input, { target: { value: "aaaa" } }); //change(input,{ target: { value: "asaas" } } );
  });
  expect(input.value).toEqual("");
});
