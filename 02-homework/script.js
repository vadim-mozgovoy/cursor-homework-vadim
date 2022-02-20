let startNumber
do {
    startNumber = +prompt("Введите начальное число: N", 0)
} while (!Number.isInteger(startNumber))

let endNumber
do {
    endNumber = +prompt("Введите конечное число: М", 0)
} while (!Number.isInteger(endNumber))

let checkBoolean = confirm("Хотите ли Вы пропускать парные числа ?")
let sum = 0;

function sumInterval() {
    let N = Math.min(startNumber,endNumber)
    let M = Math.max(startNumber,endNumber)
    for (let i = N; i <= M; i++) {
        if (checkBoolean === true) {
            if (i % 2) {
                sum += i
            }
        } else {
            sum += i
        }
    }
    document.write(`<div>Складання чисел від ${N} до ${M}</div>`);
    document.write(`<div>Пропускати парні: ${checkBoolean}</div>`);
    document.write(`<div>Сумма чисел : ${sum}</div>`)
}

sumInterval()









