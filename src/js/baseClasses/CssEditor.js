
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
        this.answer = answer; // throw answer from app

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

    showAnswers() {
        console.log(`вывести ответ сюда ${this.whereId}`);
    }

    rerender() {
        if (this.whereId) {
            this.removeListeners();
            this.render(this.whereId);
        }
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
        <div class="code-area__header">CSS Editor</div>
        <div class="css-editor__window">
            <div class="line-numbers line-numbers_light">
                1<br/>
                2<br/>
                3<br/>
                4<br/>
                5<br/>
                6<br/>
                7<br/>
                8<br/>
                9<br/>
                10<br/>
                11<br/>
                12<br/>
                13<br/>
                14<br/>
                15<br/>
                16<br/>
                17<br/>
                18<br/>
            </div>
            <div class="css-editor__input-area">
                <input type="text" id="userAnswer"></input>
                <div id="enterButton" class="enter-btn">enter</div>
                <p>
                    <br/>
                    {<br/>
                    /* Styles would go here. */ <br/>
                    }<br/>
                </p>
                <p>
                    <br/>
                    /*
                    <br/>
                       Type a number to skip to a level.
                    <br/>
                       Ex → "5" for level 5
                    <br/>
                    */
                </p>
            </div>
        </div>
    `);

        this.addListenerOnCssEditor();
    }
}