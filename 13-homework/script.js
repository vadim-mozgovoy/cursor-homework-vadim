// Завдання 1:
// Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:
//     const idGenerator = createIdGenerator();
// idGenerator.next().value -> 1
// idGenerator.next().value -> 2
// idGenerator.next().value -> 3
// Завдання 2 (advanced)
//
// Створіть генератор, який буде регулювати розміри шрифту для вашого сайту.
// (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
// Працювати генератор буде наступним чином:
//
//     const fontGenerator = newFontGenerator(14); // 14 – стартове значення
//
// fontGenerator.next("up").value -> 14
// fontGenerator.next("up").value -> 16
// fontGenerator.next("up").value -> 18
// fontGenerator.next().value -> 18
// fontGenerator.next("down").value -> 16
// fontGenerator.next("down").value -> 14
// fontGenerator.next("down").value -> 12
// fontGenerator.next().value -> 12

const btnUp = document.querySelector('#up')
const btnDown = document.querySelector('#down')
const body = document.querySelector('body')
const globalFontSize = Number(window.getComputedStyle(body, null).getPropertyValue('font-size').slice(0, 2))

// Завдання 1:
function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator()

console.log("idGenerator.next().value -> ", idGenerator.next().value);
console.log("idGenerator.next().value -> ", idGenerator.next().value);
console.log("idGenerator.next().value -> ", idGenerator.next().value);


// Завдання 2 (advanced)
function* newFontGenerator(fontSize) {
    while (fontSize >= 0) {
        let action = yield fontSize;
        if (action === 'up') {
            fontSize += 2;
        } else if (action === 'down') {
            const result = fontSize - 2;
            fontSize = result < 0 ? fontSize : result;
        }
    }
}

const fontGenerator = newFontGenerator(globalFontSize)
console.log(`fontGenerator.next('up').value-> `, fontGenerator.next('up').value);//14
console.log(`fontGenerator.next('up').value-> `, fontGenerator.next('up').value);//16
console.log(`fontGenerator.next('up').value-> `, fontGenerator.next('up').value);//18
console.log(`fontGenerator.next().value-> `, fontGenerator.next().value);//18
console.log(`fontGenerator.next('down').value-> `, fontGenerator.next('down').value);//16
console.log(`fontGenerator.next('down').value-> `, fontGenerator.next('down').value);//14
console.log(`fontGenerator.next('down').value-> `, fontGenerator.next('down').value);//12
console.log(`fontGenerator.next().value-> `, fontGenerator.next().value);//12

btnUp.addEventListener("click", () => {
    const fontSize = fontGenerator.next("up").value;
    body.style.fontSize = `${fontSize}px`;
});
btnDown.addEventListener("click", () => {
    const fontSize = fontGenerator.next("down").value;
    body.style.fontSize = `${fontSize}px`;
});

