$(document).ready(function() {
    // Сбрасываем значения в текстовых полях при загрузке страницы
    $("textarea").val("");  // Это сбросит все значения в textarea на пустые

    // Функция для шифрования и дешифрования текста с использованием шифра Цезаря
    // Принимает текст и количество итераций (сдвиг)
    function caesarCipher(text, shift) {
        // Русский алфавит (включая ё, ь, ъ, большие и маленькие буквы)
        const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        let result = '';  // Инициализируем переменную для хранения результата

        // Проходим по каждому символу в тексте
        for (let i = 0; i < text.length; i++) {
            let char = text.charAt(i);  // Извлекаем символ по индексу
            let charIndex = alphabet.indexOf(char);  // Находим индекс этого символа в алфавите

            // Если символ не найден в алфавите (например, пробел или пунктуация), добавляем его в результат без изменений
            if (charIndex === -1) {
                result += char;
            } else {
                // Если символ найден в алфавите, вычисляем новый индекс с учётом сдвига
                // Используем оператор % для цикличности: если сдвиг превышает длину алфавита, он вернётся в начало
                let newIndex = (charIndex + shift + alphabet.length) % alphabet.length;

                // Добавляем преобразованный символ в результат
                result += alphabet.charAt(newIndex);
            }
        }

        // Возвращаем зашифрованный или расшифрованный текст
        return result;
    }

    // Обработчик события для кнопки "Шифровать"
    $("button:contains('Шифровать')").click(function() {
        // Получаем текст для шифрования из первого текстового поля
        var inputText = $("#encryption textarea:first").val();

        // Получаем количество итераций (сдвиг) из поля ввода для шифрования
        var shift = parseInt($("#encryption-shift").val());

        // Вызываем функцию шифрования с переданными параметрами (текст и сдвиг)
        var result = caesarCipher(inputText, shift);

        // Выводим результат в поле для вывода результата шифрования (второе поле)
        $("#encryption textarea:last").val(result);
    });

    // Обработчик события для кнопки "Дешифровать"
    $("button:contains('Дешифровать')").click(function() {
        // Получаем текст для дешифрования из первого текстового поля
        var inputText = $("#decryption textarea:first").val();

        // Получаем количество итераций (сдвиг) из поля ввода для дешифрования
        var shift = parseInt($("#decryption-shift").val());

        // Вызываем функцию шифрования с отрицательным сдвигом для дешифрования текста
        // Если сдвиг положительный для шифрования, то для дешифрования его нужно инвертировать (отрицательное значение)
        var result = caesarCipher(inputText, -shift);

        // Выводим результат в поле для вывода результата дешифрования (второе поле)
        $("#decryption textarea:last").val(result);
    });
});
