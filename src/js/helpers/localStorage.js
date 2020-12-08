

export const getDataFromLocalStorage = (key) => {
    const rawData = localStorage.getItem(key);
    
    if (!rawData) return {};
    const { currentLevel, completedLevels } = JSON.parse(rawData);    
    
    return {
        currentLevel,
        completedLevels,
    }
};


export const setDataInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};