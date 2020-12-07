import CssEditor from './CssEditor';
import Footer from './Footer';
import Header from './Header';
// import HTMLViewer from './HTMLViewer';
import SideBar from './SideBar';
import Table from './Table';

import LEVELS from '../constants/levels';
import { SECONDS_BEFORE_NEXT_LEVEL } from '../constants/common';
import createCurrentLevelStore from '../helpers/createCurrentLevelStore';
import HTMLViewer from './HTMLViewer';

export default class App {
    constructor() {
        this.currentLevel = 1;
        this.completedLevels = []; // Array<number>

        this.currentLevelStore = createCurrentLevelStore(this.currentLevel);
        this.header = { status: 'notCreated'};
        this.cssEditor = { status: 'notCreated'};
        this.htmlViewer = { status: 'notCreated'};
        this.sideBar = { status: 'notCreated', getProps: () => {}};
        this.table = { status: 'notCreated'};
    }

    getCurrentLevelStore() {
        return this.createCurrentLevelStore;
    }

    setCurrentLevelStore(newStore) {
        this.currentLevelStore = newStore;

        const sideBarProps = {
            levelNumber: this.currentLevelStore.currentLevelNumber,
            levelNameHTML: this.currentLevelStore.LevelNameHTML,
            titleHTML: this.currentLevelStore.currentTitleHTML,
            subTitleHTML: this.currentLevelStore.currnetSubTitleHTML,
            selectorHTML: this.currentLevelStore.currentSelectorHTML,
            descriptionHTML: this.currentLevelStore.currentDescriptionHTML,
            examples: this.examples,
        };

        const headerProps = {
            levelTitle: this.currentLevelStore.currentLevelTitle,
            helpBlockHTML: this.currentLevelStore.currentHelpBlockHTML,
            isHelpBlockHTMLVisible: this.currentLevelStore.isCurretHelpBlockHTMLVisible,
        };

        const tableProps = {
            tableItems: this.currentLevelStore.currentTableItems,
        };

        const htmlViewerProps = {
            tableItems: this.currentLevelStore.currentTableItems,
        }

        
        this.htmlViewer.getProps(htmlViewerProps);
        this.header.getProps(headerProps);
        this.sideBar.getProps(sideBarProps);
        this.table.getProps(tableProps);
    }

    // setTableState() {}

    toggleHelpBlock() {
        this.currentLevelStore.isCurretHelpBlockHTMLVisible = !this.currentLevelStore.isCurretHelpBlockHTMLVisible;

        const headerNewState = {
            isHelpBlockHTMLVisible: this.currentLevelStore.isCurretHelpBlockHTMLVisible,
        }

        this.header.getProps(headerNewState);
    }

    checkUserAnswer(answer) {
        return answer === this.currentLevelStore.currentAnswer;
    }

    // flySubjectsFromTableAway() {} // UI

    // shakeCodeArea() {}

    increaseCurrentLevel() {
        if (this.currentLevel === LEVELS.length) return;
        
        this.setCurrentLevel(this.currentLevel + 1);
    }

    decreaseCurrentLevel() {
        if (this.currentLevel === 1) return;
    
        this.setCurrentLevel(this.currentLevel - 1);
    }

    setCurrentLevel(newLevel) {
        this.currentLevel = newLevel;

        const newStore = createCurrentLevelStore(this.currentLevel)
        this.setCurrentLevelStore(newStore);
    }

    // setCompletedLevels(completedLevels/* Array<number> */) {
    //     this.completedLevels(completedLevels);
    //     this.sideBar.getProps({ completedLevels })
    // }

    // getCompletedLevels() {
    //     return this.completedLevels;
    // }

    // setDataInLocalStorage(data) {} //helper

    getDataFromLocalStorage() { // helper
        return {
            currentLevel: 1,
            completedLevels: [],
            asd: this.completedLevels,
        }
    }


