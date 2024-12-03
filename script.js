// script.js

// Adicionar um evento ao botão de login
document.getElementById("login-button").addEventListener("click", function () {
    // Pegar os valores dos campos de email e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validar se os campos não estão vazios
    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Enviar os dados para o servidor (aqui está o próximo passo)
    login(email, password);
});

// Função para simular o envio dos dados ao servidor
function login(email, password) {
    // Simulação: Substitua por uma chamada real a um servidor
    if (email === "usuario@exemplo.com" && password === "senha123") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar o usuário para outra página
        window.location.href = "dashboard.html";
    } else {
        alert("Email ou senha inválidos.");
    }
}
