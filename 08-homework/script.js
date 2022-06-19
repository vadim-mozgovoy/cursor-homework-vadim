// У стдентів повинні бути наступні властивості: university, course, fullName,
// вони передаються при створенні студента(в конструктор).

class Students {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismiss = false
    }

// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    get getMarks() {
        return this.dismiss ? null : this.marks
    }

// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена,
// геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set setMarks(mark) {
        return this.dismiss ? null : this.marks.push(mark)
    }

// Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер",
// метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return `${this.course} ${this.university} ${this.fullName}`
    }

// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    getAverageMark() {
        return this.marks.reduce((sum, val) => {
            return Number((sum + val / this.marks.length).toFixed(2))
        }, 0)
    }

// Створіть метод this.dismiss, який "виключить" студента.
// Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

    dismissed() {
        return this.dismiss = true
    }

// Створіть метод this.recover, який дозволить поновити студента

    recover() {
        return this.dismiss = false
    }
}

const ostap = new Students('Вищої Школи Психотерапії м.Одеса', 'Студент 1го курсу', 'Остап Бендер', [5, 4, 4, 5])
console.log('Iнформация про студента:', ostap.getInfo())
console.log('Mасив оцінок студента', ostap.getMarks)
ostap.setMarks = 5;
console.log('Новий масив оцінок студента', ostap.getMarks)
console.log('Середнiй бал студента:', ostap.getAverageMark())
console.log('Статус чи студента видалено:', ostap.dismissed())
console.log(ostap.getMarks)
console.log('Статус чи студента видалено:', ostap.recover())
console.log(ostap.getMarks)

// Advanced
//
// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту.
// Підказка: викликайте його в constructor

class BudgetStudent extends Students {
    constructor(university, course, fullName, marks, scholarShip) {
        super(university, course, fullName, marks)
        this.scholarShip = scholarShip
        setInterval(function () {
            this.getScholarship()
        }.bind(this), 30000)
    }

// Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship.
// Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )
    getScholarship() {
        return (this.dismiss || this.getAverageMark() < 4) ? console.log('Ви виключені або Ваша середня оцінка менше 4') : console.log(`Ви отримали ${this.scholarShip}грн стипендії`);
    }
}

const ivan = new BudgetStudent('Вищої Школи Прикладної Математики м.Київ', 'Студент 2го курсу', 'Iван Полуботок', [4, 4, 5, 5], 1500)
console.log('<<<<<<<<Advanced>>>>>>>>')
console.log('Iнформация про студента:', ivan.getInfo())
ivan.getScholarship()
console.log('Статус чи студента видалено:', ivan.dismissed())
ivan.getScholarship()
console.log('Статус чи студента видалено:', ivan.recover())
ivan.setMarks = 1
console.log(ivan.getMarks)
console.log(`Середнiй бал студента ${ivan.fullName}:`, ivan.getAverageMark())
ivan.getScholarship()




