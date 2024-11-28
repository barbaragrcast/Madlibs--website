document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.getElementById("welcome-text");
    const options = document.getElementById("options");
    const whatIsBtn = document.getElementById("what-is-btn");
    const startGameBtn = document.getElementById("start-game-btn");
    const info = document.getElementById("info");
    const goBackBtn = document.getElementById("go-back-btn");

    // Show the options after 2 seconds (when the fade-in finishes)
    setTimeout(() => {
        options.classList.remove("hidden");
    }, 4300);

    // "What is Mad Libs?" button action
    whatIsBtn.addEventListener("click", () => {
        // Hide both the welcome text and options
        welcomeText.classList.add("hidden");
        options.classList.add("hidden");
        // Show the info section
        info.classList.remove("hidden");
    });

    // "Jump straight into the game" button action
    startGameBtn.addEventListener("click", () => {
        window.location.href = "game.html";  // Replace with the actual game page URL
    });

    // "Go Back" button action
    goBackBtn.addEventListener("click", () => {
        // Show the welcome text and options again
        welcomeText.classList.remove("hidden");
        options.classList.remove("hidden");
        // Hide the info section
        info.classList.add("hidden");
    });
});



