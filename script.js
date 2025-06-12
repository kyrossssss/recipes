document.addEventListener('DOMContentLoaded', function() {
// Вход
    const loginBtn = document.getElementById('loginBtn');
    const overlay = document.getElementById('overlay');
    const loginModal = document.getElementById('loginModal');
    
// Регистрация
    const registerBtn = document.getElementById('registerBtn');
    const registerModal = document.getElementById('registerModal');
    const registerForm = document.getElementById('registerForm');
    const passwordError = document.getElementById('passwordError');
    
    const body = document.body;

// Функция закрытия всех  окон
    function closeAllModals() {
        overlay.style.display = 'none';
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        body.classList.remove('blur');
        passwordError.style.display = 'none';
    }

// Открытие  окна входа
    loginBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        loginModal.style.display = 'block';
        body.classList.add('blur');
    });

// Открытие  окна регистрации
    registerBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        registerModal.style.display = 'block';
        body.classList.add('blur');
    });

// Закрытие при клике 
    overlay.addEventListener('click', closeAllModals);

// Закрытие на ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

// Проверка пароля 
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('regPassword').value;
        const passwordConfirm = document.getElementById('regPasswordConfirm').value;
        
        if (password !== passwordConfirm) {
            passwordError.style.display = 'block';
            return;
        }
        
    //пароли совпадают
        passwordError.style.display = 'none';
        alert('Регистрация прошла успешно!');
        closeAllModals();
    });
});
