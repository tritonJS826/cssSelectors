// import levels from '../constants/levels';

const createStoreForCurrentLevel = (currentLevel, completedLevels) => {

    const newStore = {
        completedLevels,
        // title: levels[currentLevel - 1].title,
        // helpHTML: levels[currentLevel - 1].title, 
    }

    return newStore;
};

export default createStoreForCurrentLevel;