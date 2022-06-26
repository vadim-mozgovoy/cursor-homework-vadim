const buttons = document.querySelectorAll('.sound');

function playNote(e) {
    const sound = document.querySelector(`audio[data-key="${e}"]`);
    if (!sound) return;
    sound.play();
}

function currentButton(e) {
    const clickedBtn = document.getElementById(e);
    if (clickedBtn == null) return;
    clickedBtn.classList.add("active");
}

buttons.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("active");
}

document.addEventListener("keyup", (e) => {
    playNote(e.keyCode)
    currentButton(e.keyCode)
});

buttons.forEach(el => el.addEventListener('click', (e) => {
    playNote(e.target.closest('.sound').id)
    currentButton(e.target.closest('.sound').id)
}))
