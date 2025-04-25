const preguntasLengua = [
  { texto: "¿Qué es un sustantivo?", opciones: ["Una acción", "Un objeto o persona", "Una característica", "Un adverbio"], correcta: "Un objeto o persona" },
  { texto: "¿Cuál es un ejemplo de verbo?", opciones: ["Mesa", "Bonito", "Cantar", "Rojo"], correcta: "Cantar" },
  { texto: "¿Qué es un adjetivo?", opciones: ["Describe a un sustantivo", "Es una acción", "Es una preposición", "Un número"], correcta: "Describe a un sustantivo" },
  { texto: "¿Qué palabra es un adverbio?", opciones: ["Grande", "Rápidamente", "Libro", "Ellos"], correcta: "Rápidamente" },
  { texto: "¿Cuál es el antónimo de 'feliz'?", opciones: ["Triste", "Contento", "Alegre", "Divertido"], correcta: "Triste" },
  { texto: "¿Qué es un sinónimo?", opciones: ["Palabra parecida en significado", "Palabra contraria", "Palabra inventada", "Palabra con tilde"], correcta: "Palabra parecida en significado" },
  { texto: "¿Qué es una fábula?", opciones: ["Un poema", "Una historia con moraleja", "Una noticia", "Un ensayo"], correcta: "Una historia con moraleja" },
  { texto: "¿Qué signo se usa para cerrar una pregunta?", opciones: [".", "!", ":", "?"], correcta: "?" },
  { texto: "¿Qué tipo de palabra es 'el'?", opciones: ["Verbo", "Pronombre", "Adjetivo", "Adverbio"], correcta: "Pronombre" },
  { texto: "¿Qué es una oración?", opciones: ["Un verbo", "Un grupo de palabras con sentido", "Una palabra", "Un punto"], correcta: "Un grupo de palabras con sentido" },
  { texto: "¿Cuál es el género narrativo?", opciones: ["Cuento", "Oda", "Ensayo", "Carta"], correcta: "Cuento" },
  { texto: "¿Qué es un poema?", opciones: ["Texto con versos y rimas", "Texto informativo", "Texto científico", "Texto legal"], correcta: "Texto con versos y rimas" },
  { texto: "¿Qué es una sílaba?", opciones: ["Letra", "Parte de una palabra", "Palabra completa", "Una frase"], correcta: "Parte de una palabra" },
  { texto: "¿Qué es una metáfora?", opciones: ["Comparación sin usar 'como'", "Una adivinanza", "Un poema", "Un refrán"], correcta: "Comparación sin usar 'como'" },
  { texto: "¿Qué es una comparación?", opciones: ["Relación entre dos cosas usando 'como'", "Una definición", "Una crítica", "Un resumen"], correcta: "Relación entre dos cosas usando 'como'" },
  { texto: "¿Qué es un prefijo?", opciones: ["Parte inicial de una palabra", "Final de la palabra", "Sinónimo", "Antónimo"], correcta: "Parte inicial de una palabra" },
  { texto: "¿Qué es un sufijo?", opciones: ["Parte final de una palabra", "Inicio de una palabra", "Pronombre", "Verbo"], correcta: "Parte final de una palabra" },
  { texto: "¿Qué es un artículo?", opciones: ["Palabra que acompaña al sustantivo", "Verbo auxiliar", "Adverbio de lugar", "Sinónimo"], correcta: "Palabra que acompaña al sustantivo" },
  { texto: "¿Cuál es un artículo definido?", opciones: ["El", "Un", "Alguno", "Muchos"], correcta: "El" },
  { texto: "¿Cuál es un artículo indefinido?", opciones: ["Un", "El", "Este", "Aquel"], correcta: "Un" },
  { texto: "¿Qué es una conjunción?", opciones: ["Une palabras u oraciones", "Adjetivo", "Verbo", "Pronombre"], correcta: "Une palabras u oraciones" },
  { texto: "¿Qué es una preposición?", opciones: ["Palabra que indica lugar, tiempo o causa", "Verbo principal", "Sustantivo común", "Adjetivo calificativo"], correcta: "Palabra que indica lugar, tiempo o causa" },
  { texto: "¿Qué es una narración?", opciones: ["Relato de hechos reales o imaginarios", "Una explicación científica", "Una crítica", "Una metáfora"], correcta: "Relato de hechos reales o imaginarios" },
  { texto: "¿Qué es una descripción?", opciones: ["Detallar cómo es algo", "Contar un hecho", "Inventar una historia", "Hacer un resumen"], correcta: "Detallar cómo es algo" },
  { texto: "¿Qué es el sujeto de una oración?", opciones: ["De quien se habla", "La acción", "El final", "La coma"], correcta: "De quien se habla" },
  { texto: "¿Qué es el predicado?", opciones: ["Lo que se dice del sujeto", "Nombre del sujeto", "Un artículo", "Una letra"], correcta: "Lo que se dice del sujeto" },
  { texto: "¿Qué son los signos de puntuación?", opciones: ["Marcas para organizar el texto", "Números romanos", "Pronombres", "Letras"], correcta: "Marcas para organizar el texto" },
  { texto: "¿Qué signo indica emoción?", opciones: ["!", "?", ".", ","], correcta: "!" },
  { texto: "¿Qué signo separa elementos en una lista?", opciones: [",", ".", ":", "?"], correcta: "," },
  { texto: "¿Qué es una biografía?", opciones: ["Relato de la vida de alguien", "Un poema", "Una receta", "Una noticia"], correcta: "Relato de la vida de alguien" },
  { texto: "¿Qué es una autobiografía?", opciones: ["Relato escrito por uno mismo sobre su vida", "Una historia inventada", "Un informe", "Un poema"], correcta: "Relato escrito por uno mismo sobre su vida" },
  { texto: "¿Qué es un cuento?", opciones: ["Narración breve y ficticia", "Artículo de opinión", "Poema largo", "Texto legal"], correcta: "Narración breve y ficticia" },
  { texto: "¿Qué es el mensaje en una comunicación?", opciones: ["Lo que se quiere transmitir", "El receptor", "El teléfono", "El código"], correcta: "Lo que se quiere transmitir" },
  { texto: "¿Qué es el emisor en la comunicación?", opciones: ["El que envía el mensaje", "El que escucha", "El canal", "El contenido"], correcta: "El que envía el mensaje" },
  { texto: "¿Qué es el receptor?", opciones: ["El que recibe el mensaje", "El que lo escribe", "El canal", "La idea"], correcta: "El que recibe el mensaje" },
  { texto: "¿Qué es el canal en la comunicación?", opciones: ["Medio por el que se transmite el mensaje", "El mensaje mismo", "El lenguaje", "La idea principal"], correcta: "Medio por el que se transmite el mensaje" },
  { texto: "¿Qué es el contexto en la comunicación?", opciones: ["Situación en que ocurre la comunicación", "El contenido del mensaje", "La estructura del poema", "El título del cuento"], correcta: "Situación en que ocurre la comunicación" },
  { texto: "¿Qué es un diálogo?", opciones: ["Intercambio de palabras entre dos o más personas", "Una carta", "Una biografía", "Un informe"], correcta: "Intercambio de palabras entre dos o más personas" },
  { texto: "¿Qué es una oración interrogativa?", opciones: ["Pregunta", "Exclamación", "Declaración", "Negación"], correcta: "Pregunta" },
  { texto: "¿Qué es una oración exclamativa?", opciones: ["Expresa emoción", "Una pregunta", "Una afirmación", "Un mandato"], correcta: "Expresa emoción" },
  { texto: "¿Qué es una oración negativa?", opciones: ["Niega algo", "Afirma algo", "Pregunta", "Ordena"], correcta: "Niega algo" },
  { texto: "¿Qué es una oración afirmativa?", opciones: ["Asegura algo", "Niega", "Pregunta", "Exclama"], correcta: "Asegura algo" },
  { texto: "¿Qué es una novela?", opciones: ["Narración extensa y compleja", "Un poema", "Un ensayo", "Un reportaje"], correcta: "Narración extensa y compleja" },
  { texto: "¿Qué es un ensayo?", opciones: ["Texto que expresa ideas y reflexiones", "Un cuento", "Un poema", "Una biografía"], correcta: "Texto que expresa ideas y reflexiones" },
  { texto: "¿Qué es una rima?", opciones: ["Repetición de sonidos al final de los versos", "Una descripción", "Un sustantivo", "Un adverbio"], correcta: "Repetición de sonidos al final de los versos" },
  { texto: "¿Qué es un verso?", opciones: ["Línea de un poema", "Capítulo", "Frase larga", "Una sílaba"], correcta: "Línea de un poema" },
  { texto: "¿Qué es una estrofa?", opciones: ["Conjunto de versos en un poema", "Una palabra", "Una sílaba", "Un párrafo"], correcta: "Conjunto de versos en un poema" },
  { texto: "¿Las personas se comunican mediante la lengua?", opciones: ["Identidad", "Oral", "Salud"], correcta: "Oral" },
  { texto: "La lengua escrita a diferencia de la lengua oral, es totalmente?", opciones: ["Útil", "Inexplicada", "Artificial"], correcta: "Artificial" },
  { texto: "En la comunicación oral, la comunicación es?", opciones: ["Inmediata", "Comunicativa", "Necesaria"], correcta: "Inmediata" }
];

