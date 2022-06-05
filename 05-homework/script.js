// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const num = parseInt(min + Math.random() * (max - min))
        randomArray.push(num)
    }
    return randomArray
}

console.log('getRandomArray(15, 1, 100) = ', getRandomArray(15, 1, 100))


//2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
    const arrNumbers = [];
    numbers.filter((el) => {
        if (Number.isInteger(el) && !isNaN(el)) return arrNumbers.push(el)
    })

    let count = 1, tempCount, tempPopular;
    let popular = numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
        tempPopular = numbers[i];
        tempCount = 0;
        for (let j = 1; j < numbers.length; j++) {
            if (tempPopular === numbers[j]) tempCount++;
        }
        if (tempCount > count) {
            popular = tempPopular;
            count = tempCount;
        }
    }
    console.log('Саме моднє число [6, 2, 55, 11, 7.8, 2, 5.5, 77, 57, 87, 23, 2, 56, 3, 2, "f" ]:', popular)
}

getModa(6, 2, 55, 11, 7.8, 2, 5.5, 77, 57, 87, 23, 2, 56, 3, 2, 'f')


//3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
    const arrNumbers = [];
    numbers.filter((el) => {
        if (Number.isInteger(el) && !isNaN(el)) return arrNumbers.push(el)
    })
    const total = arrNumbers.reduce((sum, current) => sum + current)
    return total / arrNumbers.length
}

console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) = ', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5
// Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
    const sortIntegerNumbers = numbers.filter(number => Number.isInteger(number) && !isNaN(number)).sort((a, b) => a - b);
    const middleIndex = sortIntegerNumbers.length / 2;
    return Number.isInteger(middleIndex) ? (sortIntegerNumbers[middleIndex - 1] + sortIntegerNumbers[middleIndex]) / 2 : sortIntegerNumbers[Math.floor(middleIndex)];

}

console.log('getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =',getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
console.log('getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =',getMedian(1, 2, 3, 4))
console.log('getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) = ',getMedian(1, 2, 3, 4, 5))

//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers = (...numbers) => numbers.filter((el) => el % 2 !== 0)
console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6) = ',filterEvenNumbers(1, 2, 3, 4, 5, 6))

//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers = (...numbers) => numbers.filter((el) => el > 0).length
console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6) = ',countPositiveNumbers(1, -2, 3, -4, -5, 6))


//7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті,
// які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = (...numbers) => numbers.filter(item => item % 5 === 0)
console.log( 'getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =',getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


// 8.Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "),
// після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати
// список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ****!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(string) {
    let badWords = ['shit', 'fuck'];
    return string.split(' ').map(word => {
        badWords.forEach(bad => {
            if (word.includes(bad)) {
                word = word.replace(bad, '****');
            }
        });
        return word
    }).join(' ')
}


console.log('replaceBadWords("Are you fucking kidding shit?") -',replaceBadWords("Are you fucking kidding shit?"))
console.log('replaceBadWords("Holy shit!") -',replaceBadWords("Holy shit!"))
console.log('replaceBadWords("It\'s bullshit!") -',replaceBadWords("It's bullshit!"))

// 9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word) {
    return word.toLowerCase().split('').filter(item => item !== ' ')
        .reduce((acc, str) => {
            let letter = acc.length - 1;
            (acc[letter] && acc[letter].length < 3) ? acc[letter] += str : acc.push(str);
            return acc;
        }, []);
}

console.log('divideByThree("Commander hello") -',divideByThree("Commander hello"));
console.log('divideByThree("live") - ',divideByThree("live"))

//10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.
//Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами.
//Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]
function generateCombinations(word) {
    if (word.length < 2) {
        return [word];
    } else if (word.length > 10) {
        return "Too long word"
    } else {
        let allCombinations = [];
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            let shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
            let shortWordArray = generateCombinations(shorterWord);
            for (let j = 0; j < shortWordArray.length; j++) {
                allCombinations.push(letter + shortWordArray[j]);
            }
        }
        return allCombinations;
    }
}

console.log('generateCombinations("man") -',generateCombinations("man"))
console.log('generateCombinations("ol") -',generateCombinations("ol"))



