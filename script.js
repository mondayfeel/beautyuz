(function () {
  'use strict';

  const translations = {
    ru: {
      'nav.services': 'Услуги',
      'nav.pricing': 'Тарифы',
      'nav.advantages': 'Преимущества',
      'nav.contact': 'Контакты',
      'btn.telegram': 'Telegram',
      'hero.title': 'Telegram-боты для салонов красоты',
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
      'pricing.card1.name': 'START',
      'pricing.card1.period': 'Для частного мастера или маленького салона',
      'pricing.card1.f1': '1 Telegram-бот',
      'pricing.card1.f2': 'до 20 услуг',
      'pricing.card1.f3': '1-2 мастера',
      'pricing.card1.f4': 'базовая онлайн‑запись',
      'pricing.card1.f5': 'админ‑панель',
      'pricing.card1.f6': 'поддержка в стандартном режиме',
      'pricing.card2.name': 'STANDARD',
      'pricing.card2.period': 'Лучший вариант для большинства салонов',
      'pricing.card2.f1': '1 Telegram-бот',
      'pricing.card2.f2': 'до 50 услуг',
      'pricing.card2.f3': 'до 5 мастеров',
      'pricing.card2.f4': 'расписание и свободные слоты',
      'pricing.card2.f5': 'уведомления клиенту и админу',
      'pricing.card2.f6': 'экспорт / backup',
      'pricing.card2.f7': 'приоритетная настройка',
      'pricing.card3.name': 'PRO',
      'pricing.card3.period': 'Для активных салонов с большим потоком',
      'pricing.card3.f1': 'до 100 услуг',
      'pricing.card3.f2': 'до 15 мастеров',
      'pricing.card3.f3': 'расширенные настройки расписания',
      'pricing.card3.f4': 'акции / лояльность',
      'pricing.card3.f5': 'расширенный экспорт',
      'pricing.card3.f6': 'приоритетная поддержка',
      'pricing.card3.f7': 'ежемесячная мини‑проверка',
      'pricing.currency': 'UZS / мес',
      'pricing.btn': 'Заказать',
      'pricing.note': 'Цены базовые, могут адаптироваться под город, объём услуг, мастеров и поддержку',
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
      'form.tariff_start': 'START',
      'form.tariff_standard': 'STANDARD',
      'form.tariff_pro': 'PRO',
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
      'hero.title': 'Goʻzallik salonlari uchun Telegram-botlar',
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
      'pricing.card1.name': 'START',
      'pricing.card1.period': 'Xususiy usta yoki kichik salon uchun',
      'pricing.card1.f1': '1 Telegram-bot',
      'pricing.card1.f2': '20 tagacha xizmat',
      'pricing.card1.f3': '1-2 usta',
      'pricing.card1.f4': 'oddiy onlayn yozilish',
      'pricing.card1.f5': 'admin panel',
      'pricing.card1.f6': 'standart qo‘llab-quvvatlash',
      'pricing.card2.name': 'STANDARD',
      'pricing.card2.period': 'Ko‘pchilik salonlar uchun eng yaxshi variant',
      'pricing.card2.f1': '1 Telegram-bot',
      'pricing.card2.f2': '50 tagacha xizmat',
      'pricing.card2.f3': '5 tagacha usta',
      'pricing.card2.f4': 'jadval va bo‘sh slotlar',
      'pricing.card2.f5': 'mijoz va adminga xabarnomalar',
      'pricing.card2.f6': 'eksport / backup',
      'pricing.card2.f7': 'ustuvor sozlash',
      'pricing.card3.name': 'PRO',
      'pricing.card3.period': 'Katta oqimli faol salon  uchun',
      'pricing.card3.f1': '100 tagacha xizmat',
      'pricing.card3.f2': '15 tagacha usta',
      'pricing.card3.f3': 'kengaytirilgan jadval sozlamalari',
      'pricing.card3.f4': 'aksiya / loyalty',
      'pricing.card3.f5': 'kengaytirilgan eksport',
      'pricing.card3.f6': 'ustuvor qo‘llab-quvvatlash',
      'pricing.card3.f7': 'oylik mini-tekshiruv',
      'pricing.currency': 'UZS / oy',
      'pricing.btn': 'Buyurtma qilish',
      'pricing.note': 'Narxlar bazaviy, shahar, xizmatlar hajmi, ustalar va qo‘llab-quvvatlashga qarab moslashtirilishi mumkin',
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
      'form.tariff_start': 'START',
      'form.tariff_standard': 'STANDARD',
      'form.tariff_pro': 'PRO',
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
    e.preventDefault();

    const phoneInput = form.querySelector('#phone');
    const tariffSelect = form.querySelector('#tariff');
    const phone = phoneInput.value.trim();
    const tariff = tariffSelect.value;

    if (!phone || phone.length < 7 || !tariff) {
      alert(translations[currentLang]?.['form.error'] || 'Введите номер и выберите тариф');
      return;
    }

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
        successMsg.hidden = false;
        form.reset();
        setTimeout(() => { successMsg.hidden = true; }, 5000);
      } else {
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