let respuestas = [];
let temporizador;
let tiempoRestante = 1800; // 30 minutos en segundos
let cuestionarioTerminado = false;

function actualizarTemporizador() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  document.getElementById("tiempo").textContent = 
    `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  if (tiempoRestante <= 0) {
    clearInterval(temporizador);
    mostrarResultados();
    alert("¡Se acabó el tiempo!");
  } else {
    tiempoRestante--;
  }
}

function iniciarTemporizador() {
  // Limpiar cualquier temporizador existente antes de iniciar uno nuevo
  if (temporizador) {
    clearInterval(temporizador);
  }

  tiempoRestante = 1800; // Resetear a 30 minutos
  actualizarTemporizador(); // Actualizar inmediatamente para mostrar tiempo inicial
  temporizador = setInterval(actualizarTemporizador, 1000);
}

function generarPreguntas() {
  let quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = ""; // Limpiar el formulario antes de generar preguntas

  preguntasLengua.forEach((pregunta, index) => {
    let divPregunta = document.createElement("div");
    divPregunta.classList.add("pregunta");
    divPregunta.id = `pregunta-container-${index}`;
    
    // Crear el select con las opciones
    let selectHTML = `
      <select name="pregunta${index}" id="pregunta${index}">
        <option value="">-- Selecciona una respuesta --</option>
        ${pregunta.opciones.map(opcion => `<option value="${opcion}">${opcion}</option>`).join("")}
      </select>
    `;
    
    divPregunta.innerHTML = `
      <p>${index + 1}. ${pregunta.texto}</p>
      <div class="opciones">
        ${selectHTML}
      </div>
    `;
    quizForm.appendChild(divPregunta);
  });

  // Iniciar el temporizador cuando se generan las preguntas
  iniciarTemporizador();

  // Resetear variable de cuestionario terminado
  cuestionarioTerminado = false;

  // Mostrar el botón para enviar respuestas
  document.getElementById("btnEnviar").style.display = "block";

  // Ocultar el botón de reinicio si existe
  if (document.getElementById("btnReiniciar")) {
    document.getElementById("btnReiniciar").style.display = "none";
  }

  // Ocultar área de resultados
  document.getElementById("resultados").innerHTML = "";
}

function mostrarResultados() {
  // Si el cuestionario ya fue terminado, no hacer nada
  if (cuestionarioTerminado) {
    return;
  }

  // Marcar como terminado
  cuestionarioTerminado = true;

  // Detener el temporizador cuando se muestran los resultados
  clearInterval(temporizador);

  // Recoger las respuestas
  respuestas = [];
  preguntasLengua.forEach((pregunta, index) => {
    let selectElement = document.getElementById(`pregunta${index}`);
    let respuestaSeleccionada = selectElement ? selectElement.value : "";
    respuestas.push(respuestaSeleccionada);
  });

  // Calcular aciertos
  let aciertos = 0;
  respuestas.forEach((respuesta, index) => {
    if (respuesta === preguntasLengua[index].correcta) {
      aciertos++;
    }
  });

  // Deshabilitar todos los selects para que no se puedan cambiar las respuestas
  preguntasLengua.forEach((_, index) => {
    let selectElement = document.getElementById(`pregunta${index}`);
    if (selectElement) {
      selectElement.disabled = true;
    }
  });

  // Mostrar solo el resultado final sin detalle de cuáles son correctas/incorrectas
  document.getElementById("resultados").innerHTML = `
    <div class="resultado-final">
      <h3>Tu resultado</h3>
      <div class="puntaje">
        <span class="puntos">${aciertos}</span>
        <span class="divisor">/</span>
        <span class="total">${preguntasLengua.length}</span>
      </div>
      <p class="mensaje">Has respondido correctamente ${aciertos} de ${preguntasLengua.length} preguntas.</p>
      <button id="btnReiniciar" onclick="reiniciarCuestionario()">Reiniciar Cuestionario</button>
    </div>
  `;

  // Ocultar el botón de enviar respuestas
  document.getElementById("btnEnviar").style.display = "none";

  // Hacer scroll hacia los resultados
  document.getElementById("resultados").scrollIntoView({ behavior: "smooth" });
}

function reiniciarCuestionario() {
  // Reiniciar el cuestionario generando nuevas preguntas
  generarPreguntas();

  // Limpiar área de resultados
  document.getElementById("resultados").innerHTML = "";

  // Hacer scroll hacia arriba al inicio del cuestionario
  document.getElementById("cuestionarioContainer").scrollIntoView({ behavior: "smooth" });
}

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "admin2" && contrasena === "1234") {
    document.getElementById("loginContainer").classList.add("oculto");
    document.getElementById("cuestionarioContainer").classList.remove("oculto");
    generarPreguntas();
  } else {
    document.getElementById("loginError").innerText = "Usuario o contraseña incorrectos.";
  }
}

// Evento para comprobar si la página ha sido recargada
window.onload = function() {
  // Comprueba si hay un cuestionario visible
  if (!document.getElementById("cuestionarioContainer").classList.contains("oculto")) {
    generarPreguntas();
  }
};