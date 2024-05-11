let currentPage = 0;
const texts = [
    "Era uma vez uma linda princesa. Mas ela tinha um encantamento sobre ela de um tipo temeroso que só poderia ser quebrado pelo primeiro beijo do amor verdadeiro.",
    "Ela foi trancada em um castelo guardado por um terrível dragão flamejante. Muitos bravos cavaleiros tentaram libertá-la dessa horrenda prisão, mas sem sucesso.",
    "Ela esperava no quarto mais alto do mais alto torre do castelo por seu verdadeiro amor e o primeiro beijo do amor verdadeiro. (Isso não é como eu queria que minha história começasse)."
];

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");
}

document.getElementById('theme-switch').addEventListener('change', function() {
    toggleTheme();
});

function updateText() {
    document.getElementById('text').innerText = texts[currentPage];
    document.getElementById('page-indicator').innerText = `Página ${currentPage + 1} de ${texts.length}`;
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

function setupTouchEvents() {
    const textElement = document.getElementById('text');
    let startX;

    textElement.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, false);

    textElement.addEventListener('touchmove', (e) => {
        e.preventDefault(); 
    }, { passive: false });

    textElement.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) { 
            nextPage();
        } else if (endX - startX > 50) { 
            prevPage();
        }
    }, false);
}

function setupMouseEvents() {
    const textElement = document.getElementById('text');
    let startX;

    textElement.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        e.preventDefault(); // Evitar seleção de texto durante o arrasto
    }, false);

    textElement.addEventListener('mouseup', (e) => {
        const endX = e.clientX;
        if (startX - endX > 50) { 
            nextPage();
        } else if (endX - startX > 50) { 
            prevPage();
        }
    }, false);
}

document.addEventListener('DOMContentLoaded', function() {
    updateText(); // Atualiza o texto inicialmente
    setupTouchEvents(); // Configura eventos de toque
    setupMouseEvents(); // Configura eventos de mouse para teste em desktop
});
