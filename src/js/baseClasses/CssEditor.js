
const CSS_EDITOR_ELEMENTS_ID = {
    textarea: 'userAnswer',
    enterButton: 'enterButton',
};
const textarea = () => document.getElementById(CSS_EDITOR_ELEMENTS_ID.textarea);
const enterButton = () => document.getElementById(CSS_EDITOR_ELEMENTS_ID.enterButton);
const answer = () => textarea().value;

export default class CssEditor {
    constructor({ setCurrentUserAnswer, onCheckAnswerButton }) {
        this.state = {};
        this.whereId = '';

        this.setCurrentUserAnswer = (userAnswer) => setCurrentUserAnswer(userAnswer);
        this.onCheckAnswerButton = () => onCheckAnswerButton();

        this.onKeyDownTextarea = (event) => {
            if (event.key === 'Enter') {
                this.setCurrentUserAnswer(answer());
                this.onCheckAnswerButton();
            }
        };
        
        this.onEnterButton = () => {
            this.setCurrentUserAnswer(answer());
            this.onCheckAnswerButton();
        }
        
        this.addListenerOnCssEditor = () => {
            textarea().addEventListener('keydown', this.onKeyDownTextarea);
            enterButton().addEventListener('click', this.onEnterButton);
        }

        this.removeListenersOnCssEditor = () => {
            textarea().removeEventListener('keydown', this.onKeyDownTextarea);
            enterButton().removeEventLestener('click', this.onEnterButton);
        }
    }

    rerender() {
        this.removeListeners();
        this.render(this.whereId);
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
            <input type="text" id="userAnswer"></input>
            <button id="enterButton">enter${this.setCurrentUserAnswer('asdasd')}</button>
        `);

        this.addListenerOnCssEditor();
    }
}