    tryToApplyDataFromLocalStorage() {              // complex(Data)
        const { currentLevel, completedLevels } = this.getDataFromLocalStorage();

        if (!currentLevel && !completedLevels) {
            this.setDataInLocalStorage({
                currentLevel: this.currentLevel,
                completedLevels: this.completedLevels,
            });
        }

        if (currentLevel) {
            this.setCurrentLevelStore(createCurrentLevelStore(currentLevel));
        }
        if (completedLevels.length !== 0) { // ??????????????check completedLevels.length !== 0?????????????
            this.setCompletedLevels(completedLevels);
        }
    }


    onCheckAnswerButton() {           // complex(UI && Data)
        if (this.checkUserAnswer(this.currentLevelStore.currentUserAnswer)) {
            // this.flySubjectsFromTableAway();
            // добавить уровень в пройденные 
            // сохранить новые пройденные
            const increaseCurrentLevel = this.increaseCurrentLevel.bind(this);
            setTimeout(() => {
                increaseCurrentLevel();
            }, SECONDS_BEFORE_NEXT_LEVEL);
        } else {
            // this.shakeCodeArea();
        }
    }

    setCurrentUserAnswer(answer) {
        this.currentLevelStore.currentUserAnswer = answer;
    }

    initAllBaseClasses() {
        const cssEditorBaseState = {
            setCurrentUserAnswer: this.setCurrentUserAnswer.bind(this),
            onCheckAnswerButton: this.onCheckAnswerButton.bind(this),
        }

        const headerBaseState = {
            levelTitle: this.currentLevelStore.currentLevelTitle,
            helpBlockHTML: this.currentLevelStore.currentHelpBlockHTML,
            isHelpBlockHTMLVisible: this.currentLevelStore.isCurretHelpBlockHTMLVisible,
            toggleHelpBlock: this.toggleHelpBlock.bind(this),
        };

        const tableBaseState = {
            tableItems: this.currentLevelStore.currentTableItems,
        };

        const htmlViewerBaseState = {
            tableItems: this.currentLevelStore.currentTableItems,
        }

        const sideBarBaseState = {
            LEVELS,
            currentLevel: this.currentLevel,
            completedLevels: this.completedLevels,
            levelNumber: this.currentLevelStore.currentLevelNumber,
            levelNameHTML: this.currentLevelStore.currentLevelNameHTML,
            titleHTML: this.currentLevelStore.currentTitleHTML,
            subTitleHTML: this.currentLevelStore.currentSubTitleHTML,
            selectorHTML: this.currentLevelStore.currentSelectorHTML,
            descriptionHTML: this.currentLevelStore.currentDescriptionHTML,
            examples: this.currentLevelStore.currentExamples,
            increaseCurrentLevel: this.increaseCurrentLevel.bind(this),
            decreaseCurrentLevel: this.decreaseCurrentLevel.bind(this),
        };

        this.cssEditor = new CssEditor(cssEditorBaseState);
        this.header = new Header(headerBaseState);
        this.table = new Table(tableBaseState);
        this.sideBar = new SideBar(sideBarBaseState);
        this.footer = new Footer();
        this.htmlViewer = new HTMLViewer(htmlViewerBaseState);
    }

    renderAllBlocks() {
        this.header.render('header');
        this.cssEditor.render('cssEditor');
        this.htmlViewer.render('htmlViewer');
        this.sideBar.render('sideBar');
        this.table.render('table'); 
        this.footer.render('footer');
    }

    start() {
        this.initAllBaseClasses();
        this.tryToApplyDataFromLocalStorage();
        this.setCurrentLevelStore(createCurrentLevelStore(this.currentLevel));
        
        this.renderAllBlocks();
    }
}

// styles App (все методы рендера)
// burger css
// -------------
// burger listener
// ------------
// localStorage (saveProgress) + use it
// App.increaseCurrentLevel (пробрасывать пропсы везде куда надо)
// App.decreaseCurrentLevel (пробрасывать пропсы везде куда надо)
// написать данные для всех levels в константах
// реализовать кнопку показывающую ответ + с анимацией