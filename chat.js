function responder(opcion) {
    const respuestas = {
        "horario": "Nuestro horario de atención es de lunes a viernes de 9:00 a 19:00.",
        "modalidad": "Contamos con ambas modalidades: presencial y virtual.",
        "ubicacion": "Estamos ubicados en el centro de la ciudad de Campana.",
        "material": "Sí, proporcionamos todo el material necesario de forma digital, podes consultar los valores."
    };

    document.getElementById('respuesta').innerText = respuestas[opcion];
}
