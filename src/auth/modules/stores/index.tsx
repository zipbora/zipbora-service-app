import React, { useContext } from "react";
import AuthStore from "./AuthStore";
import AuthUiStore from "./AuthUiStore";

export default class AuthRootStore {
  public authStore: AuthStore;
  public authUiStore: AuthUiStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.authUiStore = new AuthUiStore(this);
  }
}

const StoresContext = React.createContext({});

export const AuthStoresProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StoresContext.Provider value={new AuthRootStore()}>
      {children}
    </StoresContext.Provider>
  );
};

export const useAuthStores = () => {
  const store = useContext(StoresContext);
  if (!store) {
    throw new Error("useStores must be used within a StoreProvider");
  }
  return store;
};
