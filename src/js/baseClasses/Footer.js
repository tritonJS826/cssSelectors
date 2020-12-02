export default class Footer {
    constructor() {
        this.whereId = '';
        this.contentHTML = '<p>Made by Dasha -- come say hi </p></br><p>Have feedback or questions? Please file an isssue on the Github repo.</p>'
    }

    rerender() {
        this.render(this.whereId);
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