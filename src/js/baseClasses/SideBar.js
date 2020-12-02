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

        console.log(isDataChanged);
    }

    rerender() {
        this.render(this.whereId);
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
            <div className="sideBar">
                <h2 class="sidebar__level">Level ${this.currentLevel} of ${this.LEVELS.length} </h2>
                <div class="sidebar__nav-arrows"><</div>
                <div class="sidebar__burger">></div>
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
                ${this.LEVELS.map((levelData) => `
                <p class="levels-list__item">${levelData.selectorHTML}</p></br>
                `)}
                </div>
            </div>`)
    }
}