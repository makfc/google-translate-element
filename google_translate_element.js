document.cookie = 'googtrans=/auto/zh-TW;path=/'
let body = document.body;

let script = document.createElement('script');
script.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
script.setAttribute('type', 'text/javascript');
body.appendChild(script);

let div = body.insertBefore(document.createElement('div'), body.firstChild);
div.id = 'google_translate_element';
div.style.display = "none";

let script2 = document.createElement('script');
script2.text = 'function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"",includedLanguages: "zh-TW",layout: google.translate.TranslateElement.InlineLayout.SIMPLE},"google_translate_element");}';
script2.setAttribute('type', 'text/javascript');
body.appendChild(script2);