/**
 * Converts a text into a celspeak.
 * @param {string} text The text to be converted
 * @returns The converted text into numeric format.
 */
export function textToPhoneSpeak(text: string):string;

/**
 * Converts the celpeak into the original text.
 * @param {string} text The text containing a valid celspeak.
 * @returns The celspeak parsed into human-readable text.
 */
export function phoneSpeakToText(text: string): string;