const themeToggle = document.getElementById('darkModeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeIcon.className = isDark ? 'ri-sun-line' : 'ri-moon-fill';
});