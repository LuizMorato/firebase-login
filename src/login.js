import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./firebase"; // Importa a configuração do Firebase

const auth = getAuth();

// Função para login de um usuário existente
const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Usuário logado com sucesso: ${user.email}`);
      window.location.href = '../pages/home.html';
    })
    .catch((error) => {
      alert(`Erro no login: ${error.message}`);
    });
};

// Captura o formulário de login e adiciona o evento
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      loginUser(email, password);
    });
  }
});
