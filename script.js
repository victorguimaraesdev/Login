
document.getElementById("login-button").addEventListener("click", function (event) {

    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }


    login(email, password)
});


function login(email, password) {

    if (email === "usuario@exemplo.com" && password === "senha123") {
        alert("Login bem-sucedido!");

        window.location.replace("dashboard.html")
    } else {
        alert("Email ou senha inválidos.");
    }
}
