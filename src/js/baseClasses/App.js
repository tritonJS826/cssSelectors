import CssEditor from './CssEditor';
import Footer from './Footer';
import Header from './Header';
import HTMLViewer from './HTMLViewer';
import SideBar from './SideBar';
import Table from './Table';

import LEVELS from '../constants/levels';
import { SECONDS_BEFORE_NEXT_LEVEL } from '../constants/common';

export default class App {
    constructor() {
        this.currentLevel = 1;
        this.completedLevels = []; // Array<number>

        this.currentLevelStore = {};

        this.cssEditor = new CssEditor();
        this.footer = new Footer();
        this.header = new Header();
        this.hTMLViewer = new HTMLViewer();
        this.sideBar = new SideBar();
        this.table = new Table();
    }

    getCurrentLevelStore() {
        return this.store;
    }

    setCurrentLevelStore(newStore) {
        this.store = newStore;
      
    }

    createCurrentLevelStore() {
        const currentLevelData = LEVELS[this.currentLevel - 1];

        const getStringWithModifier = (string) => {
            return {
                string,
                isStrong: false,
            };
        };

        const store = {
            currentLevelNumber: currentLevelData.levelNumber,
            currentLevelNameHTML: currentLevelData.currentLevelNameHTML,
            currentHelpBlockHTML: currentLevelData.helpBlockHTML,
            isCurretHelpBlockHTMLVisible: false,
            currentTitleHTML: currentLevelData.titleHTML,
            currentSubTitleHTML: currentLevelData.subTitleHTML,
            currentSelectorHTML: currentLevelData.selectorHTML,
            currentDescriptionHTML: currentLevelData.descriptionHTML,
            currentAnswer: currentLevelData.answer,
            currentExamples: currentLevelData.examples,
            currentTable: currentLevelData.table,
            currentTemplateLines: currentLevelData.templateLines.map(getStringWithModifier),
            currentUserAnswer: '',
        };

        return store;
    }

    // setCurrentUserAnswer() {}

    // getCurrentUserAnswer() {}

    // checkUserAnswer(): boolean {}

    // flySubjectsFromTableAway() {} // UI

    // shakeCodeArea() {}

    // increaseCurrentLevel() {}
    
    // decreaseCurrentLevel() {}
    
    // setCurrentLevel(levelNumber: number) {}

    // setCompletedLevels() {}

    // getCompletedLevels() {}

    // setDataInLocalStorage(data) {} //helper

    // getDataFromLocalStorage(): Object {} //helper
    

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


    addListenerOnCheckAnswerButton() {           // complex(UI && Data)
        if (this.checkUserAnswer()) {
            this.flySubjectsFromTableAway();
            const increaseCurrentLevel = this.increaseCurrentLevel.bind(this);
            setTimeout(() => {
                increaseCurrentLevel();
            }, SECONDS_BEFORE_NEXT_LEVEL);
        } else {
            this.shakeCodeArea();
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

    addAllListeners() {                 // complex(Listeners)
        this.addListenerOnTableItem();
        this.addListenerOnHTMLViewerLines();    
        this.addListerOnLeftArrow();
        this.addListerOnRightArrow();
        this.addListerOnLevelList();
        this.addListerOnHintButton();
        this.addListenerOnCssEditor();
        this.addListenerOnHelpBlock();
        this.addListenerOnResetButton(); 
    }

    initAllBaseClasses() {
        this.footer.init();
        this.header.init();
        
        this.cssEditor.init();
        this.hTMLViewer.init();
        this.sideBar.init();
        this.table.init();
    }

    renderAllBlocks() {
        this.footer.render();
        this.header.render();
        this.cssEditor.render();
        this.hTMLViewer.render();
        this.sideBar.render();
        this.table.render(); 
    }

    start() {
        this.tryToApplyDataFromLocalStorage();
        this.setCurrentLevelStore(this.createCurrentLevelStore());

        this.initAllBaseClasses();

        this.renderAllBlocks();
        this.addAllListeners();
    }
}

// communicating between classes
// add architect to CssEditor
// add architect to Footer
// add architect to Header
// add architect to HTMLViewer
// add architect to SideBar
// add architect to Table
// implement functions in CssEditor
// implement functions in Footer
// implement functions in Header
// implement functions in HTMLViewer
// implement functions in SideBar
// implement functions in Table
// implement functions in App
