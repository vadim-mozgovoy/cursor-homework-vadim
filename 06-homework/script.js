const students = [{
    name: "Tanya", course: 3, subjects: {
        math: [4, 4, 3, 4], algorithms: [3, 3, 3, 4, 4, 4], data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor", course: 4, subjects: {
        physics: [5, 5, 5, 3], economics: [2, 3, 3, 3, 3, 5], geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton", course: 2, subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5], english: [5, 3], cosmology: [5, 5, 5, 5]
    }
}];


// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(studentIndex) {
    let subjects = [];
    const obj = students[studentIndex]
    for (const objElement in obj.subjects) {
        const firstLetterUpperCase = objElement.charAt(0).toUpperCase() + objElement.slice(1)
        const deleteSpace = firstLetterUpperCase.split('_').join(' ')
        subjects.push(deleteSpace)
    }
    return subjects
}

console.log('getSubjects(students[0]) =>', getSubjects(0))
console.log('getSubjects(students[1]) =>', getSubjects(1))
console.log('getSubjects(students[2]) =>', getSubjects(2))

// Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого
// студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(studentIndex) {
    const listOfMarks = Object.values(students[studentIndex].subjects).flat();
    const arrNumbers = listOfMarks.filter((el) => Number.isInteger(el) && !isNaN(el));
    const total = arrNumbers.reduce((sum, current) => sum + current)
    return Number((total / arrNumbers.length).toFixed(2))
}

console.log('getAverageMark(students[0]) =>', getAverageMark(0))
console.log('getAverageMark(students[1]) =>', getAverageMark(1))
console.log('getAverageMark(students[2]) =>', getAverageMark(2))

// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає
// інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
// ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(studentIndex) {
    const obj = students[studentIndex]
    return {
        name: obj.name, course: obj.course, averageMark: getAverageMark(studentIndex)
    }
}

console.log('getStudentInfo(students[0])=>', getStudentInfo(0))
console.log('getStudentInfo(students[1])=>', getStudentInfo(1))
console.log('getStudentInfo(students[2])=>', getStudentInfo(2))

// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    return students.map((student) => student.name).sort()
}

console.log('getStudentsNames(students)=> ', getStudentsNames(students))

// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
    let maxMark = 0;
    let bestStudent;
    students.forEach((student) => {
        if (getAverageMark(students.indexOf(student)) > maxMark) {
            maxMark = getAverageMark(students.indexOf(student));
            bestStudent = student.name;
        }
    });
    return bestStudent;
}

console.log('getBestStudent(students)=>', getBestStudent(students))

// Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт,
// в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(str){
    return str.split('').reduce(function (acc, val) {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {})
}

console.log('calculateWordLetters("тест") =>',calculateWordLetters("тест"))
