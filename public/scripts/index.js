document.addEventListener("DOMContentLoaded", () => {
  const school = document.getElementById("school");
  const president = document.getElementById("president");
  const mental = document.getElementById("mental");
  const dtm = document.getElementById("dtm");
  const home = document.getElementById("home");

  if (!school || !president || !mental || !dtm || !home) {
    console.error("Some elements are missing in the DOM.");
    return;
  }

  // Expand the web app for Telegram WebApps
  if (window.Telegram && window.Telegram.WebApp) {
    Telegram.WebApp.expand();
  }

  // Assign event listeners for navigation
  school.addEventListener("click", () => (window.location.href = "/school"));
  president.addEventListener(
    "click",
    () => (window.location.href = "/president")
  );
  mental.addEventListener("click", () => (window.location.href = "/mental"));
  dtm.addEventListener("click", () => (window.location.href = "/dtm"));
  home.addEventListener("click", () => (window.location.href = "/"));

  // Hide home button if already on home page
  home.style.display = window.location.pathname === "/" ? "none" : "flex";
});
