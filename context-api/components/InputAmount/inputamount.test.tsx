import React from "react";

import { act, fireEvent, render, screen } from "@testing-library/react";
import ContextProvider from "../Context/Context";
import InputAmount from "./InputAmount";

describe("InputAmount mask tests", () => {
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
  const input = screen.queryByTestId("testid") as HTMLInputElement;

  test("InputMask Snapshot", async () => {
    expect(container).toMatchSnapshot();
  });

  test("should clear the input value when non-numeric characters are entered", async () => {
    await act(async () => {
      fireEvent.keyPress(input, { target: { value: "aaaa" } });
    });
    expect(input.value).toEqual("");
  });

  test("should allow numeric characters in the input", async () => {
    await act(async () => {
      fireEvent.keyPress(input, { target: { value: "123" } }); //change(input,{ target: { value: "asaas" } } );
    });
    expect(input.value).toEqual("123");
  });
});
