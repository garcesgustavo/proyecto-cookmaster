//@ts-check
// aca se lleva el registro de preguntas contestadas y el puntaje por cada respuesta correcta.

import { Pregunta } from "./Pregunta.js";

export class Quiz {
  preguntasIndex = 0;
  puntaje = 0;
  /**
   *
   * @param {Pregunta[]} preguntas
   */
  constructor(preguntas) {
    this.preguntas = preguntas;
  }
  /**
   *
   * @returns {Pregunta}
   */
  getPreguntaIndex() {
    return this.preguntas[this.preguntasIndex];
  }
  final() {
    return this.preguntas.length === this.preguntasIndex;
  }

  adivina(respuesta) {
    if (this.getPreguntaIndex().respuestaCorrecta(respuesta)) {
      this.puntaje++;
    }
    this.preguntasIndex++;
  }
}
