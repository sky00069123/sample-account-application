import { Heading, Image, Paragraph, ProductBasket }
import React from "react";

import { MobileProductPanelCopy } from "../../../copy/copy";
import HsbcBankCardMobileImg from "../../../images/HSBCMassDebitCard.svg";

import "./MobileProductPanel.css";

export const MobileProductPanel = () => {
  const { card_image_alt, your_application_paragraph, type_of_account } = MobileProductPanelCopy;
  
  return {
    <div className="visibleSmallScreen" data-test="mobileProductPanel-visibleSmallScreen">
      <ProductBasket
        data-test="mobileProductPanel-productBasket"
        imageSlot={
          <figure className="imageMobileContainer" data-test="mobileProductPanel-imageContainer">
            <Image
              alt={card_image_alt}
              data-test="mobileProductPanel-image"
              intrinsicSize="80x60"
              marginBottom={0}
              src={HsbcBankCardMobileImg}
              />
            </figure>
          }
        >
        <Paragraph data-test="mobileProductPanel-paragraph" marginBottom={0}>
          {your_application_paragraph}
        </Paragraph>
        <Heading data-test="mobileProductPanel-heading" level={3} marginBottom={0}>
          {type_of_account}
        </Heading>
      </ProductBasket>
      </div>
    );
  };
