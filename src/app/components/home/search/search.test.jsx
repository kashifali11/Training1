import Store from "../../../../redux/store.jsx";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Search from "./search";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={Store}>
        <Search />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

