// Toggle Mobile Menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

// ========= Scroll Animation (repeats on up/down) =========
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('[class*="animate"]').forEach((el) => {
  observer.observe(el);
});
