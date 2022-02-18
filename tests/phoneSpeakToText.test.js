const { test, expect } = require('@jest/globals');
const { phoneSpeakToText } = require('../index');

test('22.2.66.2.66.2 must be "banana"', () => {
    expect(phoneSpeakToText('22.2.66.2.66.2')).toBe('banana')
})

test('additional text with phonespeak must be ignored on conversion', () => {
    expect(phoneSpeakToText('Carlos 2.0.66.666.777.6.2.555.0.8.33.99.8.0.777.33.77.88.444.777.33.7777.0.2.0.555.666.8.0.666.333.0.8.44.444.66.4.7777'))
        .toBe('a normal text requires a lot of things')
})

test('phone speak must work with accents and different characters not mapped', () => {
    expect(phoneSpeakToText('44.2.44.2.44.2.!.0.444.7777.7777.666.0.33.0.6.88.444.8.666.0.33.66.4.777.2.222.2.3.666.55.55.55.55.___.0.66.2.666.0.7.2.777.666.0.3.33.0.777.444.777.!.!.!.!'))
        .toBe('hahaha! isso e muito engracadokkkk. nao paro de rir!!!!')
})

test('phone speak must preserve emoji', () => {
    expect(phoneSpeakToText('33.7777.7777.33.0.8.33.99.8.666.0.222.666.66.8.33.6.0.88.6.0.33.6.666.5.444.0.🤣'))
        .toBe('esse texto contem um emoji 🤣')
})
