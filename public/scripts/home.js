document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home");

  if (!home) {
    console.error("Home button not found.");
    return;
  }

  // Show the home button if not on the homepage
  if (window.location.pathname !== "/") {
    home.style.display = "flex";
  }

  home.addEventListener("click", () => (window.location.href = "/"));
});
