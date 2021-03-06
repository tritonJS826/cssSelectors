const HEADER_ELEMENTS_ID = {
    openHelpBlockButton: 'openHelpBlockButton',
    closeHelpBlockButton: 'closeHelpBlockButton',
};

const openHelpBlockButton = () => document.getElementById(HEADER_ELEMENTS_ID.openHelpBlockButton);
const closeHelpBlockButton = () => document.getElementById(HEADER_ELEMENTS_ID.closeHelpBlockButton);

export default class Header {
    constructor({
        levelTitle,
        helpBlockHTML,
        isHelpBlockHTMLVisible,
        toggleHelpBlock,
    }) {
        this.whereId = '';
        this.levelTitle = levelTitle;
        this.helpBlockHTML = helpBlockHTML;
        this.isHelpBlockHTMLVisible = isHelpBlockHTMLVisible;
        this.toggleHelpBlock = () => toggleHelpBlock();

        this.onToggleHelpBlockButton = () => {
            this.toggleHelpBlock();
        };

        this.addListenersOnHeader = () => {
            openHelpBlockButton().addEventListener('click', () => this.toggleHelpBlock());

            closeHelpBlockButton().addEventListener('click', () => this.toggleHelpBlock());
        };

        this.removeEventListenersOnHeader = () => {
            openHelpBlockButton().removeEventListener('click', () => this.toggleHelpBlock());

            closeHelpBlockButton().removeEventListener('click', () => this.toggleHelpBlock());
        };

    }

    getProps({
        levelTitle,
        helpBlockHTML,
        isHelpBlockHTMLVisible,
        toggleHelpBlock,
        whereId,
    }) {
        const isDataChanged = (levelTitle && levelTitle !== this.levelTitle) ||
        (helpBlockHTML && helpBlockHTML !== this.helpBlockHTML) ||
        (isHelpBlockHTMLVisible && isHelpBlockHTMLVisible !== this.isHelpBlockHTMLVisible) ||
        (typeof isHelpBlockHTMLVisible === 'boolean' && toggleHelpBlock !== this.toggleHelpBlock) ||
        (whereId && whereId !== this.whereId);
        
        
        if (levelTitle) this.levelTitle = levelTitle;
        if (helpBlockHTML) this.helpBlockHTML = helpBlockHTML;
        if (typeof isHelpBlockHTMLVisible === 'boolean') this.isHelpBlockHTMLVisible = isHelpBlockHTMLVisible;
        if (toggleHelpBlock) this.toogleHelpBlock = toggleHelpBlock;
        if (whereId) this.whereId = whereId;
        
        if (isDataChanged) {
            this.rerender();
        }
    }

    rerender() {
        if (this.whereId) {
            this.removeEventListenersOnHeader();
            this.render(this.whereId);
        }
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
        <h1 class="header__title">${this.levelTitle}</h1>
        <div class="header__popup popup-block ${this.isHelpBlockHTMLVisible ? 'active' : ''}">
            <div class="popup-block__content">
                ${this.helpBlockHTML}
                <div class="popup-block__close" id="${HEADER_ELEMENTS_ID.closeHelpBlockButton}">
                </div>
            </div>
        </div>
        <div id="${HEADER_ELEMENTS_ID.openHelpBlockButton}" class="header__help-block-btn"
        style="display: ${!this.isHelpBlockHTMLVisible ? 'block' : 'none'}">Help, I'm stuck!</div>
    `);

        this.addListenersOnHeader();
    }
}