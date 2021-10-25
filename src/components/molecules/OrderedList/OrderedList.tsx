import React from "react";;

import { Circle } from "../../atom";

import "./OrderedList.css";

type OrderedListTypes = {
  listItems: string[];
};

export const OrderedList = ({ listItems }: OrderedListTypes) => {
  return (
    <ol className="orderedList orderedList--none" data-test="orderedList-ol">
      {listItems.map((text, index) => (
      <li data-test={'orderedList-li-${++index}'} key={text}>
        <Circle>{index++}</Circle> {text}
      </li>
      ))}
</ol>
);
};
