import isLevelCompleted from '../helpers/isLevelComplited';
import LOCAL_STORAGE_CONFIG from '../constants/locaStorageConfig';
import { setDataInLocalStorage } from '../helpers/localStorage';
import { showTextAnimation } from '../helpers/cssEffects';

const SIDE_BAR_ELEMENTS_ID = {
    nextArrow: 'nextArrow',
    prevArrow: 'prevArrow',
    levelsList: 'levelsList',
    resetProgress: 'resetProgress',
    showAnswerButton: 'showAnswerButton',
    userAnswer: 'userAnswer',
};

const nextArrow = () => document.getElementById(SIDE_BAR_ELEMENTS_ID.nextArrow);
const prevArrow = () => document.getElementById(SIDE_BAR_ELEMENTS_ID.prevArrow);
const levelsList = () => document.getElementById(SIDE_BAR_ELEMENTS_ID.levelsList);
const resetProgress = () => document.getElementById(SIDE_BAR_ELEMENTS_ID.resetProgress);
const showAnswerButton = () => document.getElementById(SIDE_BAR_ELEMENTS_ID.showAnswerButton);
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
        currentAnswer,
        increaseCurrentLevel,
        decreaseCurrentLevel,
        setCurrentLevel,
        setCompletedLevels,
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
        this.currentAnswer = currentAnswer;

        this.onClickPrevArrow = () => {
            decreaseCurrentLevel();
        }

        this.onClickNextArrow = () => {
            increaseCurrentLevel();
        }

        this.onClickResetButton = () => {
            setCurrentLevel(1);
            setCompletedLevels([]);

            setDataInLocalStorage(LOCAL_STORAGE_CONFIG.cssSelectorsData, {
                currentLevel: this.currentLevel,
                completedLevels: this.completedLevels,
            });
        };

        this.onClickShowAnswerButton = () => {
            const userAnswer = document.getElementById(SIDE_BAR_ELEMENTS_ID.userAnswer);

            showTextAnimation(userAnswer, this.currentAnswer);
        };

        
        this.onClickLevelsList = (event) => {
            let { target } = event;

            while (target !== window && target) {
                const newLevelNumber = Number(target.getAttribute('data-level-number'));
                if (newLevelNumber) {
                    setCurrentLevel(newLevelNumber)
                    return;
                }
                target = target.parentNode;
            }
        }
        
        
        this.addListenerSideBar = () => {
            prevArrow().addEventListener('click', this.onClickPrevArrow);
            nextArrow().addEventListener('click', this.onClickNextArrow);
            levelsList().addEventListener('click', this.onClickLevelsList);
            resetProgress().addEventListener('click', this.onClickResetButton);
            showAnswerButton().addEventListener('click', this.onClickShowAnswerButton);
        }

        this.removeListenersSideBar = () => {
            if (prevArrow()) prevArrow().removeEventListener('click', this.onClickPrevArrow);
            if (nextArrow()) nextArrow().removeEventListener('click', this.onClickNextArrow);
            if (resetProgress()) resetProgress().removeEventListener('click', this.onClickResetButton);
            if (levelsList()) levelsList().removeEventListener('click', this.onClickLevelsList);
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
        currentAnswer,
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
         (currentAnswer && currentAnswer !== this.currentAnswer) ||
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
        if (currentAnswer) this.currentAnswer = currentAnswer;
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
        <div class="sidebar__wrapper">
            <input id="toggle-burger" type="checkbox" class="sidebar__burger"></input>
            <label for="toggle-burger"><span></span></label>
            <div id="levelsList" class="sidebar__levels-list levels-list">
                <div class="levels-list__title">Choose a level</div>
                ${this.LEVELS.map((levelData, index) => `
                <div class="levels-list__item" data-level-number=${index + 1}>
                    <span class="checkmark checkmark_list ${isLevelCompleted(index+1, this.completedLevels) ? 'checkmark_completed' : ''}"></span>
                    <span class="level-number">${index+1}</span>
                    <span class="level-selector">${levelData.selectorHTML}</span>
                </div>
                `).join('')}
                <div id="resetProgress" class="levels-list__reset">Reset Progress</div>
            </div>
            <div class="sidebar__header">
                <span class="sidebar__level-text">Level ${this.currentLevel} of ${this.LEVELS.length}</span>
                <span class="sidebar__checkmark checkmark ${isLevelCompleted(this.currentLevel, this.completedLevels) ? 'checkmark_completed' : ''}"></span>
                <div class="sidebar__nav-arrows">
                    <div class="prev" id=${SIDE_BAR_ELEMENTS_ID.prevArrow}></div>
                    <div class="next" id=${SIDE_BAR_ELEMENTS_ID.nextArrow}></div>
                </div>
            </div>
            <div class="sidebar__progress">
                <div class="progress" style="width: ${( this.currentLevel / this.LEVELS.length) * 100}%"></div>
            </div>
            <div class="sidebar__title">${this.titleHTML}</div>
            <div class="sidebar__subtitle">${this.subTitleHTML}</div>
            <div class="sidebar__selector">${this.selectorHTML}</div>
            <div class="sidebar__description">${this.descriptionHTML}</div>
            <div class="sidebar__examples">
                <p>Examples</p>
                ${this.examples.map((example) => `
                <div class="sidebar__example">${example}</div>
                `).join('')}
                <div id="showAnswerButton" class="levels-list__reset">Show answer</div>
            </div>
        </div>
        `);

            this.addListenerSideBar();
    }
}