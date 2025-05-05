// Select elements
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const title = document.getElementById("title");

// Function: apply stored theme on load
function applyStoredTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    body.classList.add("dark");
  }
}

// Function: toggle theme and save to localStorage
function toggleTheme() {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);

  // Trigger animation
  title.classList.remove("fade-in");
  void title.offsetWidth;
  title.classList.add("fade-in");
}

// Event listener
themeToggle.addEventListener("click", toggleTheme);

// Apply theme on page load
applyStoredTheme();
