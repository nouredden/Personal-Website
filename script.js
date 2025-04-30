const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// LANGUAGE CODE START


// const translations = {
//   en: {
//       my_name: "I'm NOUR EDDEN",
//       logo:"NOUR EDDEN",
//       lastname:"ALREZ",
//       description: "Here you can find the most delicious food in the world.",
//       Cat1: "Main Course",
//       Cat1_Meal1: "Lasal Cheese",
//       Cat6_Meal4d: "A variety of fruit and vegetable smoothies."
//      },
//   ar: {
//       my_name: "اسمي نور الدين ",
//       logo:"نور الدين",
//       lastname:"الرز",
//       description: "هنا تجدون أطيب وألذ المأكولات في العالم.",
//       Cat1: "الطبق الرئيسي",
//       Cat1_Meal1: "جبن لاسال",
//       Cat1_Meal1d: "مزيج لذيذ من الجبن المذاب مع طبقة علوية مقرمشة.",
//       Cat6_Meal4d: "مجموعة متنوعة من السموثي المصنوع من الفواكه والخضروات."
//      }};

// function changeLanguage() {
//   const lang = document.getElementById('language-select').value;
//   setLanguage(lang);
// }

// function setLanguage(lang) {
//   const elementsToTranslate = Object.keys(translations[lang]);
//           elementsToTranslate.forEach(key => {
//               const element = document.getElementById(key);
//               if (element) {
//                   if (element.tagName.toLowerCase() === 'h3') {
//                       const priceSpan = element.querySelector('.primary-text');
//                       const priceText = priceSpan ? priceSpan.outerHTML : '';
//                       element.innerHTML = `${translations[lang][key]} ${priceText}`;
//                   } else {
//                       element.innerText = translations[lang][key];
//                   }
//               }
//           });
  
//   document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
//   }

// function detectLanguage() {
//   const browserLang = navigator.language.slice(0, 2);
//   const supportedLangs = ['en', 'ar'];
//   const defaultLang = 'en';
//   const lang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;
//   setLanguage(lang);
// }

// window.onload = detectLanguage;

// LANGUAGE CODE END