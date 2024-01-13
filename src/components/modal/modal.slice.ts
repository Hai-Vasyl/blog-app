import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

export enum ModalTypes {
  categorySelect = "categorySelect",
  tagSearch = "tagSearch",
  stringSearch = "stringSearch",
}

type ModalState = {
  Element: React.ReactNode;
  active: boolean;
  type?: ModalTypes;
};

const initialState: ModalState = {
  Element: null,
  active: false,
};

type ActivateModalPayload = {
  Element: React.ReactNode;
  type: ModalTypes;
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    activateModal: (state, action: PayloadAction<ActivateModalPayload>) => {
      state.Element = action.payload.Element;
      state.type = action.payload.type;
      state.active = true;
    },
    deactivateModal: (state) => {
      state.Element = null;
      state.type = undefined;
      state.active = false;
    },
  },
});

export const { activateModal, deactivateModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
