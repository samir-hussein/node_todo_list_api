require('dotenv').config();
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+=';
var charLength = chars.length;
var length = 30;
var result = '';
for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
}

const asciiStringEncoded = btoa(result);
console.log(`App Key: ${asciiStringEncoded}`);
