import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import App from "../App";

test("home page texts renders correctly", () => {
  render(<App />);
  expect(screen.getByText("Welcome to Country App")).toBeOnTheScreen();
  expect(screen.getByText("Insert your email to start.")).toBeOnTheScreen();
});

test("direct next page after login", () => {
  const app = render(<App />);

  const button = screen.getByLabelText("Next Button");
  fireEvent.changeText(screen.getByLabelText("Email"), "anilakgunes@gmail.com");
  expect(button).not.toBeDisabled();

  fireEvent.changeText(screen.getByLabelText("Email"), "notEmailFormat");
  expect(button).toBeDisabled();
});

test("check search", () => {
  const app = render(<App />);

  const button = screen.getByLabelText("Next Button");
  fireEvent.changeText(screen.getByLabelText("Email"), "anilakgunes@gmail.com");
  fireEvent.press(button);

  expect(screen.getByText("Countries List")).toBeOnTheScreen();
  expect(screen.getByText("Number of countries : 0")).toBeOnTheScreen();

  // I don't know much about mock server and API related testing in this enviroment. React Native Testing Lİbrary are not much helpful in that case.
});
