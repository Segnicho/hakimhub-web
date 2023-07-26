// Chat.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import Chat from "./Chat";
import { Provider } from "react-redux";
import {store} from "../../store/index"; 

describe("Chat component", () => {
  test("renders the input and button elements", () => {
    const { getByLabelText, getAllByRole  } = render(
        <Provider store={store}>
        <Chat setLoading={() => {}} />
      </Provider>
    );

    // Check if the input element is displayed and visible
    const inputElement = getByLabelText("message");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeVisible();

    // Check if all the button elements are displayed and visible
    const buttonElements = getAllByRole("button");
    expect(buttonElements).toHaveLength(2);
    buttonElements.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });
  });
});
