import "./style.css";
// main.ts
import { nuevaPartida, plantarse, historial } from './motor';
import { btnNuevaPartida, btnPlantarse, btnHistorial } from './model';
import './ui';

// Aggiungi event listener per i pulsanti principali
if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement){
  btnNuevaPartida.addEventListener('click', () => {
    nuevaPartida();
  });
}

if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement){
  btnPlantarse.addEventListener('click', () => {
    plantarse();
  });
}

if (btnHistorial !== null && btnHistorial !== undefined && btnHistorial instanceof HTMLButtonElement){
  btnHistorial.addEventListener('click', () => {
    historial();
  });
}

// Avvia l'applicazione
nuevaPartida();
