// ui.ts
import {
    btnPedir,
    btnNuevaPartida,
    btnPlantarse,
    btnHistorial,
  } from "./model";
  import {
    nuevaPartida,
    plantarse,
    dameCarta,
    historial,
  } from "./motor";
  
  if (
    btnPedir !== null &&
    btnPedir !== undefined &&
    btnPedir instanceof HTMLButtonElement
  ) {
    btnPedir.addEventListener("click", () => {
      dameCarta();
    });
  }
  
  if (
    btnNuevaPartida !== null &&
    btnNuevaPartida !== undefined &&
    btnNuevaPartida instanceof HTMLButtonElement
  ) {
    btnNuevaPartida.addEventListener("click", () => {
      nuevaPartida();
    });
  }
  
  if (
    btnPlantarse !== null &&
    btnPlantarse !== undefined &&
    btnPlantarse instanceof HTMLButtonElement
  ) {
    btnPlantarse.addEventListener("click", () => {
      plantarse();
    });
  }
  
  if (
    btnHistorial !== null &&
    btnHistorial !== undefined &&
    btnHistorial instanceof HTMLButtonElement
  ) {
    btnHistorial.addEventListener("click", () => {
      historial();
    });
  }
  