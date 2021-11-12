import { createSelector } from "@reduxjs/toolkit";

const selectHistoryList = (state) => state.history.list;

const selectSortList = createSelector(selectHistoryList, (list) => {
  const newList = [...list];
  return newList.sort((a, b) => {
    return b.date - a.date;
  });
});

export const selectSliceList = createSelector(selectSortList, (list) => {
  return list.slice(0, 10);
});
