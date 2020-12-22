import CssEditor from './CssEditor';
import Footer from './Footer';
import Header from './Header';
import HTMLViewer from './HTMLViewer';
import SideBar from './SideBar';
import Table from './Table';

import LOCAL_STORAGE_CONFIG from '../constants/locaStorageConfig';
import BASE_BLOCS_ID from '../constants/baseBlocsId';
import LEVELS from '../constants/levels';
import { SECONDS_BEFORE_NEXT_LEVEL } from '../constants/common';
import { setDataInLocalStorage, getDataFromLocalStorage } from '../helpers/localStorage';
import createCurrentLevelStore from '../helpers/createCurrentLevelStore';
import { flyItemAway, shakeElement } from '../helpers/cssEffects';

export default class App {
    constructor() {
        this.currentLevel = 1;
        this.completedLevels = []; // Array<number>

        this.currentLevelStore = createCurrentLevelStore(this.currentLevel);
        this.header = { status: 'notCreated'};
        this.cssEditor = { status: 'notCreated'};
        this.htmlViewer = { status: 'notCreated'};
        this.sideBar = { status: 'notCreated'};
        this.table = { status: 'notCreated'};
    }

    getCurrentLevelStore() {
        return this.createCurrentLevelStore;
    }

    setCurrentLevelStore(newStore) {
        this.currentLevelStore = newStore;

        const sideBarProps = {
            currentLevel: this.currentLevel,
            completedLevels: this.completedLevels,
            levelNumber: this.currentLevelStore.currentLevelNumber,
            levelNameHTML: this.currentLevelStore.LevelNameHTML,
            titleHTML: this.currentLevelStore.currentTitleHTML,
            subTitleHTML: this.currentLevelStore.currnetSubTitleHTML,
            selectorHTML: this.currentLevelStore.currentSelectorHTML,
            descriptionHTML: this.currentLevelStore.currentDescriptionHTML,
            currentAnswer: this.currentLevelStore.currentAnswer,
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

        setDataInLocalStorage(LOCAL_STORAGE_CONFIG.cssSelectorsData, {
            currentLevel: this.currentLevel,
            completedLevels: this.completedLevels,
        });
    }

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

    setCompletedLevels(completedLevels) {
        this.completedLevels = completedLevels;
        this.sideBar.getProps({ completedLevels });
    }

    tryToApplyDataFromLocalStorage() {
        const { currentLevel, completedLevels } = getDataFromLocalStorage(LOCAL_STORAGE_CONFIG.cssSelectorsData);

        if (!currentLevel && !completedLevels) {
            setDataInLocalStorage(LOCAL_STORAGE_CONFIG.cssSelectorsData, {
                currentLevel: this.currentLevel,
                completedLevels: this.completedLevels,
            });
        }

        if (currentLevel) {
            this.currentLevel = currentLevel;
            this.setCurrentLevelStore(createCurrentLevelStore(currentLevel));
        }
        if (completedLevels && completedLevels.length !== 0) {
            this.setCompletedLevels(completedLevels);
        }
    }

    onCheckAnswerButton() {
        if (this.checkUserAnswer(this.currentLevelStore.currentUserAnswer)) {
            const items = document.getElementById(BASE_BLOCS_ID.surfaceWrapper).children;
            const completedLevels = [...this.completedLevels, this.currentLevel];
            this.setCompletedLevels(completedLevels);

            [...items].forEach((el) => flyItemAway(el));  

            const increaseCurrentLevel = this.increaseCurrentLevel.bind(this);
            setTimeout(() => {
                increaseCurrentLevel();
            }, SECONDS_BEFORE_NEXT_LEVEL);
        } else {
            const codeArea = document.getElementById(BASE_BLOCS_ID.codeArea);
            shakeElement(codeArea);
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
            currentAnswer: this.currentLevelStore.currentAnswer,
            increaseCurrentLevel: this.increaseCurrentLevel.bind(this),
            decreaseCurrentLevel: this.decreaseCurrentLevel.bind(this),
            setCurrentLevel: this.setCurrentLevel.bind(this),
            setCompletedLevels: this.setCompletedLevels.bind(this),
        };

        this.cssEditor = new CssEditor(cssEditorBaseState);
        this.header = new Header(headerBaseState);
        this.table = new Table(tableBaseState);
        this.sideBar = new SideBar(sideBarBaseState);
        this.footer = new Footer();
        this.htmlViewer = new HTMLViewer(htmlViewerBaseState);
    }

    renderAllBlocks() {
        this.header.render(BASE_BLOCS_ID.header);
        this.cssEditor.render(BASE_BLOCS_ID.cssEditor);
        this.htmlViewer.render(BASE_BLOCS_ID.htmlViewer);
        this.sideBar.render(BASE_BLOCS_ID.sideBar);
        this.table.render(BASE_BLOCS_ID.table); 
        this.footer.render(BASE_BLOCS_ID.footer);
    }

    start() {
        this.initAllBaseClasses();
        this.tryToApplyDataFromLocalStorage();
        this.setCurrentLevelStore(createCurrentLevelStore(this.currentLevel));
        
        this.renderAllBlocks();
    }
}
