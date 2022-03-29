import React, { useContext } from "react";
import MapDomainStore from "./MapStore";
import MapUiStore from "./MapUiStore";

export default class MapStores {
  public mapStore: MapDomainStore;
  public mapUiStore: MapUiStore;

  constructor() {
    this.mapStore = new MapDomainStore(this);
    this.mapUiStore = new MapUiStore(this);
  }
}

const MapStoresContext = React.createContext({});

export const MapStoresProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <MapStoresContext.Provider value={new MapStores()}>
      {children}
    </MapStoresContext.Provider>
  );
};

export const useMapStores = () => {
  const store = useContext(MapStoresContext);
  if (!store) {
    throw new Error("useMapStores must be used within a StoreProvider");
  }
  return store;
};
