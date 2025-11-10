"use client";

import { Provider } from "react-redux";
import { wrapper } from "../store/store";

export default function ReduxProvider({ children }) {
  const { store } = wrapper.useWrappedStore(children);

  return <Provider store={store}>{children}</Provider>;
}
