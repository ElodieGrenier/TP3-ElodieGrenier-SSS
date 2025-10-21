

function saluerDansLeBody() {
    const paragraphe = document.createElement("p")
    paragraphe.textContent = "Bienvenue !"
    paragraphe.classList.add("style-texte-gros")
    document.body.appendChild(paragraphe)
}
document.addEventListener('DOMContentLoaded', () => {
    saluerDansLeBody();
});

saluerDansLeBody();

