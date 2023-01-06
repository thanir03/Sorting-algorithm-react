import React from "react";
import styles from "../styles/ArrayItem.module.css";
import { ArrayListStyleType } from "./ArrayList";
import { arrayItemType } from "../store/state";
type ArrayItemPropType = {
  item: arrayItemType;
  style: ArrayListStyleType;
  isSorted: boolean;
};

const ArrayItem = (props: ArrayItemPropType) => {
  const getBackgroundColor = () => {
    if (props.isSorted) {
      return "rgb(112, 224, 0)";
    } else if (props.item.isComparing) {
      return "red";
    } else {
      return "rgb(5, 70, 250)";
    }
  };
  return (
    <li
      className={styles["array-bar"]}
      style={{
        width: `${props.style.width}px`,
        height: `${props.item.num * 3.5}px`,
        backgroundColor: getBackgroundColor(),
      }}
    >
      {props.style.isFontShown && props.item.num}
    </li>
  );
};

export default ArrayItem;
