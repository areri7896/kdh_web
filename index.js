// Get the login form
var loginForm = document.querySelector("form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Get the input fields
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    // Check if fields are empty
    if (username.value === "" || password.value === "") {
        alert("Please fill in both fields.");
    } else {
        // Send login request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "login.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === "success") {
                    window.location.href = "dashboard.html";
                } else {
                    alert("Incorrect username or password.");
                }
            }
        };
        xhr.send("username=" + username.value + "&password=" + password.value);
    }
});
