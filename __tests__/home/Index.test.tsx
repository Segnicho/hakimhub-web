import Home from "@/pages";
import { store } from "@/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const mockPush = jest.fn();
useRouter.mockReturnValue({ push: mockPush });

test("renders Home page with all child components", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(screen.getByTestId("hero")).toBeInTheDocument();

  expect(screen.getByTestId("search")).toBeInTheDocument();

  expect(screen.getByTestId("services")).toBeInTheDocument();

  expect(screen.getByTestId("about-us")).toBeInTheDocument();

  expect(screen.getByTestId("mission-vision")).toBeInTheDocument();
  
  expect(screen.getByText("Vision")).toBeInTheDocument();

  expect(screen.getByText("Mission")).toBeInTheDocument();

  expect(screen.getByTestId("hospitals")).toBeInTheDocument();
});
