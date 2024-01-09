import React from "react";

import { act, fireEvent, render, screen } from "@testing-library/react";
import Home from ".";

describe("Home user tests", () => {
  const { container } = render(<Home />);
  test("home snapshot", async () => {
    expect(container).toMatchSnapshot();
  });
  test("seting values to input components", async () => {
    const fromCoin = "Afghani (AFN)";
    const toCoin = "Real brasileiro (BRL)";
    const amount = "100";
    render(<Home />);
    const inputFrom = screen.queryByTestId(
      "input-list-from"
    ) as HTMLInputElement;
    const inputTo = screen.queryByTestId("input-list-to") as HTMLInputElement;
    const inputAmount = screen.getByRole("textbox") as HTMLInputElement;

    await act(async () => {
      fireEvent.select(inputFrom, { target: { value: fromCoin } });
      fireEvent.select(inputTo, { target: { value: toCoin } });
      fireEvent.change(inputAmount, { target: { value: amount } });
    });
    expect(inputFrom.value).toEqual(fromCoin);
    expect(inputTo.value).toEqual(toCoin);
    expect(inputAmount.value).toEqual(amount);
  });
});
