import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import HospitalsPage from "@/pages/hospitals";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import { hospitalsResponse } from "../mocks/hospitals";
import { store } from "@/store";

// Mock the useGetHospitalsQuery hook

jest.mock("@/store/features/hospital/hospitals-api", () => ({
  ...jest.requireActual("@/store/features/hospital/hospitals-api"),
  useGetHospitalsQuery: jest.fn(),
}));

test("renders Hospitals Page with Correct Data of hospitals", async () => {
  (useGetHospitalsQuery as jest.Mock).mockReturnValue({
    data: hospitalsResponse,
    isLoading: false,
    isError: false,
  });

  render(
    <Provider store={store}>
      <HospitalsPage />
    </Provider>
  );

  // Check if the HospitalFiltering component is rendered
  await screen.findAllByText("Filter Hospitals");

  // Check if the HospitalsList component is rendered with the correct hospitals data
  await screen.findByText("Paulos");
  await screen.findByText("Yekatit");
});



test("renders loading state correctly", async () => {
  // Mock the useGetHospitalsQuery hook with isLoading=true
  (useGetHospitalsQuery as jest.Mock).mockReturnValue({
    data:null,
    isLoading: true,
    isError: false,
  });

  render(
    <Provider store={store}>
      <HospitalsPage />
    </Provider>
  );

  await screen.findAllByTestId("loading-hospital");
});

test("renders error state correctly", async () => {
  // Mock the useGetHospitalsQuery hook with isError=true
  (useGetHospitalsQuery as jest.Mock).mockReturnValue({
    isLoading: false,
    isError: true,
  });

  render(
    <Provider store={store}>
      <HospitalsPage />
    </Provider>
  );

  // Check if the error state is displayed
  await screen.findByText("Oops!");
});


test("renders NoData component when no hospitals data is available", async () => {
  // Mock the useGetHospitalsQuery hook with an empty data array
  (useGetHospitalsQuery as jest.Mock).mockReturnValue({
    data: { value: [] },
    isLoading: false,
    isError: false,
  });

  render(
    <Provider store={store}>
      <HospitalsPage />
    </Provider>
  );

  // Check if the NoData component is displayed
    await screen.findByTestId("no-data");
    await screen.getByText("Seems like the hospital you're looking doesn't exist in our platform,");
    await screen.getByText("But if you want us to find you other alternatives based on your illness");
    await screen.getByText("Click here");
});

