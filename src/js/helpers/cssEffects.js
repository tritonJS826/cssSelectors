export const addHighLight = (hightLightedItems) => {
    if (hightLightedItems[0]) hightLightedItems[0].classList.add('lightShadow');
    if (hightLightedItems[1]) hightLightedItems[1].classList.add('lightColor');
    if (hightLightedItems[2]) hightLightedItems[2].classList.add('lightColor');
};

export const removeHighLight = (hightLightedItems, element) => {
    if (hightLightedItems[0]) hightLightedItems[0].classList.remove('lightShadow');
    if (hightLightedItems[1]) hightLightedItems[1].classList.remove('lightColor');
    if (hightLightedItems[2]) hightLightedItems[2].classList.remove('lightColor');

    element.removeEventListener('mouseout', () => removeHighLight(hightLightedItems, element));
}

export const flyItemAway = (element) => {
    element.classList.add('fly-away-animation');
};

export const shakeElement = (element) => {
    element.classList.add('shake-animation');
    setTimeout(() => {
        element.classList.remove('shake-animation');
    }, 1000);
}

export const showTextAnimation = (element, text) => {
    const arrText = text.split('');

    element.value = '';


    arrText.forEach((letter, i) => {
        setTimeout(() => {
            element.value += letter;
        }, 100 * i);
    });
};