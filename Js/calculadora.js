document.addEventListener("DOMContentLoaded", function () {
    let pantalla = document.querySelector(".pantalla");
    let botones = document.querySelectorAll("button");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            let valor = boton.textContent;
            
            if (valor === "C") {
                pantalla.value = ""; // Borra la pantalla
            } else if (valor === "=") {
                try {
                    pantalla.value = new Function('return ' + pantalla.value)(); // Evalúa de forma segura
                } catch {
                    pantalla.value = "Error"; // Mensaje si hay un error en la expresión
                }
            } else {
                let ultimoCaracter = pantalla.value.slice(-1); // Verifica el último carácter ingresado
                let operadores = ["+", "-", "*", "/"];

                // Evita ingresar operadores consecutivos
                if (operadores.includes(valor) && operadores.includes(ultimoCaracter)) {
                    return;
                }

                pantalla.value += valor; // Agrega números u operadores
            }
        });
    });
});