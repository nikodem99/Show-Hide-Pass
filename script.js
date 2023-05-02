function changeType() {
    const passwordInput = document.getElementById("password");
    const eyeBtn = document.getElementById("eyeBtn");

    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text");
        eyeBtn.innerHTML = `<i> class="fas fa-eye"></i>`
    }
    else {
        passwordInput.setAttribute("type", "password");
        eyeBtn.innerHTML = `<i> class="fas fa-eye-slash"></i>`
    }
}