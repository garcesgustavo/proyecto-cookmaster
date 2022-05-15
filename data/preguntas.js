// aca de genera el objeto,toma el constructor de Preguntas.js y los datos de data.js
// para generar aca el objeto.

import { Pregunta } from "../model/Pregunta.js";
import { data } from "./data.js";

export const preguntas = data.map(
  (pregunta) =>
    new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta)
);
