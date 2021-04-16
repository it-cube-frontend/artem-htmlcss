import {generateWizards} from './data.js';
const setup = document.querySelector('.setup');
// console.log(setup.className);
// setup.classList.remove('hidden');


const numbers = [1,2,3,3,4,5,6];


// const wizard = generateWizard();
// console.log(wizard);


const wizards = generateWizards(4);
const similarList = document.querySelector('.setup-similar-list');

const fillWizards = function(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const wizardElement = createWizardElement(wizards[i]);
        similarList.appendChild(wizardElement);
    }
}


const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// console.log(wizardTemplate);

const createWizardElement = (obj) => {
    const wizard = wizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = obj.name; // имя
    wizard.querySelector('.wizard-coat').style.fill = obj.coatColor; // Цвет
    wizard.querySelector('.wizard-eyes').style.fill = obj.eyesColor; // цвет глаз
    return wizard;
}
fillWizards(wizards);

const setupSimilar = document.querySelector('.setup-similar');
 setupSimilar.classList.remove('hidden');

//  открытие окна
let popup = document.querySelector('.setup-open');
let openPopupButton = document.querySelector('.setup-open');

openPopupButton.addEventListener('click', function () {
    setup.classList.remove('hidden');
});
// закрытие окна
let closePopupButton = setup.querySelector('.setup-close');
closePopupButton.addEventListener('click', function () {
    setup.classList.add('hidden');
});

// окно настройки персонажа  открывается при нажати ENTER
document.addEventListener('keydown', function(evt) {
    // console.log(evt.code);
    if (evt.code === 'Enter') {
        setup.classList.remove('hidden')
    }
  });


// окно настройки персонажа  закрывается при нажати ESC
document.addEventListener('keydown', function(evt) {
    // console.log(evt.code);
    if (evt.code === 'Escape') {
        setup.classList.add('hidden')
    }
  });

// меняем цвет мантии
let wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
wizardCoatColor.addEventListener('click', function() {
    wizardCoatColor.style.fill = getRandomItem(coatColor);
});

// меняем цвет глаз 
let wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
wizardEyesColor.addEventListener('click', function() {
    wizardEyesColor.style.fill = getRandomItem(eyesColor);
});

// меняем цвет фаербола
let fireballColor = document.querySelector('.setup-fireball-wrap');
fireballColor.addEventListener('click', function() {
    fireballColor.style.background = getRandomItem(wizardFireballColor);
});
