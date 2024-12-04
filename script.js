
document.getElementById("login-button").addEventListener("click", function (event) {

    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Preencha todos os campos.");
        return;
    }
    login(email, password)
});


function login(email, password) {

    if (email === "login@email.com" && password === "123") {
        alert("Login bem-sucedido!");

        window.location.replace("dashboard.html")
    } else {
        alert("Email ou senha inválidos.");
    }
}
