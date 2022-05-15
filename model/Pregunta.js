// este es el constructor que toma los datos de data.js y verifica que la respuesta seleccionada sea correcta.

export class Pregunta {
  constructor(pregunta, opciones, respuesta) {
    this.pregunta = pregunta;
    this.opciones = opciones;
    this.respuesta = respuesta;
  }

  respuestaCorrecta(opciones) {
    return opciones === this.respuesta;
  }
}
