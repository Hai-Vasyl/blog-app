import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

type ModalState = {
  Element: React.ReactNode;
  active: boolean;
};

const initialState: ModalState = {
  Element: null,
  active: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    activateModal: (state, action: PayloadAction<React.ReactNode>) => {
      state.Element = action.payload;
      state.active = true;
    },
    deactivateModal: (state) => {
      state = initialState;
    },
  },
});

export const { activateModal, deactivateModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
