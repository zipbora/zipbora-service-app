import React, { useContext } from "react";
import RootStore from "./RootStore";

const StoresContext = React.createContext({});

export const StoresProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoresContext.Provider value={new RootStore()}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => {
  const store = useContext(StoresContext);
  if (!store) {
    throw new Error("useStores must be used within a StoreProvider");
  }
  return store;
};
