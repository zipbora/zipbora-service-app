import React from "react";
import TransactionTypeFilter from "./TransactionTypeFilter";
import PriceFilter from "./PriceFilter";
import BuildingTypeFilter from "./BuildingTypeFilter";
import AreaFilter from "./AreaFilter";
import AdministrationCostFilter from "./AdministrationCostFilter";
import NumOfFloorsFilter from "./NumOfFloorsFilter";
import NumOfRoomsFilter from "./NumOfRoomsFilter";
import AddtionalOptionFilter from "./AddtionalOptionFilter";

enum FilterType {
  TransactionType = "transactionTypeFilter",
  Price = "priceFilter",
  BuildingType = "buildingTypeFilter",
  Area = "areaFilter",
  AdministrationCost = "administrationCostFilter",
  NumOfFloors = "numOfFloorsFilter",
  NumOfRooms = "numOfRoomsFilter",
  AddtionalOption = "addtionalOptionFilter",
}

type Props = {
  type: string;
};

const SubFilterMenu: React.FC<Props> = ({ type }: Props) => {
  switch (type) {
    case FilterType.TransactionType:
      return <TransactionTypeFilter />;
    case FilterType.Price:
      return <PriceFilter />;
    case FilterType.BuildingType:
      return <BuildingTypeFilter />;
    case FilterType.Area:
      return <AreaFilter />;
    case FilterType.AdministrationCost:
      return <AdministrationCostFilter />;
    case FilterType.NumOfFloors:
      return <NumOfFloorsFilter />;
    case FilterType.NumOfRooms:
      return <NumOfRoomsFilter />;
    case FilterType.AddtionalOption:
      return <AddtionalOptionFilter />;
    default:
      return null;
  }
};

export default SubFilterMenu;
