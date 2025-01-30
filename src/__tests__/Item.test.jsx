/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "../components/organisms/Item";
import React from "react";


test("renders item with title and body", () => {
  const item = { title: "Test Item", body: "This is a test body." };

  render(<Item item={item} />);

  expect(screen.getByText("Test Item")).toBeInTheDocument();
  expect(screen.getByText("This is a test body.")).toBeInTheDocument();
});
