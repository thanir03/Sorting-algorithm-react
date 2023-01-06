import { arrayItemType } from "../store/state";
import { SortingAnimation } from "./animations";

const bubbleSort = async (array: arrayItemType[]) => {
  const animation = new SortingAnimation(array);
  animation.bubbleSort();
  await animation.renderAnimations();
  animation.resetData();
};

const mergeSort = async (array: arrayItemType[]) => {
  const animation = new SortingAnimation(array);
  animation.mergeSort(0, array.length - 1);
  await animation.renderAnimations();
  animation.resetData();
};

const quickSort = async (array: arrayItemType[]) => {
  const animation = new SortingAnimation(array);
  animation.quickSort(0, array.length - 1);
  await animation.renderAnimations();
  animation.resetData();
};
const insertionSort = async (array: arrayItemType[]) => {
  const animation = new SortingAnimation(array);
  animation.insertionSort();
  await animation.renderAnimations();
  animation.resetData();
};
const selectionSort = async (array: arrayItemType[]) => {
  const animation = new SortingAnimation(array);
  animation.selectionSort();
  await animation.renderAnimations();
  animation.resetData();
};
export { bubbleSort, mergeSort, quickSort, insertionSort, selectionSort };
