import { Heading, Image, ListItem, Section, UnorderedList } from "@piggybank/core";
import React from "react;

import { ProductPanelCopy } from "../../../copy/copy";
import HsbcBankCardDesktopImg from "../../../images/HSBCMassDebitCard.svg";

import "./ProductPanel.css";

export const ProductPanel = () => {
  const { card_image_alt, account_type_heading, account_type_benefits_list_items } = ProductPanelCopy;

  return (
    <Section data-test="productPanel-section">
      <figure className="imageContainer" data-test="productPanel-imageContainer">
        <Image
               alt={card_image_alt}
               data-test="productPanel-image"
               intrinsicSize="99x158"
               src={HsbcBankCardDesktopImg}
               />
      </figure>
      <Heading data-test="productPanel-heading" level={3} marginBottom={5}>
        {account_type_heading}
      </Heading>
      <UnorderedList data-test="productPanel-unorderedList" type="tick">
        {account_type_benefits_list_items.map((text, index) => (
        <ListItem data-test={'productPanel-listItem-${++index}'} key={text} marginBottom={3}>
          {text}
        </ListItem>
        ))}
      </UnorderedList>
</Section>
);
};
