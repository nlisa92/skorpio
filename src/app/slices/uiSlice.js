import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConsultationModalOpen: false,
  isMobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openConsultationModal(state) {
      state.isConsultationModalOpen = true;
    },
    closeConsultationModal(state) {
      state.isConsultationModalOpen = false;
    },
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const {
  openConsultationModal,
  closeConsultationModal,
  toggleMobileMenu,
} = uiSlice.actions;

export default uiSlice.reducer;
