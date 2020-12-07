const VIEWR_ELEMENTS_ID = {
    htmlViewer: 'htmlViewer', 
};

const htmlViewer = () => document.getElementById(VIEWR_ELEMENTS_ID.htmlViewer);

export default class HTMLViewer {
    constructor({ tableItems }) {
        this.state = {};
        this.whereId = '';
        
        this.tableItems = tableItems;

        this.onHTMLViewerMouseover = ({ target }) => {
            const dataItemId = target.getAttribute('data-item-id');

            if (target.classList.contains('htmlViewer__item')) {
                const hightLightedItems = document.body.querySelectorAll(`[data-item-id=${dataItemId}]`);
                
                hightLightedItems[0].classList.add('lightShadow');
                hightLightedItems[1].classList.add('lightColor');
                
            }
        };
        
        // this.onTableMouseleave = ({ target }) => {
        //     const dataItemId = target.getAttribute('data-item-id');
        //     // mouseleave срабытывает со стола а не с объекта, надо вешать листенеры в onTableMuseover и сохранять их в массив для последующего удаления
        //     // console.log(target, target.classList.contains('table__item'));
        //     if (target.classList.contains('table__item')) {
        //         const hightLightedItems = document.body.querySelectorAll('[data-item-id]', `${dataItemId}`);
                
        //         hightLightedItems[0].classList.remove('lightShadow');
        //         hightLightedItems[1].classList.remove('lightColor');
        //     }
        // };
        
        this.addListenerOnHTMLViewer = () => {
            htmlViewer().addEventListener('mouseover', this.onHTMLViewerMouseover);
        }

        this.removeListenersOnHTMLViewer = () => {
            htmlViewer().removeEventListener('mouseover', this.onHTMLViewerMouseover);
        }
    }

    getProps({ tableItems }) {
        const isDataChanged = (tableItems && tableItems !== this.tableItems); 
        if (tableItems) this.tableItems = tableItems;

        if (isDataChanged) {
            this.rerender();
        }
    }

    rerender() {
        if (this.whereId) {
            this.removeListenersOnHTMLViewer();
            this.render(this.whereId);
        }
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
            <div class="htmlViewer">htmlViewer: ${this.tableItems.map((el) => `<div class="htmlViewer__item" data-item-id=t${el.id}>${el.plateNumber}!!!!!!!!!!!</div>`)}</div>
        `);

        this.addListenerOnHTMLViewer();
    }
}