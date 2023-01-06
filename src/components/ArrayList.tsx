import React from "react";
import ArrayItem from "./ArrayItem";
import { arrayItemType } from "../store/state";
import { NUM_BARS_SHOW_FONT, TOTAL_BAR_WIDTH } from "../utils/helper";
import { useSelector } from "react-redux";
import { StoreType } from "../store";

type ArrayListPropType = {
  item: arrayItemType[];
};

type ArrayListStyleType = {
  width: number;
  isFontShown: boolean;
};

const ArrayList = (props: ArrayListPropType) => {
  const arrayBarStyleDetails: ArrayListStyleType = {
    width: TOTAL_BAR_WIDTH / props.item.length,
    isFontShown: props.item.length <= NUM_BARS_SHOW_FONT,
  };

  const isSorted = useSelector((state: StoreType) => state.algorithm.isSorted);
  return (
    <ul>
      {props.item.map((item: arrayItemType, index) => (
        <ArrayItem
          isSorted={isSorted}
          style={arrayBarStyleDetails}
          key={index}
          item={item}
        />
      ))}
    </ul>
  );
};

export default ArrayList;

export type { ArrayListStyleType };
