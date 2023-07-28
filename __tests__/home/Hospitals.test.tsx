import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Hospitals from "@/components/home/Hospitals";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import { hospitalsResponse } from "../mocks/hospitals";
import { store } from "@/store";

jest.mock("@/store/features/hospital/hospitals-api", () => ({
  ...jest.requireActual("@/store/features/hospital/hospitals-api"),
  useGetHospitalsQuery: jest.fn(),
}));

test("renders list of hospitals", async () => {
  (useGetHospitalsQuery as jest.Mock).mockReturnValue({
    data: hospitalsResponse,
    isLoading: false,
    isError: false,
  });

  render(
    <Provider store={store}>
      <Hospitals />
    </Provider>
  );
  await screen.findByText("Paulos");
  await screen.findByText("Yekatit");
  await screen.findByText("Address summary for Hospital 1");
  await screen.findByAltText("Paulos Hospital");
  await screen.findByAltText("Yekatit Hospital");
});

test("renders HospitalLoading while data is loading", async () => {
  (useGetHospitalsQuery as jest.Mock).mockReturnValue({
    data: null,
    isLoading: true,
    isError: false,
  });

  render(
    <Provider store={store}>
      <Hospitals />
    </Provider>
  );

  await screen.findByTestId("hospital-loading");
});
