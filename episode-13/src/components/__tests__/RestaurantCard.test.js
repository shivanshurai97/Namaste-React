import { render, screen } from "@testing-library/react";
import RestaurantCard, { withTopRatedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Restaurant Card component with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});

it("should render Restaurant Card component with top rated label", () => {
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);
  render(
    <BrowserRouter>
      <RestaurantCardTopRated resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const label = screen.getByText("Top Rated");

  expect(label).toBeInTheDocument();
});
