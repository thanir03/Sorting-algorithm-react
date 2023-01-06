import React from "react";
import styles from "../styles/NavBar.module.css";
import { useSelector, useDispatch } from "react-redux";

import { generateArray } from "../utils/generateArray";
import { StoreType } from "../store";
import { algorithmAction } from "../store/state";
import {
  DEFAULT_ARRAY_SIZE,
  MAX_ARRAY_SIZE,
  MIN_ARRAY_SIZE,
  sortingAlgorithms,
} from "../utils/helper";
import {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "../algorithms/algorithms";

const NavBar = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector(
    (state: StoreType) => state.algorithm.isRunning
  );

  const sortedArray = useSelector((state: StoreType) => state.algorithm.array);
  const size = useSelector((state: StoreType) => state.algorithm.size);
  const selectedAlgorithm = useSelector(
    (state: StoreType) => state.algorithm.selectedAlgorithm
  );
  const isAlgorithmSelected = useSelector(
    (state: StoreType) => state.algorithm.isAlgorithmSelected
  );
  const handleGenerateNewArray = () => {
    if (isRunning) return;
    const unsortedArray = generateArray(size);
    dispatch(algorithmAction.setArray(unsortedArray));
  };

  const handleChangeArraySize = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isRunning) return;
    const size = event.target.valueAsNumber;
    const unsortedArray = generateArray(size);
    dispatch(algorithmAction.setArraySize({ array: unsortedArray, size }));
  };

  const handleStartSorting = () => {
    if (isRunning) return;
    dispatch(algorithmAction.setStartAlgorithm());
    switch (selectedAlgorithm) {
      case sortingAlgorithms.quick:
        quickSort(sortedArray);
        break;
      case sortingAlgorithms.bubble:
        bubbleSort(sortedArray);
        break;
      case sortingAlgorithms.insertion:
        insertionSort(sortedArray);
        break;
      case sortingAlgorithms.selection:
        selectionSort(sortedArray);
        break;
      case sortingAlgorithms.merge:
        mergeSort(sortedArray);
        break;
    }
  };

  const handleSelectAlgorithm = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (isRunning) return;
    const selectedAlgorithm = event.currentTarget.id;
    dispatch(algorithmAction.setAlgorithm(selectedAlgorithm));
  };

  return (
    <nav>
      <button
        className={isRunning ? styles["red"] : ""}
        onClick={handleGenerateNewArray}
        disabled={isRunning}
      >
        Generate New Array
      </button>
      <div className={styles["input-field"]}>
        <label className={styles["label"]} htmlFor="size">
          Array Size :
        </label>
        <input
          type="range"
          name="size"
          id="size"
          onChange={handleChangeArraySize}
          defaultValue={DEFAULT_ARRAY_SIZE}
          disabled={isRunning}
          min={MIN_ARRAY_SIZE}
          max={MAX_ARRAY_SIZE}
        />
      </div>

      <div>
        <button
          id={sortingAlgorithms.bubble}
          className={`${
            selectedAlgorithm === sortingAlgorithms.bubble
              ? styles["active"]
              : ""
          } ${isRunning ? styles["red"] : ""}`}
          onClick={handleSelectAlgorithm}
          disabled={isRunning}
        >
          Bubble Sort
        </button>
        <button
          id={sortingAlgorithms.selection}
          className={`${
            selectedAlgorithm === sortingAlgorithms.selection
              ? styles["active"]
              : ""
          } ${isRunning ? styles["red"] : ""}`}
          onClick={handleSelectAlgorithm}
          disabled={isRunning}
        >
          Selection Sort
        </button>
        <button
          id={sortingAlgorithms.insertion}
          className={`${
            selectedAlgorithm === sortingAlgorithms.insertion
              ? styles["active"]
              : ""
          } ${isRunning ? styles["red"] : ""}`}
          onClick={handleSelectAlgorithm}
          disabled={isRunning}
        >
          Insertion Sort
        </button>
        <button
          id={sortingAlgorithms.merge}
          className={`${
            selectedAlgorithm === sortingAlgorithms.merge
              ? styles["active"]
              : ""
          } ${isRunning ? styles["red"] : ""}`}
          onClick={handleSelectAlgorithm}
          disabled={isRunning}
        >
          Merge Sort
        </button>
        <button
          id={sortingAlgorithms.quick}
          className={`${
            selectedAlgorithm === sortingAlgorithms.quick
              ? styles["active"]
              : ""
          } ${isRunning ? styles["red"] : ""}`}
          onClick={handleSelectAlgorithm}
          disabled={isRunning}
        >
          Quick Sort
        </button>
      </div>
      {isAlgorithmSelected && (
        <button
          className={isRunning ? styles["red"] : ""}
          onClick={handleStartSorting}
          disabled={isRunning}
        >
          Sort
        </button>
      )}
    </nav>
  );
};

export default NavBar;
