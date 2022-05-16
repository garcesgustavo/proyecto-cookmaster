// @ts-check

import { preguntas } from "./preguntas";

import { Quiz } from "../model/Quiz.js";

import { UI } from "../model/UI.js";
/**
 *
 * @param {Quiz} quiz objeto pricipal de las preguntas.
 * @param {UI} ui objeto ui
 */
const reiniciar = (quiz, ui) => {
  if (quiz.final()) {
    ui.mostrarPuntaje(quiz.puntaje);
  } else {
    ui.mostrarPregunta(quiz.getPreguntaIndex().pregunta);
    ui.mostrarOpciones(quiz.getPreguntaIndex().opciones, (opcionActual) => {
      quiz.adivina(opcionActual);
      reiniciar(quiz, ui);
    });
    ui.mostrarProgreso(quiz.preguntasIndex + 1, quiz.preguntas.length);
  }
};

function principal() {
  const quiz = new Quiz(preguntas);

  const ui = new UI();
  reiniciar(quiz, ui);
}
principal();
