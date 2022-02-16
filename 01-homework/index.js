const apple = 15.678
const orange = 123.965
const lemon = 90.2345

const max = Math.max(apple, orange, lemon)
const min = Math.min(apple, orange, lemon)
const sumProducts = apple + orange + lemon
const sumProductsFloor = Math.floor(apple) + Math.floor(orange) + Math.floor(lemon)
const sumProductsRound = Math.round(sumProducts / 100) * 100
const checkPairNumber = (Math.floor(sumProducts) % 2) === 0 ? "true" : "false"
const rest = 500 - sumProducts
const average = sumProducts / 3
const averageSumToFix = +average.toFixed(2)

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

const discount = getRandomArbitrary(0, 100)
const order = +(sumProducts - (sumProducts * discount) / 100).toFixed(2)
const profit = +(order / 2 - (order * discount) / 100).toFixed(2)


document.write(`apple = ${apple}<br>`, `orange = ${orange}<br>`, `lemon = ${lemon}<br>`,)
document.write(`Максимальное значение: ${max} <br>`)
document.write(`Минимальное значение: ${min} <br>`)
document.write(`Сумма товаров: ${sumProducts} <br>`)
document.write(`Сумма товаров с округленным значением каждого товара в меньшую сторону: ${sumProductsFloor} <br>`)
document.write(`Сумма товаров округленная до сотен : ${sumProductsRound} <br>`)
document.write(`Является ли сумма товаров округленная в меньшую сторону парным или непарным числом : ${checkPairNumber} <br>`)
document.write(`Остаток с 500 грн без округлений: 500 - ${sumProducts} = ${rest}грн <br>`)
document.write(`Среднее значение цен округленое до 2 знаков после запятой:  ${averageSumToFix}грн <br>`)
document.write(`Случайная скидка на товар:  ${discount} % <br>`)
document.write(`Сумма товара с учетом скидки округленое до 2 знаков после запятой:  ${order}грн <br>`)
document.write(`Чистая прибыль с учетом скидки: ${profit} грн <br>`)


// 2 способ где каждое число массива сначала округляется а потом результаты суммируются
// const arr = [15.678, 123.965, 90.2345 ]
// getProductsFlooredSum = (arr, callback)=>arr.reduce((sum,current)=>sum + callback(current),0)
// console.log(getProductsFlooredSum(arr,Math.floor))


