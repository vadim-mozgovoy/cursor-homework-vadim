const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//1)Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const pairs = function getPairs(students) {
    let groups = [];
    const group1 = [students[0], students[2]];
    const group2 = [students[1], students[3]];
    const group3 = [students[4], students[5]];
    groups.push(group1, group2, group3)
    return groups
}
console.log(pairs(students))

//2) Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function getGroupThemes() {
    const p = pairs(students)
    const groupThemes = [];

    for (let i = 0; i < p.length; i++) {
        groupThemes.push([p[i][0] + ' i ' + p[i][1], themes[i]])
    }
    return groupThemes
}

console.log(getGroupThemes())

//3) Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function givePersonMarks() {
    const s = students
    const m = marks
    const personMarks = [];
    for (let i = 0; i < s.length; i++) {
        personMarks.push([s[i], m[i]])
    }
    return personMarks
}

console.log(givePersonMarks())

//4) Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function giveRandomMarks() {
    const pairsRandomMarks = [];
    const r = getGroupThemes()

    for (let i = 0; i < r.length; i++) {
        pairsRandomMarks.push(r[i])
        pairsRandomMarks[i].push(Math.floor(Math.random() * 5) + 1)
    }
    return pairsRandomMarks
}

console.log(giveRandomMarks())
