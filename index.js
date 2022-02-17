const mappingKeys = {
    'a': '2',
    'b': '22',
    'c': '222',
    'd': '3',
    'e': '33',
    'f': '333',
    'g': '4',
    'h': '44',
    'i': '444',
    'j': '5',
    'k': '55',
    'l': '555',
    'm': '6',
    'n': '66',
    'o': '666',
    'p': '7',
    'q': '77',
    'r': '777',
    's': '7777',
    't': '8',
    'u': '88',
    'v': '888',
    'w': '9',
    'x': '99',
    'y': '999',
    'z': '9999',
    ' ': '0',

    '2': 'a',
    '22': 'b',
    '222': 'c',
    '3': 'd',
    '33': 'e',
    '333': 'f',
    '4': 'g',
    '44': 'h',
    '444': 'i',
    '5': 'j',
    '55': 'k',
    '555': 'l',
    '6': 'm',
    '66': 'n',
    '666': 'o',
    '7': 'p',
    '77': 'q',
    '777': 'r',
    '7777': 's',
    '8': 't',
    '88': 'u',
    '888': 'v',
    '9': 'w',
    '99': 'x',
    '999': 'y',
    '9999': 'z',
    '0': ' ',
    '___': '.'
}

function textToPhoneSpeak() {
    const text = document.querySelector('#texto')
        .value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    let phonedSpeak = '';

    for (let char of text) {
        if (mappingKeys[char]) {
            phonedSpeak += `${mappingKeys[char]}.`
        } else if (char === '.') {
            phonedSpeak += '___.'
        } else {
            phonedSpeak += `${char}.`
        }
    }

    phonedSpeak = phonedSpeak.substring(0, phonedSpeak.length - 1)

    document.querySelector('#resultado').value = phonedSpeak;
}

function phoneSpeakToText() {
    const charGroups = document.querySelector('#celularspeak').value.split('.');
    let convertedText = '';

    for (let group of charGroups) {
        if (mappingKeys[group]) {
            convertedText += mappingKeys[group];
        } else {
            convertedText += group;
        }
    }

    document.querySelector('#resultado2').value = convertedText;
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.querySelector('#resultado').value);
}