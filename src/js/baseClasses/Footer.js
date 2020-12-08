export default class Footer {
    constructor() {
        this.whereId = '';
        this.contentHTML = '<p>Made by <a href="#">tritonJS826</a> -- come say hi </p></br><p>Have feedback or questions? Please file an isssue on <a href="https://github.com/tritonJS826/">the Github repo</a>.</p>'
    }

    rerender() {
        if (this.whereId) {
            this.render(this.whereId);
        }
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
            ${this.contentHTML}
        `);
    }

    getProps({ contentHTML }) {
        this.contentHTML = contentHTML;
     }
}