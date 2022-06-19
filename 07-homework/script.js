const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};

const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};

const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

// 1.Створіть функцію getMyTaxes.call(country, salary) -> number;
// – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
//   Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
    return this.tax * salary
}

console.log(`Податок з зарплати сягає :`, getMyTaxes.call(ukraine, 1500))
console.log(`Податок з зарплати сягає :`, getMyTaxes.call(latvia, 1500))
console.log(`Податок з зарплати сягає :`, getMyTaxes.call(litva, 1500))

// 2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків
// платятт IT-спеціалісти у кожній країні.(tax * middleSalary). Функція повинна викликатись через call та
// працювати з даними через this

function getMiddleTaxes() {
    return this.tax * this.middleSalary
}

console.log(`Податок в Ukraine з середньої зарплати 1789$ сягає :`, getMiddleTaxes.call(ukraine))
console.log(`Податок в Latvia з середньої зарплати 1586 сягає :`, getMiddleTaxes.call(latvia))
console.log(`Податок в Litva з середньої зарплати 1509 сягає :`, getMiddleTaxes.call(litva))


// 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
// (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
}

console.log(`Всього податків в Ukraine платять IT-спеціалісти :`, getTotalTaxes.call(ukraine))
console.log(`Всього податків в Latvia платять IT-спеціалісти :`, getTotalTaxes.call(latvia))
console.log(`Всього податків в Litva платять IT-спеціалісти :`, getTotalTaxes.call(litva))

// 4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:' +
// ' { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {
    console.log('Wait 10 seconds ...')
    setInterval(() => {
        const salary = +(Math.random() * (2000 - 1500) + 1500).toFixed(2)
        const taxes = +(this.tax * salary).toFixed(2)
        const profit = +(salary - taxes).toFixed()
        const obj = {salary: salary, taxes: taxes, profit: profit}
        console.log(`${country}`, obj)
    }, 10000)
}

getMySalary.call(ukraine, 'Ukraine')

