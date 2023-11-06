 // Ocultar todas las secciones de operaciones al principio
 document.querySelectorAll(".basicas, .avanzadas, .ordenar").forEach(function(el) {
    el.style.display = "none";
});

// Función para mostrar la sección de operación clickada
function operaciones(opcion) {
    // Ocultar todas las secciones
    document.querySelectorAll(".basicas, .avanzadas, .ordenar").forEach(function(el) {
        el.style.display = "none";
    });

    // Mostrar
    switch (opcion) {
        case 1:
            document.querySelector(".basicas").style.display = "block";
            break;
        case 2:
            document.querySelector(".avanzadas").style.display = "block";
            break;
        case 3:
            document.querySelector(".ordenar").style.display = "block";
            break;
    }
}

// Agregar eventos a los botones
document.getElementById("basicas").addEventListener("click", function() {
    operaciones(1);
});

document.getElementById("avanzadas").addEventListener("click", function() {
    operaciones(2);
});

document.getElementById("ordenar").addEventListener("click", function() {
    operaciones(3);
});

// Funciones para realizar operaciones matemáticas
document.getElementById("sumar").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resul").textContent = `Resultado: ${num1 + num2}`;
});

document.getElementById("restar").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resul").textContent = `Resultado: ${num1 - num2}`;
});

document.getElementById("multiplicar").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resul").textContent = `Resultado: ${num1 * num2}`;
});

document.getElementById("dividir").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        document.getElementById("resul").textContent = `Resultado: ${num1 / num2}`;
    } else {
        document.getElementById("resul").textContent = "No se puede dividir por cero";
    }
});

function limite(){
    const expression = document.getElementById("f").value;
    const result = math.evaluate(expression, { x: 0 });
    document.getElementById("respuesta").textContent = `Limite = ${result}`;
}

function derivada() {
    const expression = document.getElementById("f").value;
    const diffExpression = math.derivative(expression, 'x').toString();
    document.getElementById("respuesta").textContent = `derivada = ${diffExpression}`;
}

function ordenar(cadena) {
    let chars = cadena.split('');
    let len = chars.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
        }
    }

    return chars.join('');
}

function izquierdaDerecha() {
    let entrada = document.getElementById("texto").value;
    let ordenada = ordenar(entrada).split('').reverse().join('');
    document.getElementById("respuest").textContent = "Ordenado Izquierda a derecha: " + ordenada;
}

function derechaIzquierda() {
    let entrada = document.getElementById("texto").value;
    let ordenada = ordenar(entrada);
    document.getElementById("respuest").textContent = "Ordenado de Derecha a izquierda: " + ordenada;
}

function quitar() {
    let entrada = document.getElementById("texto").value;
    let elemento = document.getElementById("caracter").value;
    let sinElemento = entrada.replace(new RegExp(elemento, 'g'), '');
    document.getElementById("respuest").textContent = "Cadena nueva: " + sinElemento;
    limpiar();
}

function restaurar() {
    let anteriro = document.getElementById("texto").value;
    let agregado = document.getElementById("caracter").value;
    let ante = anteriro + agregado;
    document.getElementById("respuest").textContent = "Cadena anterior: " + ante;
}
