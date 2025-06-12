document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const overlay = document.getElementById('overlay');
    const loginModal = document.getElementById('loginModal');
    const body = document.body;

    // Открытие модального окна входа
    loginBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        loginModal.style.display = 'block';
        body.classList.add('blur');
    });

    // Закрытие модального окна при клике на overlay
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        loginModal.style.display = 'none';
        body.classList.remove('blur');
    });

    // Для кнопки регистрации можно добавить аналогичный функционал
    registerBtn.addEventListener('click', function() {
        // Здесь можно добавить открытие окна регистрации
        alert('Функция регистрации будет реализована позже');
    });
});