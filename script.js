const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const studentId = document.getElementById("studentId").value;
        const password = document.getElementById("password").value;
        
        if (studentId.trim() !== "" && password.trim() !== "") {
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "portal.html";
        } else {
            document.getElementById("errorMessage").style.display = "block";
        }
    });
}
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
