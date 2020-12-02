import CssEditor from './CssEditor';
import Footer from './Footer';
import Header from './Header';
import HTMLViewer from './HTMLViewer';
import SideBar from './SideBar';
import Table from './Table';

import LEVELS from '../constants/levels';
import { SECONDS_BEFORE_NEXT_LEVEL } from '../constants/common';
import createCurrentLevelStore from '../helpers/createCurrentLevelStore';

export default class App {
    constructor() {
        this.currentLevel = 1;
        this.completedLevels = []; // Array<number>

        this.currentLevelStore = createCurrentLevelStore(this.currentLevel);

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
        }

        const headerBaseState = {
            levelTitle: this.currentLevelStore.currentLevelTitle,
            helpBlockHTML: this.currentLevelStore.currentHelpBlockHTML,
            isHelpBlockHTMLVisible: this.currentLevelStore.isCurretHelpBlockHTMLVisible,
            toggleHelpBlock: this.toggleHelpBlock.bind(this),
        };


        this.header = new Header(headerBaseState);
        this.cssEditor = {};
        this.footer = new Footer();
        this.hTMLViewer = new HTMLViewer();
        this.sideBar = new SideBar(sideBarBaseState);
        this.table = new Table();
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
        }

        // this.cssEditor.getProps({});
        // this.hTMLViewer.getProps({});
        this.sideBar.getProps(sideBarProps);
        // this.table.getProps({});
    }

    toggleHelpBlock() {
        this.currentLevelStore.isCurretHelpBlockHTMLVisible = !this.currentLevelStore.isCurretHelpBlockHTMLVisible;

        const headerNewState = {
            isHelpBlockHTMLVisible: this.currentLevelStore.isCurretHelpBlockHTMLVisible,
        }

        this.header.getProps(headerNewState);
    }

    // getCurrentUserAnswer() {}

    checkUserAnswer(answer) {
        return answer === this.currentLevelStore.currentAnswer;
    }

    // flySubjectsFromTableAway() {} // UI

    // shakeCodeArea() {}

    increaseCurrentLevel() {
        if (this.currentLevel === LEVELS.length) {
            alert('U completed all levels')
            return;
        }

        this.currentLevel += 1;

        const newStore = createCurrentLevelStore(this.currentLevel)
        this.setCurrentLevelStore(newStore);

        const sideBarProps = {
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
        }

        const headerProps = {
            levelTitle: this.currentLevelStore.currentLevelTitle,
            helpBlockHTML: this.currentLevelStore.currentHelpBlockHTML,
            isHelpBlockHTMLVisible: this.currentLevelStore.isCurretHelpBlockHTMLVisible, 
            toggleHelpBlock: this.toggleHelpBlock.bind(this),
        }

        this.sideBar.getProps(sideBarProps);
        this.header.getProps(headerProps);
    }

    decreaseCurrentLevel() {
        if (this.currentLevel === 1) {
            alert('It is the first level')
            return;
        }

        this.currentLevel -= 1;

        const newStore = createCurrentLevelStore(this.currentLevel)
        this.setCurrentLevelStore(newStore);

        const sideBarProps = {
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
        }

        const headerProps = {
            levelTitle: this.currentLevelStore.currentLevelTitle,
            helpBlockHTML: this.currentLevelStore.currentHelpBlockHTML,
            isHelpBlockHTMLVisible: this.currentLevelStore.isCurretHelpBlockHTMLVisible,
            toggleHelpBlock: this.toggleHelpBlock.bind(this),
        }

        this.sideBar.getProps(sideBarProps);
        this.header.getProps(headerProps);
    }

    // setCurrentLevel(levelNumber: number) {}

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
            this.setCurrentLevelStore(currentLevel);
        }
        if (completedLevels.length !== 0) { // ??????????????check completedLevels.length !== 0?????????????
            this.setCompletedLevels(completedLevels);
        }
    }


    onCheckAnswerButton() {           // complex(UI && Data)
        if (this.checkUserAnswer(this.currentLevelStore.currentUserAnswer)) {
            // this.flySubjectsFromTableAway();
            const increaseCurrentLevel = this.increaseCurrentLevel.bind(this);
            setTimeout(() => {
                increaseCurrentLevel();
            }, SECONDS_BEFORE_NEXT_LEVEL);
        } else {
            // this.shakeCodeArea();
        }
    }

    // addListenerOnTableItem() {}

    // addListenerOnHTMLViewerLines() {}

    // addListerOnLeftArrow() {}

    // addListerOnRightArrow() {}

    // addListerOnLevelList() {}

    // addListerOnHintButton() {}

    // addListenerOnCssEditor() {}

    // addListenerOnHelpBlock() {}

    // addListenerOnResetButton() {}

    // addAllListeners() {                 // complex(Listeners)
    //     this.addListenerOnTableItem();
    //     this.addListenerOnHTMLViewerLines();    
    //     this.addListerOnLeftArrow();
    //     this.addListerOnRightArrow();
    //     this.addListerOnLevelList();
    //     this.addListerOnHintButton();
    //     this.addListenerOnCssEditor();
    //     this.addListenerOnHelpBlock();
    //     this.addListenerOnResetButton(); 
    // }

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

        this.cssEditor = new CssEditor(cssEditorBaseState);
        this.header = new Header(headerBaseState);
    }

    renderAllBlocks() {
        this.header.render('header');
        this.cssEditor.render('cssEditor');
        // this.hTMLViewer.render('hTMLViewer');
        this.sideBar.render('sideBar');
        // this.table.render('table'); 
        this.footer.render('footer');
    }

    start() {
        this.tryToApplyDataFromLocalStorage();
        this.setCurrentLevelStore(createCurrentLevelStore(this.currentLevel));

        this.renderAllBlocks();
        // this.addAllListeners();
    }
}

// communicating between classes +
// add architect to CssEditor +
// add architect to Footer +
// add architect to Header +
// add architect to HTMLViewer
// add architect to SideBar +
// add architect to Table
// implement methods in CssEditor +
// implement methods in Footer +
// implement methods in Header +
// implement methods in HTMLViewer
// implement methods in SideBar +
// implement methods in Table
// implement methods in App
// write all levels inside constant LEVELS
// implement styles in CssEditor
// implement styles in Footer
// implement styles in Header
// implement styles in HTMLViewer
// implement styles in SideBar
// implement styles in Table
// implement styles in App
