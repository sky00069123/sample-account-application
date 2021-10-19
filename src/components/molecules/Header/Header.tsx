import { LogoUk } from "@piggybank/core";
import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <header className="logoWrapper" data-test="header-logoWrapper">
      <LogoUk data-test="header-logoUk" />
    </header>
  );
};
