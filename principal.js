document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const term = card.getAttribute('data-term');
        const description = card.getAttribute('data-description');

        // Crear divs para el término y la descripción
        const termDiv = document.createElement('div');
        termDiv.classList.add('content', 'term');
        termDiv.innerText = term;

        const descDiv = document.createElement('div');
        descDiv.classList.add('content', 'description');
        descDiv.innerText = description;

        // Agregar los divs al card
        card.appendChild(termDiv);
        card.appendChild(descDiv);

        let showingTerm = true;
        let interval;

        // Función para generar intervalos aleatorios entre 3 y 6 segundos
        function randomInterval() {
            return Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000; // Entre 3000ms (3s) y 6000ms (6s)
        }

        // Función para cambiar entre el término y la descripción con transición hacia la izquierda
        function changeContent() {
            if (showingTerm) {
                // Término se desliza a la izquierda, descripción aparece
                termDiv.style.transform = 'translateX(-100%)';
                descDiv.style.transform = 'translateX(0)';
            } else {
                // Descripción se desliza a la izquierda, término aparece desde la derecha
                termDiv.style.transform = 'translateX(0)';
                descDiv.style.transform = 'translateX(100%)'; // Descripción sale por la izquierda
            }
            showingTerm = !showingTerm;
        }

        // Función para iniciar el ciclo de transiciones con intervalos aleatorios
        function startTransition() {
            interval = setInterval(() => {
                changeContent();
            }, randomInterval());
        }

        // Inicia el ciclo de transiciones aleatorias
        startTransition();

        // Si el cursor se posiciona sobre la tarjeta, se detiene la transición y muestra el significado
        card.addEventListener('mouseenter', () => {
            clearInterval(interval);
            termDiv.style.transform = 'translateX(-100%)';
            descDiv.style.transform = 'translateX(0)'; // Muestra el significado
        });

        // Cuando el cursor sale de la tarjeta, se reanuda la transición
        card.addEventListener('mouseleave', () => {
            startTransition();
        });
    });
});


function cambiarContenido(id) {
    const tarjeta = document.getElementById(id);
    const termino = tarjeta.querySelector(".termino");
    const significado = tarjeta.querySelector(".significado");
    const imagen = tarjeta.querySelector(".imagen-recorrido");
  
    // Si la imagen está oculta, mostramos la imagen y ocultamos el texto
    if (imagen.style.display === "none") {
      termino.style.display = "none";
      significado.style.display = "none";
      imagen.style.display = "block";
    } else {
      // Si la imagen está visible, volvemos a mostrar el texto y ocultar la imagen
      termino.style.display = "block";
      significado.style.display = "block";
      imagen.style.display = "none";
    }
  }
  