import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("ThirdPane functionality", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("opens ThirdPane with Sprinklr Insights description when clicked", () => {
    fireEvent.click(screen.getByTestId("option-ROHVOIRYNM"));
    expect(screen.getByText("Sprinklr Insights")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Advanced analytics platform that provides deep insights into customer behavior and market trends through comprehensive data collection and analysis."
      )
    ).toBeInTheDocument();
  });

  test("back button should not be visible when only one option is clicked", () => {
    fireEvent.click(screen.getByTestId("option-ROHVOIRYNM"));
    expect(screen.queryByTestId("back-button")).not.toBeInTheDocument();
  });

  test("back button should be visible when two options are clicked", () => {
    fireEvent.click(screen.getByTestId("option-ROHVOIRYNM"));
    fireEvent.click(screen.getByTestId("option-D4N2BL8KAD"));
    expect(screen.getByTestId("back-button")).toBeInTheDocument();
  });

  test("going back to previous pane when back button is clicked", () => {
    fireEvent.click(screen.getByTestId("option-ROHVOIRYNM"));
    fireEvent.click(screen.getByTestId("option-D4N2BL8KAD"));
    fireEvent.click(screen.getByTestId("back-button"));
    expect(screen.getByText("Sprinklr Insights")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Advanced analytics platform that provides deep insights into customer behavior and market trends through comprehensive data collection and analysis."
      )
    ).toBeInTheDocument();
  });

  test("close button closes the ThirdPane", () => {
    fireEvent.click(screen.getByTestId("option-ROHVOIRYNM"));
    fireEvent.click(screen.getByTestId("close-button"));
    expect(screen.queryByTestId("third-pane")).not.toBeInTheDocument();
  });
});
