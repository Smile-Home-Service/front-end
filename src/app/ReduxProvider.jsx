"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { makeStore, persistor } from "@/lib/store";

export default function ReduxProvider({ children }) {
  const storeRef = useRef(null);
  const persistorRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    persistorRef.current = persistor(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
}
