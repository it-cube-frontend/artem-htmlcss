import {generateWizards, getRandomFireballColor, getRandomCoatColor, getRandomEyesColor} from './data.js';
import {getRandomItem} from './util.js'
import {getSomething, sendData} from './server.js'
const setup = document.querySelector('.setup');
const wizards = generateWizards(4);
const similarList = document.querySelector('.setup-similar-list');

const fillWizards = function(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const wizardElement = createWizardElement(arr[i]);
        similarList.appendChild(wizardElement);
    }
}

const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// console.log(wizardTemplate);

const createWizardElement = (obj) => {
    const wizard = wizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = obj.name; // имя
    wizard.querySelector('.wizard-coat').style.fill = obj.colorCoat; // Цвет
    wizard.querySelector('.wizard-eyes').style.fill = obj.colorEyes; // цвет глаз
    return wizard;
}
// fillWizards(wizards);

const setupSimilar = document.querySelector('.setup-similar');
 setupSimilar.classList.remove('hidden');

//  открытие окна
const onServerSuccess = function(d) {
    // console.log(d);
    fillWizards(d.slice(0, 4))

}
let popup = document.querySelector('.setup-open');
let openPopupButton = document.querySelector('.setup-open');
openPopupButton.addEventListener('click', function () {
    setup.classList.remove('hidden');
    getSomething(onServerSuccess);
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
    wizardCoatColor.style.fill = getRandomCoatColor();
});

// меняем цвет глаз 
let wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
wizardEyesColor.addEventListener('click', function() {
    wizardEyesColor.style.fill = getRandomEyesColor();
});

// меняем цвет фаербола
let fireballColor = document.querySelector('.setup-fireball-wrap');
fireballColor.addEventListener('click', function() {
    fireballColor.style.background = getRandomFireballColor();
});


const onSendSuccess = (res) => {
    setup.classList.add('hidden');
}
const onSendError = (error) => {
    console.log(error);
}
const formElement = setup.querySelector('.setup-wizard-form');
formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const data = new FormData(formElement);
    sendData(data, onSendSuccess, onSendError)
})
