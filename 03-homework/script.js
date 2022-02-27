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

const firstName = (name) => name[0].toUpperCase() +name.substring(1).toLowerCase();

//4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function salary(sal, tax){
    return sal-sal*(Number.parseFloat(tax))/100
}

//5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (n,m) =>parseInt(n + Math.random() * (m-n))

// 6)Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(a, str) {
    return str.toLowerCase().split(a).length - 1
}

//7)Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$;
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

// function convertCurrency(money){
//
// }




document.write(`1) Функція getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі getMaxDigit(23489) = <span>${getMaxDigit(23489)}</span> <br>`)
document.write(`2) Функція яка визначає ступінь числа pow(2, -2) = <span>${(pow(2, -2))}</span>  <br>`)
document.write(`3) Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі) = <span>${firstName('ivan')}</span>  <br>`)
document.write(`4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805 = <span>${salary(1000, 19.5)}</span> <br> `)
document.write(`5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5 = <span>${getRandomNumber(1,10)}</span> <br> `)
document.write(`6) Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "АсталАвіста") -> 4 = <span>${countLetter('а', 'АсталАвіста')}</span> <br> `)



