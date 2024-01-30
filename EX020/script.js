document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        // Adiciona ou remove a classe 'dark-theme' do corpo
        body.classList.toggle('dark-theme');
    });
});
