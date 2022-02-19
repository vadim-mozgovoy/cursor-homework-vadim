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
    for (let i = +startNumber; i <= +endNumber; i++) {
        if (checkBoolean === true) {
            if (i % 2) {
                sum += i
            }
        } else {
            sum += i
        }
    }
    document.write(`Сумма чисел : ${sum}`)
}

sumInterval()
