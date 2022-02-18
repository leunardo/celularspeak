const { test, expect } = require('@jest/globals');
const { textToPhoneSpeak, phoneSpeakToText } = require('../index');


test('convert text to phonespeak then text again must output the same result', () => {
    const text = 'this is a sample text! very good 😂😂, test test kkkkkk'
    const c = textToPhoneSpeak(text);
    const d = phoneSpeakToText(c);

    expect(d).toEqual(text)
})

test('accents must be converted to unnacent chars', () => {
    const text = 'áéíóúçâêîôûãõ'
    const c = textToPhoneSpeak(text)
    const d = phoneSpeakToText(c)

    expect(d).toEqual('aeioucaeiouao')
})

