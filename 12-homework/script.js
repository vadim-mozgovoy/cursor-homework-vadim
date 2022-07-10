// https://swapi.dev – Працювати необхідно з цим API.
//     Інформацію про те, як влаштовано АПІ шукайте в документації!
//     Уявіть, що вам прийшло завдання на работі – все що залишив бекендер - це таку документацію та полетів у відпустку)
// Дуже заохочується максимально креативний підхід до цього завдання – робіть стилі, додайте який-небудь приємний шрифт
// (Якщо зовсім туго з ідеями шрифтів візьміть Roboto с Google Fonts).
//
// Створіть кнопку: "отримати інформацію". При натисканні на неї отримайте та відобразіть інформацію про усіх персонажів
// 5 епізоду зоряних війн(films/2). Зверніть увагу, що необхідно вивчити документацію та на її основі вивести інформацію.
//     Виводимо тільки: повне ім'я персонажа, дата народження, стать(якщо зробите іконкою, буде взагалі ідеально).
// БОНУС ПЛЮС: Якщо додумаєтесь, як зберігати і виводити фотки персонажів – буде дуже круто.
//     Я дам підказку: можна створити об'єкт з ключ=посилання_на_персонажа, значення=посилання_на_фотку
// У самому АПІ фотографій нмає, але ДЗшка стане набагато приємніше виглядати з зображеннями персонажів
// Виведіть список усіх планет, які були у зоряних війнах.
//     Додайте кнопку next, яка завантажить наступну сторінку зі списком планет. Попередня сторінка при цьому має пропасти.
//     (відбувається заміна даних)
// ADVANCED: додайте до 1 завдання поле вводу з номером фільму(номер по порядку випуску фильму). Тепер при натисканні
// на кнопку – необхідно отримати інформацію не про 5тий епізод, а про фільм, номер якого вказано у полі вводу.
//     Якщо вказана цифра 1 – потрібно передати запит на /films/1
// ADVANCED: Додайте кнопку перекладу на вукийську мову. Після натискання на кнопку – весь отриманий по апі контент
// повинен перекластись на мову вуки.
//     Для цього достатньо додати до будь-якого запиту: ?format=wookiee.
//     При фантазії – можете ще і текст кнопок перекласти :)

const BASE_URL = 'https://swapi.dev/api'

const characters = document.querySelector('#characters')
const buttonPlanets = document.querySelector('#planets')
const planetsList = document.querySelector('#planetsList')
const buttonNext = document.querySelector('#next')
const buttonPrevious = document.querySelector('#previous')
const select = document.querySelector("#select-film");
const heroesList = document.querySelector("#heroesList");
let page = 1

async function getCharacters() {
    const value = select.value;
    const request = await fetch(`${BASE_URL}/films/${value}`)
    const response = await request.json()
    const people = response.characters

    for (const person of people) {
        const hero = await fetch(person).then((res) => res.json());
        const heroName = hero.name
        const heroInfo = `<span>Name: ${heroName}</span><br><span>Gender: ${hero.gender}</span><br>
                            <span>Birth Year: ${hero.birth_year}</span> `
        const cardHero = document.createElement('div')
        cardHero.classList.add('hero')
        const heroCapture = document.createElement('div')
        heroCapture.innerHTML = heroInfo
        cardHero.style.backgroundImage = `url(./img/${heroName.replaceAll(" ", "").toLowerCase()}.jpg)`
        cardHero.append(heroCapture)
        heroesList.append(cardHero)
    }

}

function showPersons() {
    if (heroesList.hasChildNodes()) {
        heroesList.innerHTML = ''
    }
    getCharacters()
}


async function getPlanets(page = 1) {
    const responsePlanet = fetch(`${BASE_URL}/planets/?page=${page}`)
    responsePlanet.then((response) => response.json().then((res) => {
        console.log(res)
        res.results.forEach(planet => {
            planetsList.insertAdjacentHTML("beforeend", `<div class="planet">${planet.name}</div>`)
        })
    }))
}

function showPlanets() {
    getPlanets(page)
    buttonPlanets.disabled = true
    buttonPlanets.style.opacity = 0.6
}


characters.addEventListener('click', showPersons)
buttonPlanets.addEventListener('click', showPlanets)


buttonNext.addEventListener("click", () => {
    buttonPrevious.disabled = false
    page += 1
    document.querySelectorAll(".planet").forEach((planet) => planet.remove())
    getPlanets(page)
    if (page === 6) {
        buttonNext.disabled = true
    }
})

buttonPrevious.addEventListener("click", () => {
    page -= 1
    if (page < 6) buttonNext.disabled = false
    document.querySelectorAll(".planet").forEach((planet) => planet.remove())
    getPlanets(page)
    if (page === 1) {
        buttonPrevious.disabled = true
    }
})


