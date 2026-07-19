// LANZADOR DE DADOS: Función que simula rodar un dado con una animación antes de dar el resultado final.
function rollDice(sides) {
    const resultElement = document.getElementById("dice-result");
    
    // Si ya está rodando, ignoramos el clic para evitar bugs (Fail-Safe)
    if (resultElement.classList.contains("rolling")) return;

    // Agregamos la clase que activa la animación CSS (temblor y cambio de color)
    resultElement.classList.add("rolling");

    let rollCount = 0;
    const maxRolls = 10; // Cantidad de veces que cambiará de número antes de detenerse

    // setInterval repite la función cada 50 milisegundos
    const rollInterval = setInterval(() => {
        // Genera un número temporal al azar entre 1 y el número de caras
        const randomTemp = Math.floor(Math.random() * sides) + 1;
        resultElement.textContent = randomTemp;
        rollCount++;

        // Cuando alcance el máximo de iteraciones, detenemos la animación y mostramos el final
        if (rollCount >= maxRolls) {
            clearInterval(rollInterval);
            resultElement.classList.remove("rolling");
            
            // Resultado final verdadero
            const finalResult = Math.floor(Math.random() * sides) + 1;
            resultElement.textContent = finalResult;
        }
    }, 50); 
}

// MENÚ HAMBURGUESA: Desplegar y ocultar menú en móviles
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    // Activa o desactiva la clase que muestra el menú
    navMenu.classList.toggle("nav-active");
}

// MENÚ HAMBURGUESA: Cerrar automáticamente al hacer clic en un enlace (Mejora de UX)
function closeMenu() {
    const navMenu = document.getElementById("nav-menu");
    // Comprobamos si el menú está desplegado antes de cerrarlo
    if (navMenu.classList.contains("nav-active")) {
        navMenu.classList.remove("nav-active");
    }
}
