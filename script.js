const translations = {
  kz: {
    pageTitle: 'Qyz Uzatu',
    musicText: 'Әуенді қосу үшін үстінен басыңыз!',
    subtitle: 'QYZ UZATU',
    brideName: 'Marzhan',
    scrollDownText: 'ТӨМЕН ТҮСІҢІЗ',
    invitationTitle: 'ҚҰРМЕТТІ ҚОНАҚТАР!',
    invitationText: 'СІЗДЕРДІ АЯУЛЫ<br><span class="marzh-">Маржан</span>КЫЗЫМЫЗДЫҢ ҰЗАТУ ТОЙЫНА ЖАЙЫЛҒАН<br>САЛТАНАТТЫ АҚ ДАСТАРХАНЫМЫЗДЫҢ<br>ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА ШАҚЫРАМЫЗ!',
    eventTitle: 'Той салтанаты',
    eventDate: '14 ТАМЫЗ 2026 ЖЫЛ',
    eventTime: 'САҒАТ: 19:00',
    calendarTitle: 'Тамыз 2026',
    weekdayMon: 'ДС',
    weekdayTue: 'СС',
    weekdayWed: 'СР',
    weekdayThu: 'БС',
    weekdayFri: 'ЖМ',
    weekdaySat: 'СН',
    weekdaySun: 'ЖС',
    countdownTitle: 'ТОЙҒА ДЕЙІН',
    countdownDays: 'Күн',
    countdownHours: 'Сағат',
    countdownMinutes: 'Минут',
    countdownFinished: 'Той басталды',
    locationTitle: 'Мекенжайымыз',
    locationText: 'АЯГӨЗ ҚАЛАСЫ<br>SAMURYQ МЕЙРАМХАНАСЫ',
    ownersTitle: 'Той иелері',
    formTitle: 'Қатысу растау',
    namePlaceholder: 'Аты-жөніңіз',
    attendanceYes: 'Қуана барамын',
    attendancePartner: 'Жұбайыммен келемін',
    attendanceNo: 'Келе алмаймын',
    attendanceYesValue: 'Иә',
    attendancePartnerValue: 'Жұбайыммен',
    attendanceNoValue: 'Жоқ',
    messagePlaceholder: 'Тілектеріңіз',
    submitButton: 'Жіберу',
    successMessage: 'Жауабыңыз қабылданды',
    errorMessage: 'Қате пайда болды'
  },
  ru: {
    pageTitle: 'Qyz Uzatu RU',
    musicText: 'Нажмите, чтобы включить музыку!',
    subtitle: 'QYZ UZATU',
    brideName: 'Marzhan',
    scrollDownText: 'ЛИСТАЙТЕ ВНИЗ',
    invitationTitle: 'ДОРОГИЕ ГОСТИ!',
    invitationText: 'ПРИГЛАШАЕМ ВАС СТАТЬ ПОЧЕТНЫМИ ГОСТЯМИ<br>ТОРЖЕСТВЕННОГО ДАСТАРХАНА, НАКРЫТОГО В ЧЕСТЬ<br>ПРОВОДОВ НАШЕЙ ДОРОГОЙ ДОЧЕРИ<br><span class="marzh-">Маржан!</span>',
    eventTitle: 'Торжество',
    eventDate: '14 АВГУСТА 2026 ГОДА',
    eventTime: 'ВРЕМЯ: 19:00',
    calendarTitle: 'Август 2026',
    weekdayMon: 'ПН',
    weekdayTue: 'ВТ',
    weekdayWed: 'СР',
    weekdayThu: 'ЧТ',
    weekdayFri: 'ПТ',
    weekdaySat: 'СБ',
    weekdaySun: 'ВС',
    countdownTitle: 'ДО ТОРЖЕСТВА',
    countdownDays: 'Дней',
    countdownHours: 'Часов',
    countdownMinutes: 'Минут',
    countdownFinished: 'Торжество началось',
    locationTitle: 'Адрес',
    locationText: 'ГОРОД АЯГОЗ<br>РЕСТОРАН SAMURYQ',
    ownersTitle: 'Хозяева торжества',
    formTitle: 'Подтвердите участие',
    namePlaceholder: 'Ваше имя',
    attendanceYes: 'С радостью приду',
    attendancePartner: 'Приду с супругом/супругой',
    attendanceNo: 'Не смогу прийти',
    attendanceYesValue: 'Да',
    attendancePartnerValue: 'С супругом/супругой',
    attendanceNoValue: 'Нет',
    messagePlaceholder: 'Ваши пожелания',
    submitButton: 'Отправить',
    successMessage: 'Ваш ответ принят',
    errorMessage: 'Произошла ошибка'
  }
}

let currentLang = 'kz'

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  })
})

document.querySelectorAll('.fade-up').forEach((el) => {
  observer.observe(el)
})

const targetDate = new Date('August 14, 2026 19:00:00').getTime()
const countdown = document.getElementById('countdown')

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now
  const labels = translations[currentLang]

  if (distance <= 0) {
    countdown.innerHTML = labels.countdownFinished
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  )
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  )

  countdown.innerHTML = `
    <div class="countdown-grid">
      <div class="countdown-item">
        <div class="countdown-value">${days}</div>
        <div class="countdown-label">${labels.countdownDays}</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">${hours}</div>
        <div class="countdown-label">${labels.countdownHours}</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">${minutes}</div>
        <div class="countdown-label">${labels.countdownMinutes}</div>
      </div>
    </div>
  `
}

const setLanguage = (lang) => {
  if (!translations[lang]) {
    return
  }

  currentLang = lang
  document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru'
  document.title = translations[lang].pageTitle

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n
    el.textContent = translations[lang][key]
  })

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml
    el.innerHTML = translations[lang][key]
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder
    el.placeholder = translations[lang][key]
  })

  document.querySelectorAll('[data-i18n-value]').forEach((el) => {
    const key = el.dataset.i18nValue
    el.value = translations[lang][key]
  })

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel
    el.setAttribute('aria-label', translations[lang][key])
  })

  document.querySelectorAll('.lang-switch span').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })

  updateCountdown()
}

setInterval(updateCountdown, 1000)
updateCountdown()

const musicBtn = document.getElementById('musicBtn')
const musicIcon = document.getElementById('musicIcon')
const bgMusic = document.getElementById('bgMusic')

let playing = false

musicBtn.addEventListener('click', () => {
  if (playing) {
    bgMusic.pause()
    musicIcon.innerHTML = '▶'
  } else {
    bgMusic.play()
    musicIcon.innerHTML = '❚❚'
  }

  playing = !playing
})

document.querySelectorAll('.lang-switch span').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang)
  })
})

setLanguage(currentLang)

const form = document.getElementById('guestForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const formData = new FormData(form)

  const data = {
    name: formData.get('name'),
    attendance: formData.get('attendance'),
    message: formData.get('message')
  }

  try {
    await fetch('https://script.google.com/macros/s/AKfycbx10pdteR6VqkxqX-aauZFnYCE2NNMGtXRprom7u2qo_5ScSSAAqZa9c2wqGSQ4pB4O/exec', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data)
    })

    document.getElementById('successMessage').innerHTML = translations[currentLang].successMessage

    form.reset()
  } catch (error) {
    document.getElementById('successMessage').innerHTML = translations[currentLang].errorMessage
  }
})
