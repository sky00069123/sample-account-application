import React from "react";

import { FooterCopy } from "../../../copy/copy";

import "./Footer.css";

export const Footer = () => {
  const {copyrights } = FooterCopy;

  return (
    <footer className="footer" data-test="footer">
      {copyrights}
    </footer>
  );
};
