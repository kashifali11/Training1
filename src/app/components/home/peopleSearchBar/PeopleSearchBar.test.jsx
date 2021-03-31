import Store from "../../../../redux/store.jsx";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import PeopleSearchBar from "./PeopleSearchBar.jsx";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={Store}>
        <PeopleSearchBar />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

