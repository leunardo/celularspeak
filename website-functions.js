function convertTextToPhoneSpeak() {
    const text = document.querySelector('#texto').value;
    const converted = textToPhoneSpeak(text);

    document.querySelector('#resultado').value = converted;
}

function convertPhoneSpeakToText() {
    const text = document.querySelector('#celularspeak').value;
    const converted = phoneSpeakToText(text);

    document.querySelector('#resultado2').value = converted;
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.querySelector('#resultado').value);
}

function clearInput(field) {
    document.querySelector('#' + field).value = '';
}

function pasteClipboard() {
    navigator.clipboard.readText().then(text => {
        document.querySelector('#celularspeak').value = text;
        convertPhoneSpeakToText();
    })
}