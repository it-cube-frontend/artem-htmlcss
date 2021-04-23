const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export const getRandomItem = (arr) => { 
    const randomIndex = getRandomInt(arr.length)
    return arr[randomIndex];
}