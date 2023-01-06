export const MIN_ARRAY_SIZE = 5;

export const MAX_ARRAY_SIZE = 100;

export const DEFAULT_ARRAY_SIZE = 50;

export const sortingAlgorithms = {
  bubble: "bubble",
  quick: "quick",
  merge: "merge",
  insertion: "insertion",
  selection: "selection",
};

export const TOTAL_BAR_WIDTH = 1000;

export const NUM_BARS_SHOW_FONT = 10;

export const TIME_INTERVAL = 0;

export type algorithmDetails = {
  name: string;
  timeComplexity: string;
  spaceComplexity: string;
  isStable: boolean;
};

export const sortingAlgorithmsDetails: algorithmDetails[] = [
  {
    name: sortingAlgorithms.bubble,
    isStable: true,
    timeComplexity: "O(N^2)",
    spaceComplexity: "O(1)",
  },
  {
    name: sortingAlgorithms.insertion,
    isStable: true,
    timeComplexity: "O(N^2)",
    spaceComplexity: "O(1)",
  },
  {
    name: sortingAlgorithms.merge,
    isStable: true,
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
  },
  {
    name: sortingAlgorithms.quick,
    isStable: false,
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(log N)",
  },
  {
    name: sortingAlgorithms.selection,
    isStable: false,
    timeComplexity: "O(N^2)",
    spaceComplexity: "O(1)",
  },
];
