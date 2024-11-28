import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./firebase"; // Importa a configuração do Firebase

const auth = getAuth();

// Função para cadastrar um novo usuário
const registerUser = (email, password) => {
  console.log("Iniciando o cadastro do usuário...");
  console.log(`Email: ${email}, Password: ${password}`); // Logs para verificar os valores fornecidos

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Usuário cadastrado com sucesso:", user); // Log do objeto do usuário
      alert(`Usuário cadastrado com sucesso: ${user.email}`);
      window.location.href = '../pages/home.html';
    })
    .catch((error) => {
      console.error("Erro ao cadastrar usuário:", error); // Log detalhado do erro
      alert(`Erro no cadastro: ${error.message}`);
    });
};

// Captura o formulário de cadastro e adiciona o evento
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado e analisado."); // Log para garantir que o evento DOMContentLoaded foi acionado
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    console.log("Formulário de cadastro encontrado no DOM."); // Log para confirmar que o formulário foi encontrado
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      console.log("Dados do formulário capturados:", { email, password }); // Log para verificar os valores do formulário
      registerUser(email, password);
    });
  } else {
    console.warn("Formulário de cadastro não encontrado no DOM!"); // Log de aviso caso o formulário não seja encontrado
  }
});
