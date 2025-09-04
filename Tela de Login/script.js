// Pega o input de senha pelo ID
const senha = document.getElementById('senha');

// Pega o ícone do "olho" pelo ID
const toggle = document.getElementById('toggleSenha');

// Adiciona um evento de clique no ícone do olho
toggle.addEventListener('click', () => {
  
  // Se o tipo do input for "password", significa que a senha está escondida
  if (senha.type === "password") {
    senha.type = "text"; // Troca para "text" (mostra a senha)

    // Troca o ícone: remove o olho aberto e coloca o olho fechado
    toggle.classList.remove("bx-show");
    toggle.classList.add("bx-hide");

  } else {
    // Caso contrário, a senha já está visível
    senha.type = "password"; // Volta para "password" (esconde a senha)

    // Troca o ícone de volta: remove o olho fechado e coloca o olho aberto
    toggle.classList.remove("bx-hide");
    toggle.classList.add("bx-show");
  }
});