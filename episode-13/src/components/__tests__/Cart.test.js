import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should test the cart flow", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (15)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("food-items").length).toBe(15);

  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  const addBtn1 = screen.getAllByRole("button", { name: "Add+" })[0];

  fireEvent.click(addBtn1);

  expect(screen.getByText("Cart(1)")).toBeInTheDocument();
});
