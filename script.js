document.addEventListener('DOMContentLoaded', function() {
    // Translations
    const translations = {
        ru: {
            // Header
            loginBtn: "Вход",
            registerBtn: "Регистрация",
            logoutBtn: "Выйти",
            recipesBtn: "Рецепты",
            supportBtn: "Тех поддержка",
            forumBtn: "Форум",
            settingsBtn: "Настройки",
            lifehacksBtn: "Лайфхаки",

            // Login Modal
            loginTitle: "Вход",
            emailLabel: "Введите свой Email:",
            passwordLabel: "Введите свой пароль:",
            loginError: "Неверный email или пароль!",

            // Register Modal
            registerTitle: "Регистрация",
            nameLabel: "Ваше имя:",
            confirmPasswordLabel: "Повторите пароль:",
            passwordError: "Пароли не совпадают!",
            registerSuccess: "Регистрация прошла успешно! Теперь вы можете войти.",

            // Promo
            promoTitle1: "Акции 90%",
            promoTitle2: "Самое популярное блюдо дня",

            // Footer
            footerTitle: "Вкусолюб",
            footerText: "Ваш надежный помощник в мире вкусной и полезной еды. Рецепты, советы и вдохновение каждый день!",
            emailPlaceholder: "Ваш email для новых рецептов",
            subscribeBtn: "Подписаться",
            footerSubText: "Присоединяйтесь к нашему кулинарному сообществу",
            navigationTitle: "Навигация",
            mainPage: "Главная",
            recipesPage: "Рецепты",
            blogPage: "Блог",
            contactsPage: "Контакты",
            aboutPage: "О нас",
            privacyPage: "Политика конфиденциальности",
            copyright: "© 2025 Вкусолюб. Все права защищены.",

            // Dropdown
            salads: "Салаты",
            meat: "Мясное",
            soups: "Супы",
            hot: "Горячая",
            cold: "Холодная",
            russian: "Русская",

            // Greeting
            greeting: "Привет, {name}!",

            // Info Modal
            mainTitle: "Главная страница",
            recipesTitle: "Рецепты",
            blogTitle: "Блог",
            contactsTitle: "Контакты",
            aboutTitle: "О нас",
            privacyTitle: "Политика конфиденциальности"
        },
        en: {
            // Header
            loginBtn: "Login",
            registerBtn: "Register",
            logoutBtn: "Logout",
            recipesBtn: "Recipes",
            supportBtn: "Support",
            forumBtn: "Forum",
            settingsBtn: "Settings",
            lifehacksBtn: "Lifehacks",

            // Login Modal
            loginTitle: "Login",
            emailLabel: "Enter your Email:",
            passwordLabel: "Enter your password:",
            loginError: "Invalid email or password!",

            // Register Modal
            registerTitle: "Registration",
            nameLabel: "Your name:",
            confirmPasswordLabel: "Repeat password:",
            passwordError: "Passwords don't match!",
            registerSuccess: "Registration successful! Now you can login.",

            // Promo
            promoTitle1: "90% Discounts",
            promoTitle2: "Most popular dish of the day",

            // Footer
            footerTitle: "TasteLover",
            footerText: "Your reliable assistant in the world of delicious and healthy food. Recipes, tips and inspiration every day!",
            emailPlaceholder: "Your email for new recipes",
            subscribeBtn: "Subscribe",
            footerSubText: "Join our culinary community",
            navigationTitle: "Navigation",
            mainPage: "Main",
            recipesPage: "Recipes",
            blogPage: "Blog",
            contactsPage: "Contacts",
            aboutPage: "About us",
            privacyPage: "Privacy Policy",
            copyright: "© 2025 TasteLover. All rights reserved.",

            // Dropdown
            salads: "Salads",
            meat: "Meat",
            soups: "Soups",
            hot: "Hot",
            cold: "Cold",
            russian: "Russian",

            // Greeting
            greeting: "Hello, {name}!",

            // Info Modal
            mainTitle: "Main page",
            recipesTitle: "Recipes",
            blogTitle: "Blog",
            contactsTitle: "Contacts",
            aboutTitle: "About us",
            privacyTitle: "Privacy Policy"
        },
        de: {
            // Header
            loginBtn: "Anmeldung",
            registerBtn: "Registrierung",
            logoutBtn: "Abmelden",
            recipesBtn: "Rezepte",
            supportBtn: "Unterstützung",
            forumBtn: "Forum",
            settingsBtn: "Einstellungen",
            lifehacksBtn: "Lifehacks",

            // Login Modal
            loginTitle: "Anmeldung",
            emailLabel: "Geben Sie Ihre E-Mail ein:",
            passwordLabel: "Geben Sie Ihr Passwort ein:",
            loginError: "Ungültige E-Mail oder Passwort!",

            // Register Modal
            registerTitle: "Registrierung",
            nameLabel: "Ihr Name:",
            confirmPasswordLabel: "Passwort wiederholen:",
            passwordError: "Passwörter stimmen nicht überein!",
            registerSuccess: "Registrierung erfolgreich! Jetzt können Sie sich anmelden.",

            // Promo
            promoTitle1: "90% Rabatt",
            promoTitle2: "Beliebtestes Gericht des Tages",

            // Footer
            footerTitle: "Geschmacksliebhaber",
            footerText: "Ihr zuverlässiger Helfer in der Welt des leckeren und gesunden Essens. Rezepte, Tipps und Inspiration jeden Tag!",
            emailPlaceholder: "Ihre E-Mail für neue Rezepte",
            subscribeBtn: "Abonnieren",
            footerSubText: "Werden Sie Teil unserer kulinarischen Gemeinschaft",
            navigationTitle: "Navigation",
            mainPage: "Hauptseite",
            recipesPage: "Rezepte",
            blogPage: "Blog",
            contactsPage: "Kontakte",
            aboutPage: "Über uns",
            privacyPage: "Datenschutzrichtlinie",
            copyright: "© 2025 Geschmacksliebhaber. Alle Rechte vorbehalten.",

            // Dropdown
            salads: "Salate",
            meat: "Fleisch",
            soups: "Suppen",
            hot: "Heiß",
            cold: "Kalt",
            russian: "Russisch",

            // Greeting
            greeting: "Hallo, {name}!",

            // Info Modal
            mainTitle: "Hauptseite",
            recipesTitle: "Rezepte",
            blogTitle: "Blog",
            contactsTitle: "Kontakte",
            aboutTitle: "Über uns",
            privacyTitle: "Datenschutzrichtlinie"
        },
        zh: {
            // Header
            loginBtn: "登录",
            registerBtn: "注册",
            logoutBtn: "退出",
            recipesBtn: "食谱",
            supportBtn: "支持",
            forumBtn: "论坛",
            settingsBtn: "设置",
            lifehacksBtn: "生活技巧",

            // Login Modal
            loginTitle: "登录",
            emailLabel: "输入您的电子邮件:",
            passwordLabel: "输入您的密码:",
            loginError: "电子邮件或密码无效!",

            // Register Modal
            registerTitle: "注册",
            nameLabel: "您的名字:",
            confirmPasswordLabel: "重复密码:",
            passwordError: "密码不匹配!",
            registerSuccess: "注册成功! 现在您可以登录。",

            // Promo
            promoTitle1: "90% 折扣",
            promoTitle2: "今日最受欢迎菜品",

            // Footer
            footerTitle: "美食爱好者",
            footerText: "您在美味健康食品世界的可靠助手。每天提供食谱、技巧和灵感!",
            emailPlaceholder: "您的电子邮件接收新食谱",
            subscribeBtn: "订阅",
            footerSubText: "加入我们的烹饪社区",
            navigationTitle: "导航",
            mainPage: "主页",
            recipesPage: "食谱",
            blogPage: "博客",
            contactsPage: "联系方式",
            aboutPage: "关于我们",
            privacyPage: "隐私政策",
            copyright: "© 2025 美食爱好者。保留所有权利。",

            // Dropdown
            salads: "沙拉",
            meat: "肉类",
            soups: "汤类",
            hot: "热菜",
            cold: "冷菜",
            russian: "俄罗斯",

            // Greeting
            greeting: "你好, {name}!",

            // Info Modal
            mainTitle: "主页",
            recipesTitle: "食谱",
            blogTitle: "博客",
            contactsTitle: "联系方式",
            aboutTitle: "关于我们",
            privacyTitle: "隐私政策"
        }
    };

    // Language functionality
    let currentLanguage = localStorage.getItem('language') || 'ru';

    function applyTranslations(lang) {
        const langData = translations[lang];

        // Update document title
        document.title = langData.footerTitle;

        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        // Update active language button
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update user greeting if logged in
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            document.getElementById('userGreeting').textContent =
                langData.greeting.replace('{name}', currentUser.name);
        }
    }

    // Language button click handlers
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentLanguage = this.dataset.lang;
            localStorage.setItem('language', currentLanguage);
            applyTranslations(currentLanguage);
        });
    });

    // Apply translations on page load
    applyTranslations(currentLanguage);

    // Rest of your existing code (login, register, etc.)
    // ... (keep all your existing functionality) ...

    // Example for info modal translations
    function showInfo(page) {
        const modal = document.getElementById('infoModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        const langData = translations[currentLanguage];

        switch(page) {
            case 'main':
                title.textContent = langData.mainTitle;
                // ... rest of your modal content
                break;
            case 'recipes':
                title.textContent = langData.recipesTitle;
                // ... rest of your modal content
                break;
            // ... other cases
        }
        modal.style.display = 'block';
    }

    // Initialize dropdown menu
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
            alert(translations[currentLanguage].selectedCategory + ': ' + this.textContent);
        });
    });

    // Your existing functions
    function showSupportMessage() {
        alert(translations[currentLanguage].supportMessage || "Извините, но тех поддержка временно не работает :(");
    }

    function redirectToSite() {
        window.location.href = "forum.html";
    }

    function redirectToLIfeHack() {
        window.location.href = "https://food.inmyroom.ru/posts/28019-100-layfhakov-kotorye-sdelayut-vashu-kulinarnuyu-zhizn-esche-vkusnee-i-prosche";
    }

    function subscribe() {
        const emailInput = document.querySelector('.email-subscribe input');
        if (emailInput.value) {
            alert((translations[currentLanguage].subscribeThanks || "Спасибо за подписку") + ", " + emailInput.value + "! " +
                 (translations[currentLanguage].subscribeMessage || "Новые рецепты будут приходить вам на почту."));
            emailInput.value = '';
        } else {
            alert(translations[currentLanguage].subscribeError || "Пожалуйста, введите ваш email для подписки.");
        }
    }
});
