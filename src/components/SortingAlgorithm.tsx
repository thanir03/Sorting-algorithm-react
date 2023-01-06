import React, { useEffect, useState } from "react";
import styles from "../styles/SortingAlgorithm.module.css";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar";
import ArrayList from "./ArrayList";
import { StoreType } from "../store";
import { algorithmAction } from "../store/state";
import { generateArray } from "../utils/generateArray";
import Notes from "./Notes";

const SortingAlgorithm = () => {
  const sortedArray = useSelector((state: StoreType) => state.algorithm.array);
  const size = useSelector((state: StoreType) => state.algorithm.size);
  const dispatch = useDispatch();
  const [isNotesShown, setIsNotesShown] = useState(false);
  const handleCloseNotes = () => {
    setIsNotesShown(false);
  };

  useEffect(() => {
    const newGeneratedArray = generateArray(size);
    dispatch(algorithmAction.setArray(newGeneratedArray));
  }, [dispatch, size]);

  return (
    <div className={styles.container}>
      <NavBar />
      <button className="notes-btn" onClick={() => setIsNotesShown(true)}>
        Notes
      </button>
      <ArrayList item={sortedArray} />
      <Notes
        isNotesShown={isNotesShown}
        onCloseNotes={handleCloseNotes}
        data={{}}
      />
    </div>
  );
};

export default SortingAlgorithm;
