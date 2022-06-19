const btnStart = document.querySelector('#generate')
const btnStop = document.querySelector('#interval')
const content = document.querySelector('#content')

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

}

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('DIV')
        div.style.height = '50px'
        div.style.width = '50px'
        div.style.backgroundColor = `${getRandomColor()}`
        content.append(div)
    }
}

const generateBlocksInterval = function() {
    const box = document.querySelectorAll("#content>div")
    setInterval(() => box.forEach(el => el.style.backgroundColor = `${getRandomColor()}`), 1000)
}

btnStart.addEventListener('click', generateBlocks,{once:true})
btnStop.addEventListener('click', generateBlocksInterval)

