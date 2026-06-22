(function () {
  'use strict';

  // ==================== i18n ====================
  const translations = {
    ru: {
      'nav.services': 'Услуги',
      'nav.pricing': 'Тарифы',
      'nav.advantages': 'Преимущества',
      'nav.contact': 'Контакты',
      'btn.telegram': 'Telegram',
      'hero.title': 'Telegram-бот для салона красоты',
      'hero.subtitle': 'Автоматизируйте запись, напоминания и кассу — сосредоточьтесь на клиентах',
      'hero.cta': 'Заказать бота',
      'services.title': 'Что умеет бот',
      'services.card1.title': 'Онлайн‑запись',
      'services.card1.desc': 'Клиент выбирает время и мастера прямо в Telegram. Запись мгновенно попадает в календарь.',
      'services.card2.title': 'Напоминания',
      'services.card2.desc': 'Автоматические уведомления за 1 час клиенту и за 40 минут администратору. Неявки снижаются на 70%.',
      'services.card3.title': 'Каталог услуг',
      'services.card3.desc': 'Все процедуры с ценами и описаниями. Клиент видит актуальное меню без звонков.',
      'pricing.title': 'Тарифы',
      'pricing.card1.name': 'Базовый',
      'pricing.card1.period': '3 месяца',
      'pricing.card1.benefit': 'Экономия 160 000 сум (настройка со скидкой более 35%)',
      'pricing.card2.name': 'Комфорт',
      'pricing.card2.period': '6 месяцев',
      'pricing.card2.benefit': 'Экономия 360 000 сум (запуск — 0 сум + обслуживание выгоднее на 15%)',
      'pricing.card3.name': 'Премиум',
      'pricing.card3.period': '12 месяцев',
      'pricing.card3.benefit': 'Экономия 860 000 сум (запуск — бесплатно + более 2 месяцев в подарок!)',
      'pricing.currency': 'сум',
      'pricing.btn': 'Заказать',
      'advantages.title': 'Почему Telegram‑бот',
      'advantages.1.title': 'Все клиенты уже в Telegram',
      'advantages.1.desc': 'Не нужно скачивать приложение — бот открывается в привычном мессенджере, которым пользуется 80% вашей аудитории.',
      'advantages.2.title': 'Экономия времени администратора',
      'advantages.2.desc': 'Бот принимает заявки 24/7, записывает, напоминает и даже отвечает на частые вопросы. Сотрудники занимаются только живым общением.',
      'advantages.3.title': 'Рост записи на 30-50%',
      'advantages.3.desc': 'Удобная запись в 2 клика и автоматические напоминания увеличивают поток клиентов и снижают отток.',
      'contact.title': 'Связаться со мной',
      'contact.subtitle': 'Оставьте номер телефона — я отвечу в Telegram и покажу, как бот поможет вашему салону',
      'form.phone': '+998',
      'form.tariff_placeholder': 'Выберите тариф',
      'form.tariff_basic': 'Базовый',
      'form.tariff_comfort': 'Комфорт',
      'form.tariff_premium': 'Премиум',
      'form.submit': 'Отправить',
      'form.success': 'Спасибо! Скоро свяжемся с вами.',
      'form.error': 'Введите номер и выберите тариф',
      'footer.copy': '© 2025 beautyuz. Все права защищены.'
    },
    uz: {
      'nav.services': 'Xizmatlar',
      'nav.pricing': 'Tariflar',
      'nav.advantages': 'Afzalliklar',
      'nav.contact': 'Kontaktlar',
      'btn.telegram': 'Telegram',
      'hero.title': 'Goʻzallik salonlari uchun Telegram-bot',
      'hero.subtitle': 'Yozilish, eslatmalar va kassani avtomatlashtiring — mijozlarga eʼtibor qarating',
      'hero.cta': 'Botni buyurtma qilish',
      'services.title': 'Bot nimalarni biladi',
      'services.card1.title': 'Onlayn yozilish',
      'services.card1.desc': 'Mijoz toʻgʻridan-toʻgʻri Telegramda vaqt va ustani tanlaydi. Yozilish taqvimga bir zumda tushadi.',
      'services.card2.title': 'Eslatmalar',
      'services.card2.desc': 'Avtomatik xabarnomalar: mijozga 1 soat oldin, administratorga 40 daqiqa oldin. Kelmasliklar 70% ga kamayadi.',
      'services.card3.title': 'Xizmatlar katalogi',
      'services.card3.desc': 'Barcha protseduralar narxlari va tavsiflari bilan. Mijoz qoʻngʻiroqlarsiz joriy menyuni koʻradi.',
      'pricing.title': 'Tariflar',
      'pricing.card1.name': 'Bazaviy',
      'pricing.card1.period': '3 oy',
      'pricing.card1.benefit': '170 000 so‘m ekonomiya (sozlash 50% chegirma)',
      'pricing.card2.name': 'Komfort',
      'pricing.card2.period': '6 oy',
      'pricing.card2.benefit': '350 000 so‘m ekonomiya (ishga tushirish va sozlash — 0 so‘m + 1 oy xizmat sovg‘a)',
      'pricing.card3.name': 'Premium',
      'pricing.card3.period': '12 oy',
      'pricing.card3.benefit': '710 000 so‘m ekonomiya (ishga tushirish — bepul + 2 oy sovg‘a)',
      'pricing.currency': 'so‘m',
      'pricing.btn': 'Buyurtma qilish',
      'advantages.title': 'Nima uchun Telegram-bot',
      'advantages.1.title': 'Barcha mijozlar allaqachon Telegramda',
      'advantages.1.desc': 'Ilovani yuklab olish shart emas — bot tanish messenjerda ochiladi, undan auditoriyangizning 80% foydalanadi.',
      'advantages.2.title': 'Administrator vaqtini tejash',
      'advantages.2.desc': 'Bot 24/7 arizalarni qabul qiladi, yozadi, eslatadi va hatto tez-tez beriladigan savollarga javob beradi. Xodimlar faqat jonli muloqot bilan shugʻullanadi.',
      'advantages.3.title': 'Yozilish 30-50% ga oshadi',
      'advantages.3.desc': '2 marta bosish orqali qulay yozilish va avtomatik eslatmalar mijozlar oqimini oshiradi va ketishni kamaytiradi.',
      'contact.title': 'Men bilan bogʻlanish',
      'contact.subtitle': 'Telefon raqamingizni qoldiring — men Telegramda javob beraman va bot sizning saloningizga qanday yordam berishini koʻrsataman',
      'form.phone': '+998',
      'form.tariff_placeholder': 'Tarifni tanlang',
      'form.tariff_basic': 'Bazaviy',
      'form.tariff_comfort': 'Komfort',
      'form.tariff_premium': 'Premium',
      'form.submit': 'Yuborish',
      'form.success': 'Rahmat! Tez orada siz bilan bogʻlanamiz.',
      'form.error': 'Raqamni kiriting va tarifni tanlang',
      'footer.copy': '© 2025 beautyuz. Barcha huquqlar himoyalangan.'
    }
  };

  let currentLang = localStorage.getItem('lang') || 'ru';
  setLanguage(currentLang);

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      const btnLang = btn.dataset.lang;
      btn.classList.toggle('lang-switch__btn--active', btnLang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });

  // ==================== Contact Form ====================
 const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');
const FORM_URL = 'https://formcarry.com/s/jHTBQjaOE1B'; 

form.addEventListener('submit', async function (e) {
  e.preventDefault(); // блокируем стандартную отправку

  const phoneInput = form.querySelector('#phone');
  const tariffSelect = form.querySelector('#tariff');
  const phone = phoneInput.value.trim();
  const tariff = tariffSelect.value;

  // Проверка заполнения
  if (!phone || phone.length < 7 || !tariff) {
    alert(translations[currentLang]?.['form.error'] || 'Введите номер и выберите тариф');
    return;
  }

  //  данные для отправки
  const formData = new FormData();
  formData.append('phone', phone);
  formData.append('tariff', tariff);

  try {
    const response = await fetch(FORM_URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      // Успех — показывает наше сообщение
      successMsg.hidden = false;
      form.reset();
      setTimeout(() => {
        successMsg.hidden = true;
      }, 5000);
    } else {
      // Если Formcarry вернул ошибку
      const errorText = await response.text();
      console.error('Formcarry error:', errorText);
      alert('Ошибка отправки. Попробуйте позже.');
    }
  } catch (error) {
    console.error(error);
    alert('Ошибка сети. Проверьте интернет.');
  }
});

  // ==================== Mobile Burger Menu ====================
  const burger = document.createElement('button');
  burger.className = 'header__burger';
  burger.setAttribute('aria-label', 'Открыть меню');
  burger.innerHTML = '<span></span><span></span><span></span>';
  
  const headerContainer = document.querySelector('.header__container');
  const nav = document.querySelector('.header__nav');
  headerContainer.insertBefore(burger, document.querySelector('.header__actions'));

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    burger.classList.toggle('header__burger--active');
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });

  nav.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
        burger.classList.remove('header__burger--active');
        burger.setAttribute('aria-label', 'Открыть меню');
      }
    });
  });

  // ==================== Scroll Animations ====================
  const animatedElements = document.querySelectorAll(
    '.service-card, .pricing-card, .advantage, .section__title, .hero__title, .hero__subtitle, .hero__btn'
  );
  animatedElements.forEach(el => el.classList.add('animate'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  animatedElements.forEach(el => observer.observe(el));
})();
