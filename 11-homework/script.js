// Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:
// Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр
// результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
//
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. Час роботи
// проміса має складати length * 50ms.
//
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

async function getRandomChinese(length) {
    if(length < 0 || !Number.isInteger(length)) throw new Error("Введiть позитивне цiле число!")
    let symbols = [];
    while (length !== 0) {
        await new Promise(resolve => {
            const sign = Date.now().toString().slice(-5);
            const char = String.fromCharCode(+sign);
            setTimeout(resolve, 50)
            symbols.push(char)
        });
        length--;
    }
    return symbols.join('');
}
getRandomChinese(4).then(response => document.write(`Функція getRandomChinese(4) повертає => ${response} `))
