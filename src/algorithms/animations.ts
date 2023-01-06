import { store } from "../store";
import { algorithmAction, arrayItemType } from "../store/state";
import { customSetTimeout } from "../utils/customSetTimeout";
import { TIME_INTERVAL } from "../utils/helper";

type Action = "swap" | "comparison" | "setValue";

type animationAction = {
  action: Action;
  index: number[];
  value?: arrayItemType;
};

class SortingAnimation {
  private array: arrayItemType[];
  private animations: animationAction[] = [];
  constructor(array: arrayItemType[]) {
    this.array = [...array];
  }

  bubbleSort() {
    for (let i = 0; i < this.array.length; i++) {
      let isSorted = true;
      for (let j = 0; j < this.array.length - i - 1; j++) {
        this.animations.push({
          action: "comparison",
          index: [j, j + 1],
        });
        if (this.array[j].num > this.array[j + 1].num) {
          this.animations.push({ action: "swap", index: [j, j + 1] });
          this.swap(j, j + 1);
          isSorted = false;
        }
      }
      if (isSorted) {
        return;
      }
    }
  }

  selectionSort() {
    for (let i = 0; i < this.array.length - 1; i++) {
      let lowest = i;
      for (let j = i + 1; j < this.array.length; j++) {
        this.animations.push({ action: "comparison", index: [j, lowest] });
        if (this.array[j].num < this.array[lowest].num) {
          lowest = j;
        }
      }
      this.animations.push({ action: "swap", index: [i, lowest] });
      this.swap(i, lowest);
    }
  }

  insertionSort() {
    for (let i = 1; i < this.array.length; i++) {
      for (let j = i; j > 0; j--) {
        this.animations.push({ action: "comparison", index: [j, j - 1] });
        if (this.array[j].num < this.array[j - 1].num) {
          this.animations.push({ action: "swap", index: [j, j - 1] });
          this.swap(j, j - 1);
        } else {
          break;
        }
      }
    }
  }

  mergeSort(left: number, right: number) {
    if (right === left) return;
    let middle = Math.floor((left + right) / 2);
    this.mergeSort(left, middle);
    this.mergeSort(middle + 1, right);
    this.mergeTwoSortedArray(left, middle + 1, right);
  }

  mergeTwoSortedArray(left: number, middle: number, right: number) {
    const aux: arrayItemType[] = [];
    let [i, j] = [left, middle];
    let k = left;
    while (i < middle && j <= right) {
      this.animations.push({ action: "comparison", index: [i, j] });
      if (this.array[i].num <= this.array[j].num) {
        aux.push(this.array[i++]);
      } else {
        aux.push(this.array[j++]);
      }
    }
    if (i < middle) {
      aux.push(...this.array.slice(i, middle));
    }
    if (j <= right) {
      aux.push(...this.array.slice(j, right + 1));
    }

    for (let i = 0; i < aux.length; i++) {
      this.animations.push({
        action: "setValue",
        index: [k + i],
        value: aux[i],
      });
      this.array[k + i] = aux[i];
    }
  }
  quickSort(start: number, end: number) {
    let [left, right] = [start, end];
    if (left >= right) return;

    let pivot = Math.floor((left + right) / 2);
    this.animations.push({ action: "swap", index: [left, pivot] });
    this.swap(left, pivot);
    pivot = start;
    left = left + 1;
    while (left <= right) {
      this.animations.push({
        action: "comparison",
        index: [pivot, left, right],
      });
      if (
        this.array[left].num > this.array[pivot].num &&
        this.array[right].num < this.array[pivot].num
      ) {
        this.animations.push({ action: "swap", index: [left, right] });
        this.swap(left, right);
      }
      if (this.array[left].num <= this.array[pivot].num) {
        left++;
      }
      if (this.array[right].num >= this.array[pivot].num) {
        right--;
      }
    }
    this.animations.push({ action: "swap", index: [right, pivot] });
    this.swap(right, pivot);
    this.quickSort(start, right - 1);
    this.quickSort(left, end);
  }

  swap(index1: number, index2: number) {
    [this.array[index1], this.array[index2]] = [
      this.array[index2],
      this.array[index1],
    ];
  }
  sort() {
    return [...this.array].sort((a, b) => a.num - b.num);
  }

  async renderAnimations() {
    for (const animation of this.animations) {
      const { action, index, value } = animation;
      if (action === "comparison") {
        await customSetTimeout(TIME_INTERVAL);
        store.dispatch(algorithmAction.setColor(index));
      }
      if (action === "swap") {
        await customSetTimeout(TIME_INTERVAL);
        store.dispatch(algorithmAction.swapValues(index));
      }
      if (action === "setValue") {
        await customSetTimeout(TIME_INTERVAL);
        store.dispatch(
          algorithmAction.setValue({
            index: index[0],
            value,
          })
        );
      }
    }
  }
  resetData() {
    this.animations = [];
    this.array = [];
    store.dispatch(algorithmAction.setEndAlgorithm());
  }
}

export { SortingAnimation };
