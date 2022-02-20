let startNumber
do {
    startNumber = +prompt("Введите начальное число: N", 0)
    if (Number.isNaN(startNumber) || !Number.isInteger(startNumber)) alert('Вы ввели не числовое значение!!! Введите пожалуста целое число')
} while (Number.isNaN(startNumber) || !Number.isInteger(startNumber))

let endNumber
do {
    endNumber = +prompt("Введите конечное число: М", 0)
    if (Number.isNaN(endNumber) || !Number.isInteger(endNumber)) alert('Вы ввели не числовое значение!!! Введите пожалуста целое число')
} while (Number.isNaN(endNumber) || !Number.isInteger(endNumber))

let checkBoolean = confirm("Хотите ли Вы пропускать парные числа ?")
let sum = 0;

function sumInterval() {
    let N = Math.min(startNumber, endNumber)
    let M = Math.max(startNumber, endNumber)
    for (let i = N; i <= M; i++) {
        if (checkBoolean === true && i % 2) {
            sum += i
        } else {
            sum += i
        }
    }
    document.write(`<div>Складання чисел від ${N} до ${M}</div>`);
    document.write(`<div>Пропускати парні: ${checkBoolean}</div>`);
    document.write(`<div>Сумма чисел : ${sum}</div>`)
}

sumInterval()









