export default class CssEditor {
    constructor({ setCurrentUserAnswer, onCheckAnswerButton }) {
        this.state = {};
        this.whereId = '';

        this.setCurrentUserAnswer = (answer) => setCurrentUserAnswer(answer);
        this.onCheckAnswerButton = () => onCheckAnswerButton();
    }

    addListenerOnCssEditor() {
        document.getElementById('userAnswer').addEventListener('keydown',(event) => {
            if (event.key === 'Enter') {
                const answer = event.target.value;
                this.setCurrentUserAnswer(answer);
                this.onCheckAnswerButton();
            }
        });
        this.onCheckAnswerButton()
    }

    rerender() {
        // remove listeners
        this.render(this.whereId);
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
            <input type="text" id="userAnswer"></input>
            <button>enter${this.setCurrentUserAnswer('asdasd')}</button>
        `);

        this.addListenerOnCssEditor();
    }
}