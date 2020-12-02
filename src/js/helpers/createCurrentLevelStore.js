import LEVELS from '../constants/levels';

const createCurrentLevelStore = (currentLevel) => {
    const currentLevelData = LEVELS[currentLevel - 1];

    const getStringWithModifier = (string) => {
        return {
            string,
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
        currentTable: currentLevelData.table,
        currentTemplateLines: currentLevelData.templateLines.map(getStringWithModifier),
        currentUserAnswer: 'write here',
    };

    return store;
};

export default createCurrentLevelStore;