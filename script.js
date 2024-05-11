let currentPage = 0;
const texts = [
    "Texto da página 1. Aqui vai o conteúdo da primeira página.",
    "Texto da página 2. Aqui vai o conteúdo da segunda página.",
    "Texto da página 3. Aqui vai o conteúdo da terceira página."
];

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");
}

function updateText() {
    document.getElementById('text').innerText = texts[currentPage];
}

function nextPage() {
    if (currentPage < texts.length - 1) {
        currentPage++;
        updateText();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateText();
    }
}

// Função para adicionar suporte a gestos de deslizar
function handleTouchGestures() {
    let touchstartX = 0;
    let touchendX = 0;

    const slider = document.getElementById('text');

    slider.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    slider.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchendX < touchstartX) {
            nextPage();
        }
        if (touchendX > touchstartX) {
            prevPage();
        }
    }
}

updateText(); // Inicializa o texto da primeira página
handleTouchGestures(); // Adiciona os ouvintes de evento de toque
