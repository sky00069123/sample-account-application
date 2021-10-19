import React from "react";
import { Helmet } from "react-helmet";

interface IPageTitle {
  children: string;
}

export const PageTitle = ({ children }: IPageTitle) => (
  <Helmet>
    <title data-test="pageTitle-title">{'${children ? '${children} - ' : ""}Secondary Account'}</title>
  </Helmet>
);
