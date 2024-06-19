import { act } from "@testing-library/react";
import root from "./index";
import { Provider } from "react-redux";
import store from './redux/store';
import App from "./App";

test("renders components correctly", async () => {
  await act(async () => {
    <Provider store={store}>
      <App />
    </Provider>;
  });
});

// import sum from "./sum";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });