import { getAuth, signOut } from "firebase/auth";
import "./firebase"; // Importa a configuração do Firebase

const auth = getAuth();

// Função para deslogar o usuário
const logoutUser = () => {
  signOut(auth)
    .then(() => {
      alert("Usuário deslogado com sucesso!");
      console.log("Usuário deslogado.");

      // Redireciona para a página de login
      window.location.href = "../index.html"; 
    })
    .catch((error) => {
      console.error("Erro ao deslogar:", error);
      alert(`Erro ao deslogar: ${error.message}`);
    });
};

// Adiciona evento ao botão de logout
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      console.log("Botão de logout clicado."); // Log para debug
      logoutUser();
    });
  } else {
    console.warn("Botão de logout não encontrado no DOM."); // Log para garantir que o botão foi carregado
  }
});
