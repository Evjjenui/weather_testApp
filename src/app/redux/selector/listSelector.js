import { createSelector } from "@reduxjs/toolkit";

const selectHistoryList = (state) => state.history.list;

export const selectSortList = createSelector(selectHistoryList, (list) => {
  const newList = [...list];
  return newList.sort((a, b) => {
    return b.date - a.date;
  });
});
