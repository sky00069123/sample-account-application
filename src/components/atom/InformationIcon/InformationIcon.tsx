import { IconStatusInformationOnlight } from "@piggybank/core";
import React from "react";

import "./InformationIcon.css";

export const InformationIcon = () => {
  return (
    <div className="icon" data-test="informationIcon-div">
      <IconStatusInformationOnlight data-test="informationIcon-iconStatusInformationOnlight" scaled />
    </div>
  );
};
