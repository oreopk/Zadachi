function decryptMessage(encryptedMessage, decryptionKey) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const key = decryptionKey % 26;
  console.log(key);
  let decryptedMessage = '';

  for (let i = 0; i < encryptedMessage.length; i++) {
    const char = encryptedMessage[i];
    if (char == ' ') {
      decryptedMessage += ' ';
    } else {
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toUpperCase());

      if (index !== -1) {
        let newIndex = index - key;
        if (newIndex <= 0) {
          newIndex = 26 + newIndex;
        }
        let decryptedChar = alphabet.charAt(newIndex % 26);
        decryptedMessage += decryptedChar;
      } else {
        decryptedMessage += char;
      }
    }
  }

  return decryptedMessage;
}

const encryptedMessage = 'L ORYH BRX';
const decryptionKey = 3;
const decryptedMessage = decryptMessage(encryptedMessage, decryptionKey);
console.log(decryptedMessage);
