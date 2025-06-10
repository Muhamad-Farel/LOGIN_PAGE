document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const username = Event.target[0].value;
    const password = event.target[1].value;

    if (username === "admin" && password === "1111") {
        window.location.href = "dashboard.html";
        alert("login berhasil!");
    } else {
        alert("Username atau password  salah!");
    }
});