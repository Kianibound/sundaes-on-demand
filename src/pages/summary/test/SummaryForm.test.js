import { screen, render, fireEvent } from "@testing-library/react";
import { SummaryForm } from "./SummaryForm";

test("initial condition", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmbutton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmbutton).toBeDisabled();
});

test("checkbox disables button on first click and enables on secand clikl", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  const confirmbutton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);

  expect(confirmbutton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(confirmbutton).toBeDisabled();
});
