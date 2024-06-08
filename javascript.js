// Função para abrir a modal
function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Função para fechar a modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Ao clicar no botão "Login", abre a modal
document.getElementById("show-login").addEventListener("click", openModal);

// Ao clicar no botão "Cadastre-se", abre a modal
document.getElementById("btn-cadastro").addEventListener("click", openModal);

// Ao clicar no botão de fechar na modal, fecha a modal
document.getElementsByClassName("close")[0].addEventListener("click", closeModal);

// Fechar a modal ao clicar fora dela
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
