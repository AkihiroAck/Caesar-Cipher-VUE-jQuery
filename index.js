$(document).ready(function() {
    // Сбрасываем значения в текстовых полях при загрузке страницы
    $("textarea").val("");  // Это сбросит все значения в textarea на пустые

    // Функция для шифрования и дешифрования текста с использованием шифра Цезаря
    function caesarCipher(text, shift) {
        const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let char = text.charAt(i);
            let charIndex = alphabet.indexOf(char);
            if (charIndex === -1) {
                result += char;
            } else {
                let newIndex = (charIndex + shift + alphabet.length) % alphabet.length;
                result += alphabet.charAt(newIndex);
            }
        }
        return result;
    }

    // Создаем Vue-инстанс
    new Vue({
        el: '#encryption-section',  // Указываем раздел для шифрования
        data: {
            encryptionText: '',
            encryptedText: '',
            shift: 3
        },
        methods: {
            encryptText() {
                this.encryptedText = caesarCipher(this.encryptionText, this.shift);
            }
        }
    });

    new Vue({
        el: '#decryption-section',  // Указываем раздел для дешифрования
        data: {
            decryptionText: '',
            decryptedText: '',
            decryptionShift: 3
        },
        methods: {
            decryptText() {
                this.decryptedText = caesarCipher(this.decryptionText, -this.decryptionShift);
            }
        }
    });
});
