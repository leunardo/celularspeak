# celularspeak

[![Unit tests](https://github.com/leunardo/celularspeak/actions/workflows/node.js.yml/badge.svg)](https://github.com/leunardo/celularspeak/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/leunardo/celularspeak/branch/main/graph/badge.svg?token=SXDG4D30QR)](https://codecov.io/gh/leunardo/celularspeak)


Convert text into numpad of old cellphones.

## Hello world 🔁 44.33.555.555.666.0.9.666.777.555.3

![image showing a cellphone numeric pad with numbers from 1 to 9](./cellphone-numpad.png)




## Website
### https://celspeak.leonardoalves.dev

## NPM Package

[![NPM](https://nodei.co/npm/celularspeak.png)](https://npmjs.org/package/celularspeak)

```js
import { textToPhoneSpeak, phoneSpeakToText } from 'celularspeak'

textToPhoneSpeak('hello world')
// "44.33.555.555.666.0.9.666.777.555.3"

phoneSpeakToText('44.33.555.555.666.0.9.666.777.555.3')
// "hello world"
```

## Running tests

`npm test`
