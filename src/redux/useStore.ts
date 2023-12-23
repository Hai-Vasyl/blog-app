import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export const useStore = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state) as RootState;

  return { dispatch, state };
};
