import React from "react";
import { ChipMultiUse } from "./button-type-filme/chip-multi-use";

export const Movies = () => {
  return (
    <div className="container">
      <p className="page-title">DISCOVER MOVIES</p>
        <div className="button-container">
          <ChipMultiUse name={"Action"}/>
          <ChipMultiUse name={"Adventure"}/>
          <ChipMultiUse name={"Animation"}/>
          <ChipMultiUse name={"Comedy"}/>
          <ChipMultiUse name={"Crime"}/>
          <ChipMultiUse name={"Documentary"}/>
          <ChipMultiUse name={"Family"}/>
          <ChipMultiUse name={"Fantasy"}/>
          <ChipMultiUse name={"History"}/>
          <ChipMultiUse name={"Horror"}/>
          <ChipMultiUse name={"Music"}/>
          <ChipMultiUse name={"Mystery"}/>
          <ChipMultiUse name={"romance"}/>
          <ChipMultiUse name={"Science Fiction"}/>
          <ChipMultiUse name={"TV Movie"}/>
          <ChipMultiUse name={"Thriller"}/>
          <ChipMultiUse name={"war"}/>
          <ChipMultiUse name={"westren"}/>
        </div>
    </div>
  );
};
