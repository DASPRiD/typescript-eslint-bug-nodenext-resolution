import {parsePhoneNumber} from 'libphonenumber-js';

const phoneNumber = parsePhoneNumber('1234567890', 'US');
console.log(phoneNumber);

