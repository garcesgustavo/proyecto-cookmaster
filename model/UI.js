export class UI {
  constructor() {}

  mostrarPregunta(text) {
    const preguntaTitulo = document.getElementById("pregunta");
    preguntaTitulo.innerHTML = text;
  }
  /**
   *
   * @param {string[]} opciones opciones de las preguntas.
   */
  mostrarOpciones(opciones, callback) {
    const opcionesContenedor = document.getElementById("opciones");
    opcionesContenedor.innerHTML = "";
    for (let i = 0; i < opciones.length; i++) {
      const boton = document.createElement("button");
      boton.innerText = opciones[i];
      boton.className = "boton";
      boton.addEventListener("click", () => callback(opciones[i]));
      opcionesContenedor.append(boton);
    }
  }

  /**
   *
   * @param {number} puntaje total
   */

  mostrarPuntaje(puntaje) {
    const finalCuestionario = `
  <h1>Resultado</h1>
  <h2>Lograste ${puntaje} respuestas correctas</h2>
  
  <style>
  h2 {
    color: rgb(75, 115, 121);
    font-size: 3rem;
    text-align: center;
    margin-bottom: 100px;
  } 
  a {
    text-decoration: none;
    background-color: #34a3a3;
    color: white;
    width: 250px;
    font-size: 20px;
    border-radius: 0.3rem;
    padding: 10px 10px;
    margin: 10px 40px 10px 0px;
    outline: 0;

}
    </style>
  <a href="/cookapp.html">Regresar</a>`;
    const elemento = document.getElementById("quizz");
    elemento.innerHTML = finalCuestionario;
  }

  /**
   *
   * @param {number} indiceActual es el total de preguntas contestadas
   * @param {number} total es el total de preguntas a responder
   */

  mostrarProgreso(indiceActual, total) {
    const elementoConteo = document.getElementById("progreso");
    elementoConteo.innerHTML = `Respuestas ${indiceActual} de ${total}`;
  }
}
