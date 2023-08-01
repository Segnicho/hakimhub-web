import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import HospitalDetailPage from "@/pages/hospitals/[id]";
import { store } from "@/store";
import { useGetHospitalByIdQuery } from "@/store/features/hospital/hospital-detail-api";
import { hospitalResponse } from "@/__tests__/mocks/hospital";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const mockPush = jest.fn();
useRouter.mockReturnValue({ push: mockPush });

useRouter.mockReturnValue({
  push: mockPush,
  query: { id: "5084ab2b-3d91-441a-9586-362e11da060c" },
});

jest.mock("@/store/features/hospital/hospital-detail-api", () => ({
  ...jest.requireActual("@/store/features/hospital/hospital-detail-api"),
  useGetHospitalByIdQuery: jest.fn(),

}));

test("renders Hospital Detail Page with Correct Data of the hospital", async () => {
  (useGetHospitalByIdQuery as jest.Mock).mockReturnValue({
    data: hospitalResponse,
    isLoading: false,
    isError: false,
    isSuccess: true,
  });

  render(
    <Provider store={store}>
      <HospitalDetailPage />
    </Provider>
  );

    await screen.getByTestId("hospital-detail-page");
    await screen.getByText(hospitalResponse.value.summary)
    await screen.getByText("Paulos")
    await screen.getAllByText("Overview")
    await screen.getAllByText("Doctors")
    await screen.getAllByText("Gallery")
    await screen.getByText("About Us")

});

test("displays loading state while fetching data", async () => {
  (useGetHospitalByIdQuery as jest.Mock).mockReturnValue({
    isLoading: true,
  });

  render(
    <Provider store={store}>
      <HospitalDetailPage />
    </Provider>
  );
  const loadingElement = await screen.getAllByRole("load");
  expect(loadingElement).toHaveLength(2);
});

test("displays error state when fetching data fails", async () => {
  (useGetHospitalByIdQuery as jest.Mock).mockReturnValue({
    isError: true,
  });

  render(
    <Provider store={store}>
      <HospitalDetailPage />
    </Provider>
  );

  const errorHeadingElement = screen.getByText("Oops!");
  const errorMessageElement = screen.getByText("Something went wrong.");
  const backButtonElement = screen.getByText("Back to Home");

  expect(errorHeadingElement).toBeInTheDocument();
  expect(errorMessageElement).toBeInTheDocument();
  expect(backButtonElement).toBeInTheDocument();
});