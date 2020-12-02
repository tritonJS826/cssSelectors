const LEVELS = [{
    levelNumber: 1,
    levelNameHTML: '<p>p selects all p elements.</p>',
    helpBlockHTML: 'super manual!!!!!!!!!!!!!',
    titleHTML: '<p>Type Selector</p>',
    subTitleHTML: '<p>Select elements by their type</p>',
    selectorHTML: '<p>A</p>',
    descriptionHTML: '<p>Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.</p>',
    examples: [
        '<p>selects all div elements</p>.',
        '<p>selects all p elements.</p>'
    ],
    templateLines: [
        '<div class="table">',
        '&nbsp;&nbsp;</plate>',
        '&nbsp;&nbsp;</plate>',
        '</div>'      
    ],
    answer: 'plate',
    table: [{
        plateNumber: 1,
        children: [],
        hint: '</plate>',
    }, {
        plateNumber: 2,
        children: [],
        hint: '</plate>',
    }],
},{
    levelNumber: 2,
    levelNameHTML: '<p>p asda all p elements.</p>',
    helpBlockHTML: 'super asd!!!!!!!!!!!!!',
    titleHTML: '<p>Type asd</p>',
    subTitleHTML: '<p>asd elements by their type</p>',
    selectorHTML: '<p>A</p>',
    descriptionHTML: '<p>Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.</p>',
    examples: [
        '<p>selects all div elements</p>.',
        '<p>selects all p elements.</p>'
    ],
    templateLines: [
        '<div class="table">',
        '&nbsp;&nbsp;</plate>',
        '&nbsp;&nbsp;</plate>',
        '</div>'      
    ],
    answer: 'plate',
    table: [{
        plateNumber: 1,
        children: [],
        hint: '</plate>',
    }, {
        plateNumber: 2,
        children: [],
        hint: '</plate>',
    }],
},];

export default LEVELS;