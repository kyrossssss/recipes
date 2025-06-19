document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        loginBtn: document.getElementById('loginBtn'),
        registerBtn: document.getElementById('registerBtn'),
        settingsBtn: document.getElementById('settingsBtn'),
        logoutBtn: document.getElementById('logoutBtn'),
        userGreeting: document.getElementById('userGreeting'),
        loginModal: document.getElementById('loginModal'),
        registerModal: document.getElementById('registerModal'),
        settingsModal: document.getElementById('settingsModal'),
        infoModal: document.getElementById('infoModal'),
        overlay: document.getElementById('overlay'),
        loginForm: document.getElementById('loginForm'),
        registerForm: document.getElementById('registerForm'),
        passwordError: document.getElementById('passwordError'),
        registerSuccess: document.getElementById('registerSuccess'),
        loginError: document.getElementById('loginError'),
        themeSelect: document.getElementById('themeSelect'),
        languageSelect: document.getElementById('languageSelect'),
        saveSettingsBtn: document.getElementById('saveSettings'),
        recipesBtn: document.getElementById('recipesBtn'),
        recipesDropdown: document.getElementById('recipesDropdown'),
        body: document.body
    };

    // Переводы
    const translations = {
        ru: {
            hello: "Привет",
            loginTitle: "Вход",
            emailLabel: "Введите свой Email:",
            passwordLabel: "Введите свой пароль:",
            loginError: "Неверный email или пароль!",
            loginBtn: "Войти",
            registerTitle: "Регистрация",
            nameLabel: "Ваше имя:",
            confirmPasswordLabel: "Повторите пароль:",
            passwordError: "Пароли не совпадают!",
            registerSuccess: "Регистрация прошла успешно! Теперь вы можете войти.",
            registerBtn: "Зарегистрироваться",
            recipesBtn: "Рецепты",
            salads: "Салаты",
            meat: "Мясное",
            soups: "Супы",
            hot: "Горячая",
            cold: "Холодная",
            russian: "Русская",
            lifehacksBtn: "Лайфхаки",
            lifehacksAlert: 'Раздел "Лайфхаки" будет доступен в следующей версии!',
            supportBtn: "Тех поддержка",
            supportAlert: 'Техническая поддержка: support@vkysolyub.ru',
            forumBtn: "Форум",
            forumAlert: 'Форум будет доступен в следующей версии!',
            settingsBtn: "Настройки",
            logoutBtn: "Выйти",
            promoTitle1: "Акции 90%",
            promoTitle2: "Самое популярное блюдо дня",
            footerTitle: "Вкусолюб",
            footerText: "Ваш надежный помощник в мире вкусной и полезной еды. Рецепты, советы и вдохновение каждый день!",
            emailPlaceholder: "Ваш email для новых рецептов",
            subscribeBtn: "Подписаться",
            subscribeAlert: 'Спасибо за подписку!',
            footerSubText: "Присоединяйтесь к нашему кулинарному сообществу",
            navigationTitle: "Навигация",
            mainPage: "Главная",
            mainPageInfo: "Информация о главной странице.",
            recipesPage: "Рецепты",
            recipesPageInfo: "Здесь вы найдете все наши рецепты.",
            blogPage: "Блог",
            blogPageInfo: "Наш кулинарный блог с интересными статьями.",
            contactsPage: "Контакты",
            contactsPageInfo: "Как с нами связаться.",
            aboutPage: "О нас",
            aboutPageInfo: "Информация о нашем проекте.",
            privacyPage: "Политика конфиденциальности",
            privacyPageInfo: "Как мы защищаем ваши данные.",
            infoTitle: "Информация",
            infoContent: "Информация о странице.",
            copyright: "© 2025 Вкусолюб. Все права защищены."
        },
        en: {
            hello: "Hello",
            loginTitle: "Login",
            emailLabel: "Enter your Email:",
            passwordLabel: "Enter your password:",
            loginError: "Invalid email or password!",
            loginBtn: "Login",
            registerTitle: "Registration",
            nameLabel: "Your name:",
            confirmPasswordLabel: "Confirm password:",
            passwordError: "Passwords don't match!",
            registerSuccess: "Registration successful! You can now log in.",
            registerBtn: "Register",
            recipesBtn: "Recipes",
            salads: "Salads",
            meat: "Meat",
            soups: "Soups",
            hot: "Hot",
            cold: "Cold",
            russian: "Russian",
            lifehacksBtn: "Lifehacks",
            lifehacksAlert: 'The "Lifehacks" section will be available in the next version!',
            supportBtn: "Support",
            supportAlert: 'Technical support: support@vkysolyub.ru',
            forumBtn: "Forum",
            forumAlert: 'The forum will be available in the next version!',
            settingsBtn: "Settings",
            logoutBtn: "Logout",
            promoTitle1: "90% Discounts",
            promoTitle2: "Today's Most Popular Dish",
            footerTitle: "TasteLover",
            footerText: "Your reliable assistant in the world of tasty and healthy food. Recipes, tips and inspiration every day!",
            emailPlaceholder: "Your email for new recipes",
            subscribeBtn: "Subscribe",
            subscribeAlert: 'Thank you for subscribing!',
            footerSubText: "Join our culinary community",
            navigationTitle: "Navigation",
            mainPage: "Home",
            mainPageInfo: "Information about the main page.",
            recipesPage: "Recipes",
            recipesPageInfo: "Here you will find all our recipes.",
            blogPage: "Blog",
            blogPageInfo: "Our culinary blog with interesting articles.",
            contactsPage: "Contacts",
            contactsPageInfo: "How to contact us.",
            aboutPage: "About Us",
            aboutPageInfo: "Information about our project.",
            privacyPage: "Privacy Policy",
            privacyPageInfo: "How we protect your data.",
            infoTitle: "Information",
            infoContent: "Information about the page.",
            copyright: "© 2025 TasteLover. All rights reserved."
        },
        de: {
            hello: "Hallo",
            loginTitle: "Anmeldung",
            emailLabel: "Geben Sie Ihre E-Mail ein:",
            passwordLabel: "Geben Sie Ihr Passwort ein:",
            loginError: "Ungültige E-Mail oder Passwort!",
            loginBtn: "Anmelden",
            registerTitle: "Registrierung",
            nameLabel: "Ihr Name:",
            confirmPasswordLabel: "Passwort bestätigen:",
            passwordError: "Passwörter stimmen nicht überein!",
            registerSuccess: "Registrierung erfolgreich! Sie können sich jetzt anmelden.",
            registerBtn: "Registrieren",
            recipesBtn: "Rezepte",
            salads: "Salate",
            meat: "Fleisch",
            soups: "Suppen",
            hot: "Heiß",
            cold: "Kalt",
            russian: "Russisch",
            lifehacksBtn: "Lifehacks",
            lifehacksAlert: 'Der "Lifehacks"-Bereich wird in der nächsten Version verfügbar sein!',
            supportBtn: "Support",
            supportAlert: 'Technischer Support: support@vkysolyub.ru',
            forumBtn: "Forum",
            forumAlert: 'Das Forum wird in der nächsten Version verfügbar sein!',
            settingsBtn: "Einstellungen",
            logoutBtn: "Abmelden",
            promoTitle1: "90% Rabatt",
            promoTitle2: "Das beliebteste Gericht des Tages",
            footerTitle: "Geschmacksliebhaber",
            footerText: "Ihr zuverlässiger Helfer in der Welt des leckeren und gesunden Essens. Rezepte, Tipps und Inspiration jeden Tag!",
            emailPlaceholder: "Ihre E-Mail für neue Rezepte",
            subscribeBtn: "Abonnieren",
            subscribeAlert: 'Vielen Dank für Ihr Abonnement!',
            footerSubText: "Werden Sie Teil unserer kulinarischen Gemeinschaft",
            navigationTitle: "Navigation",
            mainPage: "Startseite",
            mainPageInfo: "Informationen über die Startseite.",
            recipesPage: "Rezepte",
            recipesPageInfo: "Hier finden Sie alle unsere Rezepte.",
            blogPage: "Blog",
            blogPageInfo: "Unser kulinarischer Blog mit interessanten Artikeln.",
            contactsPage: "Kontakte",
            contactsPageInfo: "Wie Sie uns kontaktieren können.",
            aboutPage: "Über uns",
            aboutPageInfo: "Informationen über unser Projekt.",
            privacyPage: "Datenschutzrichtlinie",
            privacyPageInfo: "Wie wir Ihre Daten schützen.",
            infoTitle: "Information",
            infoContent: "Informationen über die Seite.",
            copyright: "© 2025 Geschmacksliebhaber. Alle Rechte vorbehalten."
        },
        zh: {
            hello: "你好",
            loginTitle: "登录",
            emailLabel: "输入您的电子邮件:",
            passwordLabel: "输入您的密码:",
            loginError: "电子邮件或密码无效!",
            loginBtn: "登录",
            registerTitle: "注册",
            nameLabel: "您的姓名:",
            confirmPasswordLabel: "确认密码:",
            passwordError: "密码不匹配!",
            registerSuccess: "注册成功! 您现在可以登录。",
            registerBtn: "注册",
            recipesBtn: "食谱",
            salads: "沙拉",
            meat: "肉类",
            soups: "汤",
            hot: "热菜",
            cold: "冷菜",
            russian: "俄罗斯",
            lifehacksBtn: "生活技巧",
            lifehacksAlert: '“生活技巧”部分将在下一版本中提供!',
            supportBtn: "技术支持",
            supportAlert: '技术支持: support@vkysolyub.ru',
            forumBtn: "论坛",
            forumAlert: '论坛将在下一版本中提供!',
            settingsBtn: "设置",
            logoutBtn: "退出",
            promoTitle1: "90%折扣",
            promoTitle2: "今日最受欢迎的菜肴",
            footerTitle: "美食爱好者",
            footerText: "您在美味健康食品世界的可靠助手。每天提供食谱、技巧和灵感!",
            emailPlaceholder: "您的电子邮件以获取新食谱",
            subscribeBtn: "订阅",
            subscribeAlert: '感谢您的订阅!',
            footerSubText: "加入我们的烹饪社区",
            navigationTitle: "导航",
            mainPage: "首页",
            mainPageInfo: "关于主页的信息。",
            recipesPage: "食谱",
            recipesPageInfo: "在这里您会找到我们所有的食谱。",
            blogPage: "博客",
            blogPageInfo: "我们的烹饪博客与有趣的文章。",
            contactsPage: "联系方式",
            contactsPageInfo: "如何联系我们。",
            aboutPage: "关于我们",
            aboutPageInfo: "关于我们项目的信息。",
            privacyPage: "隐私政策",
            privacyPageInfo: "我们如何保护您的数据。",
            infoTitle: "信息",
            infoContent: "关于页面的信息。",
            copyright: "© 2025 美食爱好者。保留所有权利。"
        }
    };

    let currentLang = 'ru';
    let currentTheme = 'light';

    // Инициализация приложения
    function initApp() {
        loadUserPreferences();
        checkAuthStatus();
        setupEventListeners();
    }

    // Загрузка пользовательских настроек
    function loadUserPreferences() {
        currentLang = localStorage.getItem('language') || 'ru';
        currentTheme = localStorage.getItem('theme') || 'light';
        
        elements.themeSelect.value = currentTheme;
        elements.languageSelect.value = currentLang;
        
        changeLanguage(currentLang);
        changeTheme(currentTheme);
    }

    // Проверка статуса авторизации
    function checkAuthStatus() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser) {
            elements.loginBtn.style.display = 'none';
            elements.registerBtn.style.display = 'none';
            elements.userGreeting.style.display = 'block';
            elements.userGreeting.textContent = `${translations[currentLang].hello}, ${currentUser.name}!`;
        } else {
            elements.loginBtn.style.display = 'block';
            elements.registerBtn.style.display = 'block';
            elements.userGreeting.style.display = 'none';
        }
    }

    // Смена языка
    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Обновляем приветствие
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            elements.userGreeting.textContent = `${translations[lang].hello}, ${currentUser.name}!`;
        }
    }

        // Функции для отображения информации в модальном окне
    function showMainInfo() {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        
        title.textContent = translations[currentLang].mainPage;
        content.innerHTML = `
            <p>Добро пожаловать на главную страницу "Вкусолюб"!</p>
            <p>Здесь вы найдете лучшие рецепты, кулинарные советы и вдохновение для приготовления вкусных блюд.</p>
            <p>Используйте навигацию в футере, чтобы перейти к интересующим вас разделам.</p>
        `;
        
        modal.style.display = 'block';
    }

    function showRecipesInfo() {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        
        title.textContent = translations[currentLang].recipesPage;
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
        
        modal.style.display = 'block';
    }

    function showBlogInfo() {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        
        title.textContent = translations[currentLang].blogPage;
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
        
        modal.style.display = 'block';
    }

    function showContactsInfo() {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        
        title.textContent = translations[currentLang].contactsPage;
        content.innerHTML = `
            <p>Свяжитесь с нами любым удобным способом:</p>
            <p><strong>Email:</strong> info@vkyooyub.ru</p>
            <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
            <p><strong>Адрес:</strong> г. Москва, ул. Кулинарная, д. 15</p>
            <p><strong>Режим работы:</strong> Пн-Пт с 9:00 до 18:00</p>
            <p>Мы всегда рады вашим вопросам и предложениям!</p>
        `;
        
        modal.style.display = 'block';
    }

    function showAboutInfo() {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        
        title.textContent = translations[currentLang].aboutPage;
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
        
        modal.style.display = 'block';
    }

    function showPrivacyInfo() {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        
        title.textContent = translations[currentLang].privacyPage;
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

    // Смена темы
    function changeTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('theme', theme);
        elements.body.className = theme + '-theme';
    }

    // Управление модальными окнами
    function showModal(modal) {
        elements.overlay.style.display = 'block';
        modal.style.display = 'block';
    }

    function hideModal(modal) {
        elements.overlay.style.display = 'none';
        modal.style.display = 'none';
    }

    function closeAllModals() {
        hideModal(elements.loginModal);
        hideModal(elements.registerModal);
        hideModal(elements.settingsModal);
        hideModal(elements.infoModal);
        elements.passwordError.style.display = 'none';
        elements.loginError.style.display = 'none';
        elements.registerSuccess.style.display = 'none';
    }

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Кнопки открытия модальных окон
        elements.loginBtn.addEventListener('click', () => showModal(elements.loginModal));
        elements.registerBtn.addEventListener('click', () => showModal(elements.registerModal));
        elements.settingsBtn.addEventListener('click', () => showModal(elements.settingsModal));
        
        // Кнопка сохранения настроек
        elements.saveSettingsBtn.addEventListener('click', saveSettings);
        
        // Кнопка выхода
        elements.logoutBtn.addEventListener('click', logout);
        
        // Формы
        elements.loginForm.addEventListener('submit', handleLogin);
        elements.registerForm.addEventListener('submit', handleRegister);
        
        // Закрытие модальных окон
        elements.overlay.addEventListener('click', closeAllModals);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeAllModals();
        });
        
        // Выпадающее меню рецептов
        elements.recipesBtn.addEventListener('click', toggleRecipesDropdown);
        window.addEventListener('click', closeRecipesDropdown);
    }

    // Обработчики форм
    function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            checkAuthStatus();
            closeAllModals();
            alert(`${translations[currentLang].hello}, ${user.name}!`);
        } else {
            elements.loginError.style.display = 'block';
        }
    }

    function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const passwordConfirm = document.getElementById('regPasswordConfirm').value;
        
        if (password !== passwordConfirm) {
            elements.passwordError.style.display = 'block';
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.some(u => u.email === email)) {
            alert(translations[currentLang].userExists || 'Пользователь с таким email уже зарегистрирован!');
            return;
        }
        
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        elements.registerSuccess.style.display = 'block';
        elements.registerForm.reset();
        
        setTimeout(() => {
            hideModal(elements.registerModal);
            showModal(elements.loginModal);
            elements.registerSuccess.style.display = 'none';
            document.getElementById('email').value = email;
        }, 2000);
    }

    // Сохранение настроек
    function saveSettings() {
        const selectedTheme = elements.themeSelect.value;
        const selectedLanguage = elements.languageSelect.value;
        
        changeTheme(selectedTheme);
        changeLanguage(selectedLanguage);
        
        closeAllModals();
        alert(translations[currentLang].settingsSaved || 'Настройки сохранены!');
    }

    // Выход из системы
    function logout() {
        localStorage.removeItem('currentUser');
        checkAuthStatus();
        closeAllModals();
        alert(translations[currentLang].logoutMessage || 'Вы успешно вышли из системы.');
    }

    // Управление выпадающим меню
    function toggleRecipesDropdown(e) {
        e.stopPropagation();
        elements.recipesDropdown.classList.toggle('show');
    }

    function closeRecipesDropdown() {
        elements.recipesDropdown.classList.remove('show');
    }

    // Глобальные функции
    window.showInfo = function(page) {
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        
        title.textContent = translations[currentLang][`${page}Page`];
        content.innerHTML = `<p>${translations[currentLang][`${page}PageInfo`]}</p>`;
        
        showModal(elements.infoModal);
    };

    window.closeModal = function() {
        closeAllModals();
    };

    window.subscribe = function() {
        const email = document.querySelector('.email-subscribe input').value;
        if (email) {
            alert(translations[currentLang].subscribeAlert);
            document.querySelector('.email-subscribe input').value = '';
        } else {
            alert(translations[currentLang].enterEmail || 'Пожалуйста, введите ваш email');
        }
    };

    function redirectToLIfeHack() {
        window.location.href = "../lifehack/index.html";
    }

    // Запуск приложения
    initApp();
});