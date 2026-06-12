// Definimos tus preguntas y respuestas
const faqs = [
    { q: "cuál es su horario", a: "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00." },
    { q: "es presencial o virtual", a: "Contamos con ambas modalidades, puedes elegir la que mejor se adapte a ti." },
    { q: "donde estan ubicados", a: "Estamos ubicados en el centro de la ciudad, calle Falsa 123." },
    { q: "tienen material de lectura", a: "Sí, proporcionamos todo el material necesario de forma digital para cada clase." }
];

// Configuración de la búsqueda inteligente (Fuse.js)
const options = { keys: ['q'], threshold: 0.4 }; 
const fuse = new Fuse(faqs, options);

function enviarMensaje() {
    const input = document.getElementById('userInput').value;
    const resultado = fuse.search(input);
    const respuestaElemento = document.getElementById('respuesta');

    if (resultado.length > 0) {
        respuestaElemento.innerText = "IA: " + resultado[0].item.a;
    } else {
        respuestaElemento.innerText = "IA: Lo siento, no entiendo. Puedes preguntar sobre: horario, modalidad, ubicación o material.";
    }
}
