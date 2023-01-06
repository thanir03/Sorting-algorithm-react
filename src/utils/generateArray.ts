import { arrayItemType } from "../store/state";
import { MAX_ARRAY_SIZE, MIN_ARRAY_SIZE } from "./helper";

const generateArray = (size: number): arrayItemType[] => {
  const unsortedArray = [];
  for (let i = 0; i < size; i++) {
    const randomNumber =
      Math.floor(Math.random() * (MAX_ARRAY_SIZE - MIN_ARRAY_SIZE)) +
      MIN_ARRAY_SIZE;
    unsortedArray.push({
      num: randomNumber,
      isComparing: false,
    });
  }
  return unsortedArray;
};

export { generateArray };
