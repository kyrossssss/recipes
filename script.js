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

    // Функция закрытия всех модальных окон
    function closeAllModals() {
        overlay.style.display = 'none';
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        body.classList.remove('blur');
        passwordError.style.display = 'none';
    }

    // Открытие модального окна входа
    loginBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        loginModal.style.display = 'block';
        body.classList.add('blur');
    });

    // Открытие модального окна регистрации
    registerBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        registerModal.style.display = 'block';
        body.classList.add('blur');
    });

    // Закрытие при клике на оверлей
    overlay.addEventListener('click', closeAllModals);

    // Закрытие на ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Проверка пароля при регистрации
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('regPassword').value;
        const passwordConfirm = document.getElementById('regPasswordConfirm').value;
        
        if (password !== passwordConfirm) {
            passwordError.style.display = 'block';
            return;
        }
        
        // Если пароли совпадают
        passwordError.style.display = 'none';
        alert('Регистрация прошла успешно!');
        closeAllModals();
    });
});

// Функции для работы с модальным окном информации (из test2.html)
function subscribe() {
    const email = document.querySelector('.email-subscribe input').value;
    if(email) {
        alert('Спасибо за подписку! На адрес ' + email + ' будут приходить новые рецепты.');
        document.querySelector('.email-subscribe input').value = '';
    } else {
        alert('Пожалуйста, введите ваш email');
    }
}

function showInfo(page) {
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');

    switch(page) {
        case 'main':
            title.textContent = 'Главная страница';
            content.innerHTML = `
                <p>Добро пожаловать на главную страницу "Вкусолюб"!</p>
                <p>Здесь вы найдете лучшие рецепты, кулинарные советы и вдохновение для приготовления вкусных блюд.</p>
                <p>Используйте навигацию в футере, чтобы перейти к интересующим вас разделам.</p>
            `;
            break;
        case 'recipes':
            title.textContent = 'Рецепты';
            content.innerHTML = `
                <p>Наш раздел с рецептами содержит:</p>
                <ul>
                    <li>Более 1000 проверенных рецептов</li>
                    <li>Пошаговые инструкции с фото</li>
                    <li>Возможность фильтрации по категориям</li>
                    <li>Рецепты для разных диет и предпочтений</li>
                </ul>
                <p>Каждый рецепт включает список ингредиентов, время приготовления и уровень сложности.</p>
            `;
            break;
        case 'blog':
            title.textContent = 'Блог';
            content.innerHTML = `
                <p>В нашем блоге вы найдете:</p>
                <ul>
                    <li>Статьи о здоровом питании</li>
                    <li>Обзоры кухонной техники</li>
                    <li>Советы шеф-поваров</li>
                    <li>Сезонные подборки рецептов</li>
                    <li>Интервью с известными кулинарами</li>
                </ul>
                <p>Новые статьи публикуются каждую неделю!</p>
            `;
            break;
        case 'contacts':
            title.textContent = 'Контакты';
            content.innerHTML = `
                <p>Свяжитесь с нами любым удобным способом:</p>
                <p><strong>Email:</strong> info@vkyooyub.ru</p>
                <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
                <p><strong>Адрес:</strong> г. Москва, ул. Кулинарная, д. 15</p>
                <p><strong>Режим работы:</strong> Пн-Пт с 9:00 до 18:00</p>
                <p>Мы всегда рады вашим вопросам и предложениям!</p>
            `;
            break;
        case 'about':
            title.textContent = 'О нас';
            content.innerHTML = `
                <p>"Вкусолюб" - это кулинарный проект, созданный в 2020 году командой энтузиастов.</p>
                <p><strong>Наша миссия:</strong> делать кулинарию доступной и интересной для всех!</p>
                <p>Мы предлагаем:</p>
                <ul>
                    <li>Проверенные и понятные рецепты</li>
                    <li>Советы от профессиональных поваров</li>
                    <li>Подборки для разных случаев и праздников</li>
                    <li>Возможность делиться своими рецептами</li>
                </ul>
                <p>Наша команда состоит из 10 человек: поваров, фотографов, редакторов и технологов.</p>
            `;
            break;
        case 'privacy':
            title.textContent = 'Политика конфиденциальности';
            content.innerHTML = `
                <p>Мы серьезно относимся к защите ваших персональных данных.</p>
                <p><strong>Какие данные мы собираем:</strong></p>
                <ul>
                    <li>Имя и email при подписке на рассылку</li>
                    <li>Данные для комментариев (если вы их оставляете)</li>
                    <li>Анонимные данные для аналитики посещаемости</li>
                </ul>
                <p><strong>Как мы используем данные:</strong></p>
                <ul>
                    <li>Для отправки рецептов и новостей (если вы подписаны)</li>
                    <li>Для улучшения работы сайта</li>
                    <li>Мы никогда не передаем ваши данные третьим лицам</li>
                </ul>
                <p>Вы можете в любой момент отписаться от рассылки или запросить удаление ваших данных.</p>
            `;
            break;
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeModal();
    }
}
