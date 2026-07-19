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

// MODO OSCURO / CLARO: Alterna entre temas visuales
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const toggleBtn = document.getElementById("theme-toggle");

    if (currentTheme === "dark") {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    } else if (currentTheme === "light") {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        // Si no hay tema seteado, revisa la preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "🌙";
        } else {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "☀️";
        }
    }
}

// INICIALIZACIÓN: Cargar el tema guardado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const toggleBtn = document.getElementById("theme-toggle");
    
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        if(toggleBtn) {
            toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if(toggleBtn) {
            toggleBtn.textContent = "☀️";
        }
    } else {
        if(toggleBtn) {
            toggleBtn.textContent = "🌙";
        }
    }
});

// VALIDACIÓN DE FORMULARIO: Evita que el usuario envíe datos vacíos o erróneos
function validarFormulario(event) {
    const nombreInput = document.querySelector("input[name='nombre']");
    const emailInput = document.querySelector("input[name='email']");
    const errorSpan = document.getElementById("form-error");
    
    // Ocultar mensaje de error previo
    errorSpan.style.display = "none";
    errorSpan.textContent = "";

    // Validar longitud del nombre
    if (nombreInput.value.trim().length < 3) {
        errorSpan.textContent = "El nombre debe tener al menos 3 letras para ser válido.";
        errorSpan.style.display = "block";
        return false;
    }

    // Validar formato de email usando expresión regular (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorSpan.textContent = "Por favor, ingresa un correo electrónico con formato válido.";
        errorSpan.style.display = "block";
        return false;
    }

    return true;
}

