import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IService } from "../../interfaces/service.interface";
import { ITypeService } from "../../interfaces/typeService.interface";

type CheckoutState = "LOADING" | "READY" | "ERROR";

export interface ServicesState {
  typesService: ITypeService[];
  services: IService[];
  selectedService: IService | null;
  filteredServices: IService[];
  checkoutState: CheckoutState;
  selectedTypeService: number;
}

const initialState: ServicesState = {
  selectedService: null,
  typesService: [],
  services: [],
  filteredServices: [],
  checkoutState: "READY",
  selectedTypeService: 0,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setTypesServices: (state, action: PayloadAction<ITypeService[]>) => {
      state.typesService = action.payload;
    },
    setServices: (state, action: PayloadAction<IService[]>) => {
      state.services = action.payload;
    },
    setSelectedTypeService: (state, action: PayloadAction<number>) => {
      state.selectedTypeService = action.payload;
    },
    filterServicesByIdTypeService: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.filteredServices = [...state.services];
      }
    },
    setSelectedService: (
      state,
      action: PayloadAction<number | string | null>
    ) => {
      if (action.payload) {
        state.selectedService =
          state.services.find((service) => service.id === action.payload) ||
          null;
      } else {
        state.selectedService = null;
      }
    },
    addService: (state, action: PayloadAction<IService>) => {
      state.services = [...state.services, action.payload];
    },
    updateService: (
      state,
      action: PayloadAction<{ id: number | string; service: IService }>
    ) => {
      state.services = state.services.map((_service) => {
        if (_service.id === action.payload.id) {
          return {
            ...action.payload.service,
          };
        }
        return _service;
      });
    },
    deleteService: (state, action: PayloadAction<number | string>) => {
      state.services = state.services.filter(
        (service) => service.id !== action.payload
      );
    },
  },
});

export const {
  setTypesServices,
  setServices,
  setSelectedTypeService,
  updateService,
  deleteService,
  addService,
  setSelectedService,
} = servicesSlice.actions;

export default servicesSlice.reducer;

export const getFilteredServices = createSelector(
  (state: RootState) => state.services.services,
  (state: RootState) => state.services.selectedTypeService,
  (services, selectedTypeService) => {
    if (selectedTypeService === 0) {
      return services;
    }
    return services.filter(
      (service) => service.idTypeService === selectedTypeService
    );
  }
);
