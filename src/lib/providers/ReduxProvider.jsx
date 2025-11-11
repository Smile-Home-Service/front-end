"use client";

import { Provider } from "react-redux";
import { useRef } from "react";
import { makeStore } from "../store/store";

export default function ReduxProvider({ children }) {
  const storeRef = useRef();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
