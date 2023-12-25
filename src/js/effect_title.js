
document.addEventListener('DOMContentLoaded', (function () {
const titleStart = document.querySelector(".hero__title #text");

const word = ['Seja bem-vindo'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const letterEffect = () => {
    const phrase = word[wordIndex];
    const currentChar = phrase.substring(0, charIndex);
    titleStart.classList.add("stop-bar") 

    titleStart.textContent = currentChar;

    if (!isDeleting && charIndex < phrase.length) {
        charIndex++;
        setTimeout(letterEffect, 200);
    } else if (!isDeleting && charIndex === phrase.length) {
        titleStart.classList.remove("stop-bar")
        isDeleting = true;
        setTimeout(letterEffect, 7000);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(letterEffect, 100);
    } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % word.length;
        setTimeout(letterEffect, 200);
    }

};

letterEffect()
}))


