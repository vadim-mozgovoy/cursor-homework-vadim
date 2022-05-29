const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//1)Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const pairs = function getPairs(students) {
    let groups;
    const girls = students.filter((stud) => {
        return stud[stud.length - 1] === 'а';
    });
    const boys = students.filter((stud) => {
        return stud[stud.length - 1] !== 'а';
    });

    groups = boys.map((boy, i) => [boy, girls[i]]);
    return groups

}
console.log('Хлопець + дівчина:', pairs(students))

//2) Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function getGroupThemes() {
    const team = pairs(students)
    const groupThemes = [];

    for (let i = 0; i < team.length; i++) {
        groupThemes.push([team[i][0] + ' i ' + team[i][1], themes[i]])
    }
    return groupThemes
}

console.log('Кожна команда отримала свою тему проекту', getGroupThemes())

//3) Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function givePersonMarks() {
    const arrStudents = students
    const arrMarks = marks
    const personMarks = [];
    for (let i = 0; i < arrStudents.length; i++) {
        personMarks.push([arrStudents[i], arrMarks[i]])
    }
    return personMarks
}

console.log('Персональна оцiнка для кожного студента', givePersonMarks())

//4) Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function giveRandomMarks() {
    const pairsRandomMarks = [];
    const pairsGroups = getGroupThemes()

    for (let i = 0; i < pairsGroups.length; i++) {
        pairsRandomMarks.push(pairsGroups[i])
        pairsRandomMarks[i].push(Math.floor(Math.random() * 5) + 1)
    }
    return pairsRandomMarks
}

console.log('Командна оцiнка', giveRandomMarks())
