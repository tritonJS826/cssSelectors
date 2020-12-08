const LEVELS = [{
    levelNumber: 1,
    headerTitle: 'Select the plates',
    levelNameHTML: '<p>p selects all p elements.</p>',
    helpBlockHTML: 'super hint!',
    titleHTML: 'Type Selector',
    subTitleHTML: 'Select elements by their type',
    selectorHTML: 'A',
    descriptionHTML: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    examples: [
        '<strong>div</strong> selects all <tag>div</tag> elements.',
        '<strong>p</strong> selects all <tag>p</tag> elements.'
    ],
    answer: 'plate',
    tableItems: [{
        plateNumber: 1,
        hint: 'plate',
        pair: true,
        cssClassName: 'roundPlate',
        children: [{
            childNumber: 1,
            cssClassName: 'orange',
            small: true,
            hint: 'orange'
        },
        {
            childNumber: 2,
            cssClassName: 'apple',
            hint: 'apple'
        },
        {
            childNumber: 3,
            cssClassName: 'apple',
            hint: 'apple'
        }],
    }, {
        plateNumber: 2,
        children: [
            {
                childNumber: 1,
                cssClassName: 'pickle',
                hint: 'small',
            }, {
                childNumber: 2,
                cssClassName: 'pickle',
                hint: 'pickle',
            }, {
                childNumber: 1,
                cssClassName: 'pickle',
                hint: 'pickle',
                small: true,
            }],
        hint: 'plate',
        pair: true,
        cssClassName: 'roundPlate',
    }],
}, {
    levelNumber: 2,
    headerTitle: 'Select the bento boxes',
    levelNameHTML: 'Select the bento boxes',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'Type Selector',
    subTitleHTML: 'Select elements by their type',
    selectorHTML: 'A',
    descriptionHTML: 'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
    examples: [
        'selects all div elements.',
        'selects all p elements.'
    ],
    answer: '.plate',
    tableItems: [{
        plateNumber: 1,
        children: [],
        hint: 'bento',
        pair: true,
        cssClassName: 'squarePlate',
    }, {
        plateNumber: 2,
        children: [],
        hint: 'plate',
        pair: true,
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 3,
        children: [],
        hint: 'bento',
        pair: true,
        cssClassName: 'squarePlate',
    }],
}, {
    levelNumber: 3,
    levelNameHTML: '<p>p asda !!!!!!!all p elements.</p>',
    headerTitle: 'Select the fancy plate',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'ID Selector',
    subTitleHTML: 'Select elements with an ID',
    selectorHTML: '#id',
    descriptionHTML: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
    examples: [
        '#cool selects any element with id="cool"',
        'ul#long selects ul id="long"',
    ],
    answer: '#fancy',
    tableItems: [{
        plateNumber: 1,
        children: [],
        hint: 'plate',
        cssClassName: 'roundPlate',
        idName: 'fancy',
    }, {
        plateNumber: 2,
        children: [],
        hint: 'plate',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 3,
        children: [],
        hint: 'bento',
        cssClassName: 'squarePlate',
    }],
}, {
    levelNumber: 4,
    headerTitle: 'Select the apple on the plate',
    levelNameHTML: 'asd',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'Descendant Selector',
    subTitleHTML: 'Select an element inside another element',
    selectorHTML: 'A  B',
    descriptionHTML: 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
    examples: [
        'p  strong selects all strong elements that are inside of any p.',
        '#fancy  span selects any span elements that are inside of the element with id="fancy"'
    ],
    answer: 'plate apple',
    tableItems: [{
        plateNumber: 1,
        children: [],
        hint: 'bento',
        pair: true,
        cssClassName: 'squarePlate',
    }, {
        plateNumber: 2,
        children: [],
        hint: 'plate',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 3,
        children: [],
        hint: 'apple',
        cssClassName: 'roundPlate',
    }],
}, {
    levelNumber: 5,
    levelNameHTML: '<p>3333p asda !!!!!!!all p elements.</p>',
    headerTitle: 'Select the pickle on the fancy plate',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'Combine the Descendant & ID Selectors',
    subTitleHTML: '',
    selectorHTML: '#id  A',
    descriptionHTML: 'You can combine any selector with the descendent selector.',
    examples: [
        '#cool span selects all span elements that are inside of elements with id="cool"',
    ],
    answer: '#fancy pickle',
    tableItems: [{
        plateNumber: 1,
        children: [{
            childNumber: 2,
            cssClassName: 'apple',
            hint: 'apple'
        },
        {
            childNumber: 3,
            cssClassName: 'apple',
            hint: 'apple'
        }],
        hint: 'plate',
        cssClassName: 'roundPlate',
        idName: 'fancy',
    }, {
        plateNumber: 2,
        children: [
        {
            childNumber: 3,
            cssClassName: 'pickle',
            hint: 'pickle'
        }],
        hint: 'plate',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 3,
        children: [{
            childNumber: 2,
            cssClassName: 'apple',
            hint: 'apple'
        },
        {
            childNumber: 3,
            cssClassName: 'apple',
            hint: 'apple'
        }],
        hint: 'bento',
        cssClassName: 'squarePlate',
    }],
}, {
    levelNumber: 6,
    headerTitle: 'Select the small apples',
    levelNameHTML: '<p>p selects all p elements.</p>',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'Class Selector',
    subTitleHTML: 'Select elements by their class',
    selectorHTML: '.classname',
    descriptionHTML: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
        '.neato selects all elements with class="neato"',
    ],
    answer: '.small',
    tableItems: [{
        plateNumber: 1,
        children: [],
        hint: 'plate',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 2,
        children: [],
        hint: 'plate',
        cssClassName: 'squarePlate',
    }],
}, {
    levelNumber: 7,
    levelNameHTML: '<p>p asda !!!!!!!all p elements.</p>',
    headerTitle: 'Select the small oranges',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'Combine the Class Selector',
    subTitleHTML: 'Combine the Class Selector',
    selectorHTML: 'A.className',
    descriptionHTML: 'You can combine the class selector with other selectors, like the type selector.',
    examples: [
        'ul.important selects all ul elements that have class="important"',
        '#big.wide selects all elements with id="big" that also have class="wide"'
    ],
    answer: 'orange.small',
    tableItems: [{
        plateNumber: 1,
        children: [{
            childNumber: 2,
            cssClassName: 'apple',
            hint: 'apple'
        },
        {
            childNumber: 3,
            cssClassName: 'apple',
            hint: 'apple'
        }],
        hint: 'plate',
        cssClassName: 'roundPlate',
        idName: 'fancy',
    }, {
        plateNumber: 2,
        children: [
        {
            childNumber: 3,
            cssClassName: 'pickle',
            hint: 'pickle'
        }],
        hint: 'plate',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 3,
        children: [{
            childNumber: 2,
            cssClassName: 'apple',
            hint: 'apple'
        },
        {
            childNumber: 3,
            cssClassName: 'apple',
            hint: 'apple'
        }],
        hint: 'bento',
        cssClassName: 'squarePlate',
    },],
}, {
    levelNumber: 8,
    levelNameHTML: '<p>3333p asda !!!!!!!all p elements.</p>',
    headerTitle: 'Select the small oranges in the bentos',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'You can do it...',
    subTitleHTML: '',
    selectorHTML: 'Put your back into it!',
    descriptionHTML: 'Combine what you learned in the last few levels to solve this one!',
    examples: [],
    answer: 'bento orange.small',
    tableItems: [{
        plateNumber: 13214,
        children: [],
        hint: '</plate>',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 2322,
        children: [],
        hint: '</plate>',
        cssClassName: 'roundPlate',
    }],
}, {
    levelNumber: 9,
    headerTitle: 'Select all the plates and bentos',
    levelNameHTML: '<p>p selects all p elements.</p>',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'Comma Combinator',
    subTitleHTML: 'Combine, selectors, with... commas!',
    selectorHTML: 'A, B',
    descriptionHTML: 'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
        'p, .fun selects all p elements as well as all elements with class="fun"',
        'a, p, div selects all a, p and div elements',
    ],
    answer: 'plate, bento',
    tableItems: [{
        plateNumber: 1,
        children: [],
        hint: 'plate;',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 2,
        children: [],
        hint: 'plate;',
        cssClassName: 'squarePlate',
    }],
}, {
    levelNumber: 10,
    levelNameHTML: '<p>p asda !!!!!!!all p elements.</p>',
    headerTitle: 'Select all the things!',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'The Universal Selector',
    subTitleHTML: 'You can select everything!',
    selectorHTML: '*',
    descriptionHTML: 'You can select all elements with the universal selector! ',
    examples: [
        'p * selects any element inside all p elements.',
    ],
    answer: '*',
    tableItems: [{
        plateNumber: 1,
        children: [],
        hint: '</plate>',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 2,
        children: [],
        hint: '</plate>',
        cssClassName: 'roundPlate',
    }],
}, {
    levelNumber: 11,
    levelNameHTML: '<p>3333p asda !!!!!!!all p elements.</p>',
    headerTitle: 'Select everything on a plate',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: 'Combine the Universal Selector',
    subTitleHTML: '',
    selectorHTML: 'A  *',
    descriptionHTML: 'This selects all elements inside of A.',
    examples: [
        'p * selects every element inside all p elements.',
        'ul.fancy * selects every element inside all ul class="fancy" elements.',
    ],
    answer: 'plate *',
    tableItems: [{
        plateNumber: 13214,
        children: [],
        hint: '</plate>',
        cssClassName: 'roundPlate',
    }, {
        plateNumber: 2322,
        children: [],
        hint: '</plate>',
        cssClassName: 'roundPlate',
    }],
}];

export default LEVELS;