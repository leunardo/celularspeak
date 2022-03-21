const { faker } = require('@faker-js/faker');
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

test('numbers in original text must be consideraded and translated correctly', () => {
    const text = 'this is my text, please call me at 555-0606 bye.'
    const c = textToPhoneSpeak(text)

    expect(c).toEqual('8.44.444.7777.0.444.7777.0.6.999.0.8.33.99.8.,.0.7.555.33.2.7777.33.0.222.2.555.555.0.6.33.0.2.8.0.;5;.;5;.;5;.-.;0;.;6;.;0;.;6;.0.22.999.33.___')
})

test.each`
    originalText
    ${"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie mollis enim, ut pellentesque sapien mattis a. Vivamus ut eleifend metus, quis suscipit felis. Vivamus sollicitudin eu massa pellentesque pretium. Vivamus eros leo, pellentesque ac sem ut, venenatis gravida neque. Nulla dapibus ut nibh eget facilisis. Duis varius feugiat vestibulum. Integer lacinia ultricies ipsum, id gravida odio porta nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel urna vitae ex vehicula faucibus non in nisi. In auctor vitae tellus a ultricies. In sodales nec elit ac dignissim."}
    ${"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack."}
    ${"What goes around, goes around"}
    ${"The need society am put water get fine want up reserved should ecstatic thus greatest in mr for He What to an stood simplicity get Can here garden for what Admitting via fat on wont though they has middletons built he held Neglected than between mrs get length being"}
    ${"besides estimating drawn Recommend sake Visited Rose wooded wife he Started old Home west so put out gay so use saw produce Prepared had no reserved in high assured if no prevailed on make leave existence though disposed two narrow"}
    ${"mr not compact terms him no expense Sir had Likewise Melancholy one say Her poor so offended material lady of Houses Felicity right matter evening body Not draw Led making of ought he found incommode money led doubt Collected shy up their to wholly contented any do my water unsatiable your met though in Hard"}
    ${"Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments; Our stern alarums changed to merry meetings, Our dreadful marches to delightful measures. Grim-visaged war hath smooth'd his wrinkled front;"}
`('returns the corrected conversion for diversal text samples', ({ originalText }) => {
    originalText = originalText.toLowerCase()
    const c = textToPhoneSpeak(originalText)
    const d = phoneSpeakToText(c)

    expect(d).toEqual(originalText)
})

const generatedTextCase = []
for (let i = 0; i < 100; i++) {
    generatedTextCase.push([faker.lorem.paragraph()])
    generatedTextCase.push([faker.name.findName()])
    generatedTextCase.push([faker.hacker.phrase()])
}

test.each(generatedTextCase)('Conversion of %s', (originalText) => {
    originalText = originalText.toLowerCase()
    const c = textToPhoneSpeak(originalText)
    const d = phoneSpeakToText(c)

    expect(d).toEqual(originalText)
})