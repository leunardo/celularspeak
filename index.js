const CHAR_CODE_A = 'a'.charCodeAt(0)
const CHAR_CODE_Z = 'z'.charCodeAt(0)
const CHAR_CODE_R = 'r'.charCodeAt(0)
const CHAR_CODE_S = 's'.charCodeAt(0)


function textToPhoneSpeak(text) {
    text = text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    let result = ''
    for (const char of text) {
        result += `${getNumber(char)}.`
    }

    return result.slice(0, -1)
}

function getNumber(char) {
    const charCode = char.charCodeAt(0);

    if (char === '.') {
        return '___'
    }

    if (char === ' ') {
        return '0'
    }

    if (charCode === CHAR_CODE_S) {
        return '7777'
    }

    if (charCode === CHAR_CODE_Z) {
        return '9999'
    }

    if (charCode < CHAR_CODE_A || charCode > CHAR_CODE_Z) {
        // char is not between a-z, so return itself
        return char
    }

    // before the "7", every number has only three chars. This offset will 
    // remove the difference in calculation caused by the pad that has four chars.
    const biasOffset = charCode <= CHAR_CODE_R ? 0 : 1;
    const charIndex = charCode - CHAR_CODE_A - biasOffset
    const number = Math.floor((charIndex) / 3) + 2
    const result = number.toString().repeat((charIndex) % 3 + 1)

    return result
}

function phoneSpeakToText(text) {
    text = text
        .match(/\S+\.+(\d+|\S+)/g)[0]
        .split('.');

    let result = '';

    for (const groupNumber of text) {
        result += getChar(groupNumber)
    }

    return result
}

function getChar(number) {
    if (number === '___') {
        return '.'
    }

    if (isNaN(number)) {
        return number
    }

    if (number === '0') {
        return ' '
    }

    const position = (number[0] - 2) * 3
    const offset = number[0] > 7 ? 1 : 0
    const charCode = CHAR_CODE_A + position + offset + number.length - 1

    return String.fromCharCode(charCode)
}

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

module.exports = {
    textToPhoneSpeak,
    phoneSpeakToText
}