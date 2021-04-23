import {getRandomItem} from './util.js';

let wizardName = ['Иван', 'Хуан Себастьян', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)' ,'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
let wizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];



const generateWizard = () => {
    const wizard = {
        name: getRandomItem(wizardName),
        coatColor: getRandomItem(coatColor),
        eyesColor: getRandomItem(eyesColor),
    };
    return wizard;
}

export const generateWizards = function(number) {
    const arr = [];
    for (let i = 0; i < number; i++) {
        const wizard = generateWizard();
        arr[i] = wizard;
    }
    return arr;
}

export const getRandomFireballColor = () => {
    return getRandomItem(wizardFireballColor)
}