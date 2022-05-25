// 1) функція getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
    const arr = number.toString().split('').sort((a, b) => b - a)
    return arr[0]
}

//2)Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

const pow = (n, power) => {
    let times = power >= 0 ? power : -power;
    let result = 1;
    while (times-- >= 1) result = result * n;
    return power >= 0 ? result : 1 / result;
}

//3)Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

const firstName = (name) => name[0].toUpperCase() + name.substring(1).toLowerCase();

//4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function salary(sal, tax) {
    return sal - sal * (Number.parseFloat(tax)) / 100
}

//5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (n, m) => parseInt(n + Math.random() * (m - n))

// 6)Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(a, str) {
    return str.toLowerCase().split(a.toLowerCase()).length - 1;
}

//7)Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$;
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency(money) {
    let currentExchangeRate = 39.25
    let itemNumber = (parseInt(money) + '').split('').length
    const currency = money.split('').splice(itemNumber).join('').toLowerCase();
    let res, exchange
    if (isNaN(parseInt(money))) {
        return 'Неправильно введено числовое значение!';
    }
    if (currency === 'uah') {
        res = (parseInt(money) / currentExchangeRate).toFixed(2);
        exchange = '$'
    } else if (currency === '$') {
        res = (parseInt(money) * currentExchangeRate).toFixed(2);
        exchange = 'UAH'
    } else {
        return "Помилка!Конвертуються тільки $ або UAH, інші валюти не конвертуються"
    }
    return `${money} = ${res}${exchange} `
}

//8)Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

const getRandomPassword = (length) => Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));

//9)Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters = (letter, text) => text.toLowerCase().split('').filter(item => item !== letter.toLowerCase()).join('')

// 10)Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalindrome(myString) {
    let removeChar = myString.replace(/[^A-Z0-9А-Я]/ig, "").toLowerCase();
    let checkPalindrome = removeChar.split('').reverse().join('');
    if (removeChar === checkPalindrome) {
        return 'Polindrome - true'
    } else {
        return 'is a not Polindrome - false'
    }
}

// 11) Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(text) {
    return text.toLowerCase().split('').filter(function (val, i, str) {
        return text.lastIndexOf(val) === str.indexOf(val)
    }).join('')
}


document.write(`1) Функція getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі getMaxDigit(23489) = <span>${getMaxDigit(23489)}</span> <br>`)
document.write(`2) Функція яка визначає ступінь числа pow(2, -2) = <span>${(pow(2, -2))}</span>  <br>`)
document.write(`3) Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі) = <span>${firstName('ivan')}</span>  <br>`)
document.write(`4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805 = <span>${salary(1000, 19.5)}</span> <br> `)
document.write(`5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5 = <span>${getRandomNumber(1, 10)}</span> <br> `)
document.write(`6) Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "АсталАвіста") -> 4 = <span>${countLetter('А', 'АсталАвіста')}</span> <br> `)
document.write(`7) Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$; 
Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення = <span>${convertCurrency('2043Uah')}</span> <br> `)
document.write(`8)Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам; getRandomPassword(4)= <span>${getRandomPassword(4)}</span><br>`)
document.write(`9)Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl" = <span>${deleteLetters('a', "blAblabla")}</span><br>`)
document.write(`10)Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true <br>
isPalindrome("мадам")= <span>${isPalindrome("мадам")}</span><br>isPalindrome("Я несу гусеня")= <span>${isPalindrome("Я несу гусеня")}</span><br>
isPalindrome("кокос")= <span>${isPalindrome("кокос")}</span><br>`)
document.write(`11)Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим" = <span>${deleteDuplicateLetter('Бісквіт був дуже ніжним')}</span><br>`)


