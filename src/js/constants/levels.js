const LEVELS = [{
    levelNumber: 1,
    headerTitle: '<h1>Select the plates</h1>',
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
    levelNameHTML: '<p>p asda !!!!!!!all p elements.</p>',
    headerTitle: '<h1>Select the plates!!!!!!!!!!</h1>',
    helpBlockHTML: 'super asd!!!!!!!!!!!!!',
    titleHTML: '<p>Type !!!!!!!!!!asd</p>',
    subTitleHTML: '<p>asrters by their type</p>',
    selectorHTML: '<p>Ab!!!!!!!!!!</p>',
    descriptionHTML: '<p>!!!!!!!!!!!! to the type of tag, so div, p and ul are all different element types.</p>',
    examples: [
        '<p>!!!!!!!!!!!!!!!!!</p>.',
        '<p>!!!!!!!!!!!!!1.</p>'
    ],
    templateLines: [
        '<div class="table">',
        '&nbsp;&n!!!!!!!!!!bsp;</plate>',
        '&nbsp;&nbsp;</plate>',
        '</div>'      
    ],
    answer: '.plate',
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
    levelNumber: 3,
    levelNameHTML: '<p>3333p asda !!!!!!!all p elements.</p>',
    headerTitle: '<h1>Select the plates!!!!!!!!!!!!</h1>',
    helpBlockHTML: 'super asd!!!!!!!!!!!!!',
    titleHTML: '<p>Type !!!!!!!!!!asd</p>',
    subTitleHTML: '<p>asrters by their type</p>',
    selectorHTML: '<p>Ab!!!!!!!!!!</p>',
    descriptionHTML: '<p>!!!!!!!!!!!! to the type of tag, so div, p and ul are all different element types.</p>',
    examples: [
        '<p>3333333!!!!!!!!!!!!!!!!!</p>.',
        '<p>3333333!!!!!!!!!!!!!1.</p>'
    ],
    templateLines: [
        '<div class="table">',
        '&nbsp;&n33333333!!!!!!!!!!bsp;</plate>',
        '&nbsp;&nbsp;</plate>',
        '</div>'      
    ],
    answer: '.plate',
    table: [{
        plateNumber: 1,
        children: [],
        hint: '</plate>',
    }, {
        plateNumber: 2,
        children: [],
        hint: '</plate>',
    }],
}];

export default LEVELS;