(() => {
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

    let css = '#\\:2\\.container { top: auto; bottom: 0px; } body { top: auto !important; margin-bottom: 40px; } #goog-gt-tt { padding: 4px !important; } #goog-gt-tt > div:nth-child(1) { display: none; } #goog-gt-tt > div.top { display: none; } #goog-gt-tt > div.middle { padding: unset !important; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    body.style.top = "auto"
})()