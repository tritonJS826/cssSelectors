import isLevelCompleted from '../helpers/isLevelComplited';

const SIDE_BAR_ELEMENTS_ID = {
    nextArrow: 'nextArrow',
    prevArrow: 'prevArrow',
};

const nextArrow = () => document.getElementById(SIDE_BAR_ELEMENTS_ID.nextArrow);
const prevArrow = () => document.getElementById(SIDE_BAR_ELEMENTS_ID.prevArrow);

export default class SideBar {
    constructor({
        LEVELS,
        currentLevel,
        completedLevels,
        levelNumber,
        levelNameHTML,
        titleHTML,
        subTitleHTML,
        selectorHTML,
        descriptionHTML,
        examples,
        increaseCurrentLevel,
        decreaseCurrentLevel,
    }) {
        this.whereId = '';
        this.LEVELS = LEVELS;
        this.currentLevel = currentLevel;
        this.completedLevels = completedLevels;
        this.levelNumber = levelNumber;
        this.levelNameHTML = levelNameHTML;
        this.titleHTML = titleHTML;
        this.subTitleHTML = subTitleHTML;
        this.selectorHTML = selectorHTML;
        this.descriptionHTML = descriptionHTML;
        this.examples = examples;
        this.increaseCurrentLevel = () => increaseCurrentLevel();
        this.decreaseCurrentLevel = () => decreaseCurrentLevel();

        this.onClickPrevArrow = () => {
            this.decreaseCurrentLevel();
        }

        this.onClickNextArrow = () => {
            this.increaseCurrentLevel();
        }
        
        
        this.addListenerSideBar = () => {
            prevArrow().addEventListener('click', this.onClickPrevArrow);
            nextArrow().addEventListener('click', this.onClickNextArrow);

        }

        this.removeListenersSideBar = () => {
            if (prevArrow()) prevArrow().removeEventListener('click', this.onClickPrevArrow);
            if (nextArrow()) nextArrow().removeEventListener('click', this.onClickNextArrow);
        }
    }

    getProps({ 
        LEVELS,
        whereId,
        currentLevel,
        completedLevels,
        levelNumber,
        levelNameHTML,
        titleHTML,
        subTitleHTML,
        selectorHTML,
        descriptionHTML,
        examples,
    }) {
         const isDataChanged = (LEVELS && LEVELS !== this.LEVELS) || 
         (whereId && whereId !== this.whereId) ||
         (completedLevels && completedLevels !== this.completedLevels) ||
         (currentLevel && currentLevel !== this.currentLevel) ||
         (levelNumber && levelNumber !== this.levelNumber) ||
         (levelNameHTML && levelNameHTML !== this.levelNameHTML) ||
         (titleHTML && titleHTML !== this.titleHTML) ||
         (subTitleHTML && subTitleHTML !== this.subTitleHTML) ||
         (selectorHTML && selectorHTML !== this.selectorHTML) ||
         (descriptionHTML && descriptionHTML !== this.descriptionHTML) ||
         (examples && examples !== this.examples) || false;
         
        if (LEVELS) this.LEVELS = LEVELS;
        if (whereId) this.whereId = whereId;
        if (completedLevels) this.completedLevels = completedLevels;
        if (currentLevel) this.currentLevel = currentLevel;
        if (levelNumber) this.levelNumber = levelNumber;
        if (levelNameHTML) this.levelNameHTML = levelNameHTML;
        if (titleHTML) this.titleHTML = titleHTML;
        if (subTitleHTML) this.subTitleHTML = subTitleHTML;
        if (selectorHTML) this.selectorHTML = selectorHTML;
        if (descriptionHTML) this.descriptionHTML = descriptionHTML;
        if (examples) this.examples = examples;
        

        if (isDataChanged) {
            this.rerender();
        }
    }

    rerender() {
        if (this.whereId) {
            this.removeListenersSideBar();
            this.render(this.whereId);
        }
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
            <div className="sideBar">
                <h2 class="sidebar__level">Level ${this.currentLevel} of ${this.LEVELS.length} </h2>
                <p> Уровень ${isLevelCompleted(this.currentLevel, this.completedLevels) ? 'завершен' : 'еще не пройден'} </p>
                <div class="sidebar__nav-arrows">
                    <div id=${SIDE_BAR_ELEMENTS_ID.prevArrow}><</div>
                    <div id=${SIDE_BAR_ELEMENTS_ID.nextArrow}>></div>
                </div>
                <div class="sidebar__burger" id="">=</div>
                <div class="level__progress-bar">${( this.currentLevel / this.LEVELS.length) * 100}%</div>
                <div class="sidebar__title">${this.titleHTML}</div>
                <div class="sidebar__subtitle">${this.subTitleHTML}</div>
                <div class="sidebar__selector">${this.selectorHTML}</div>
                <div class="sidebar__description">${this.descriptionHTML}</div>

                <div class="sidebar__examples">
                    <p>Examples</p>
                    ${this.examples.map((example) => `
                    <p class="sidebar__example">${example}</p>
                    `)}
                </div>

                <div class="sidebar__levels-list levels-list">
                It is List (start)
                ${this.LEVELS.map((levelData) => `
                <p class="levels-list__item">${levelData.selectorHTML}</p></br>
                `)}
                It is List (end)
                </div>
            </div>`)

            this.addListenerSideBar();
    }
}