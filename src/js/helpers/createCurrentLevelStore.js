import { v4 as uuidv4 } from 'uuid';
import LEVELS from '../constants/levels';

const createCurrentLevelStore = (currentLevel) => {
    const currentLevelData = LEVELS[currentLevel - 1];

    const getItemWithModifier = (tableItem) => {
        return {
            id: uuidv4(),
            plateNumber: tableItem.plateNumber,
            children: [...tableItem.children.map(item => ({...item, isStrong: false, id: uuidv4()}))],
            hint: tableItem.hint,
            isStrong: false,
        };
    };

    const store = {
        currentLevelTitle: currentLevelData.headerTitle,
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
        currentTableItems: currentLevelData.tableItems.map(getItemWithModifier),
        // currentTemplateLines: currentLevelData.templateLines.map(getStringWithModifier),
        currentUserAnswer: 'write here',
    };

    return store;
};

export default createCurrentLevelStore;