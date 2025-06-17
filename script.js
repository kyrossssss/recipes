document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userGreeting = document.getElementById('userGreeting');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const settingsModal = document.getElementById('settingsModal');
    const overlay = document.getElementById('overlay');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const passwordError = document.getElementById('passwordError');
    const registerSuccess = document.getElementById('registerSuccess');
    const loginError = document.getElementById('loginError');
    const themeSelect = document.getElementById('themeSelect');
    const languageSelect = document.getElementById('languageSelect');
    const saveSettingsBtn = document.getElementById('saveSettings');
    const body = document.body;

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

    // Функция перевода
    function changeLanguage(lang, buttonElement) {
        currentLang = lang;
        localStorage.setItem('language', lang);

        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Добавляем активный класс текущей кнопке
        if (buttonElement) {
            buttonElement.classList.add('active');
        }

        // Обновляем все элементы с атрибутом data-translate
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

        // Обновляем приветствие пользователя
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            userGreeting.textContent = `${translations[lang].hello}, ${currentUser.name}!`;
        }
    }

    // Инициализация языка при загрузке
    const savedLanguage = localStorage.getItem('language') || 'ru';
    const langButton = document.querySelector(`.language-btn[data-lang="${savedLanguage}"]`);
    changeLanguage(savedLanguage, langButton);

    // Обработчики для кнопок перевода
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang, this);
        });
    });

    // Проверяем, авторизован ли пользователь при загрузке страницы
    checkAuthStatus();

    // Функция проверки статуса авторизации
    function checkAuthStatus() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser) {
            // Пользователь авторизован
            loginBtn.style.display = 'none';
            registerBtn.style.display = 'none';
            userGreeting.style.display = 'block';
            logoutBtn.style.display = 'block';
            userGreeting.textContent = `${translations[currentLang].hello}, ${currentUser.name}!`;
        } else {
            // Пользователь не авторизован
            loginBtn.style.display = 'block';
            registerBtn.style.display = 'block';
            userGreeting.style.display = 'none';
            logoutBtn.style.display = 'none';
        }
    }

    // Функции для модальных окон
    function showModal(modalId) {
        overlay.style.display = 'block';
        document.getElementById(modalId).style.display = 'block';
        body.classList.add('blur');
    }

    function hideModal(modalId) {
        overlay.style.display = 'none';
        document.getElementById(modalId).style.display = 'none';
        body.classList.remove('blur');
    }

    function closeAllModals() {
        hideModal('loginModal');
        hideModal('registerModal');
        hideModal('settingsModal');
        hideModal('infoModal');
        passwordError.style.display = 'none';
        loginError.style.display = 'none';
    }

    // Открытие модального окна входа
    loginBtn.addEventListener('click', function() {
        showModal('loginModal');
    });

    // Открытие модального окна регистрации
    registerBtn.addEventListener('click', function() {
        showModal('registerModal');
    });

    // Открытие модального окна настроек
    settingsBtn.addEventListener('click', function() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const savedLanguage = localStorage.getItem('language') || 'ru';
        
        themeSelect.value = savedTheme;
        languageSelect.value = savedLanguage;
        
        showModal('settingsModal');
    });

    // Сохранение настроек
    saveSettingsBtn.addEventListener('click', function() {
        const selectedTheme = themeSelect.value;
        const selectedLanguage = languageSelect.value;
        
        localStorage.setItem('theme', selectedTheme);
        localStorage.setItem('language', selectedLanguage);
        
        document.body.className = selectedTheme + '-theme';
        changeLanguage(selectedLanguage);
        closeAllModals();
        alert(translations[currentLang].settingsSaved || 'Настройки сохранены!');
    });

    // Применяем сохранённую тему при загрузке
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-theme');

    // Закрытие модальных окон при клике на overlay
    overlay.addEventListener('click', closeAllModals);

    // Закрытие на ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Обработка формы входа
    loginForm.addEventListener('submit', function(e) {
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
            loginError.style.display = 'block';
            loginError.textContent = translations[currentLang].loginError;
        }
    });

    // Обработка формы регистрации
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const passwordConfirm = document.getElementById('regPasswordConfirm').value;
        
        if (password !== passwordConfirm) {
            passwordError.style.display = 'block';
            passwordError.textContent = translations[currentLang].passwordError;
            return;
        }
        
        passwordError.style.display = 'none';
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.some(u => u.email === email)) {
            alert(translations[currentLang].userExists || 'Пользователь с таким email уже зарегистрирован!');
            return;
        }
        
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        registerSuccess.style.display = 'block';
        registerSuccess.textContent = translations[currentLang].registerSuccess;
        registerForm.reset();
        
        setTimeout(() => {
            registerModal.style.display = 'none';
            loginModal.style.display = 'block';
            registerSuccess.style.display = 'none';
            document.getElementById('email').value = email;
        }, 2000);
    });

    // Выход из системы
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        checkAuthStatus();
        alert(translations[currentLang].logoutMessage || 'Вы успешно вышли из системы.');
    });

    // Обработка выпадающего меню рецептов
    document.getElementById('recipesBtn').addEventListener('click', function(e) {
        const dropdown = document.getElementById('recipesDropdown');
        dropdown.classList.toggle('show');
        e.stopPropagation(); 
    });

    window.addEventListener('click', function() {
        document.getElementById('recipesDropdown').classList.remove('show');
    });

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            alert(translations[currentLang].sectionSelected + ': ' + this.textContent);
        });
    });
});

// Функции для работы с модальным окном информации
function showInfo(page) {
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');

    switch(page) {
        case 'main':
            title.textContent = translations[currentLang].mainPage;
            content.innerHTML = `
                <p>${translations[currentLang].mainPageInfo}</p>
            `;
            break;
        case 'recipes':
            title.textContent = translations[currentLang].recipesPage;
            content.innerHTML = `
                <p>${translations[currentLang].recipesPageInfo}</p>
            `;
            break;
        case 'blog':
            title.textContent = translations[currentLang].blogPage;
            content.innerHTML = `
                <p>${translations[currentLang].blogPageInfo}</p>
            `;
            break;
        case 'contacts':
            title.textContent = translations[currentLang].contactsPage;
            content.innerHTML = `
                <p>${translations[currentLang].contactsPageInfo}</p>
            `;
            break;
        case 'about':
            title.textContent = translations[currentLang].aboutPage;
            content.innerHTML = `
                <p>${translations[currentLang].aboutPageInfo}</p>
            `;
            break;
        case 'privacy':
            title.textContent = translations[currentLang].privacyPage;
            content.innerHTML = `
                <p>${translations[currentLang].privacyPageInfo}</p>
            `;
            break;
    }

    document.getElementById('overlay').style.display = 'block';
    modal.style.display = 'block';
    document.body.classList.add('blur');
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('infoModal').style.display = 'none';
    document.body.classList.remove('blur');
}

function subscribe() {
    const email = document.querySelector('.email-subscribe input').value;
    if(email) {
        alert(translations[currentLang].subscribeAlert);
        document.querySelector('.email-subscribe input').value = '';
    } else {
        alert(translations[currentLang].enterEmail || 'Пожалуйста, введите ваш email');
    }
}

function redirectToSite() {
    alert(translations[currentLang].forumAlert);
}

function redirectToLIfeHack() {
    alert(translations[currentLang].lifehacksAlert);
}

function showSupportMessage() {
    alert(translations[currentLang].supportAlert);
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeModal();
    }
};
