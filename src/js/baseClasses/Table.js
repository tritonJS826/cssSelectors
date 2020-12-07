const TABLE_ELEMENTS_ID = {
    table: 'table', 
};

const table = () => document.getElementById(TABLE_ELEMENTS_ID.table);

export default class Table {
    constructor({ tableItems }) {
        this.state = {};
        this.whereId = '';
        
        this.tableItems = tableItems;

        this.onTableMouseover = ({ target }) => {
            const dataItemId = target.getAttribute('data-item-id');

            if (target.classList.contains('table__item')) {
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
        
        this.addListenerOnTable = () => {
            table().addEventListener('mouseover', this.onTableMouseover);
            table().addEventListener('mouseleave', this.onTableMouseleave);
        }

        this.removeListenersOnTable = () => {
            table().removeEventListener('mouseover', this.onTableMouseover);
            table().removeEventListener('mouseout', this.onTableMouseleave);
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
            this.removeListenersOnTable();
            this.render(this.whereId);
        }
    }

    render(whereId) {
        this.whereId = whereId;
        const element = document.getElementById(whereId);
        element.innerHTML = (`
            <div class="table">Table: ${this.tableItems.map((el) => `<div class="table__item" data-item-id=t${el.id}>${el.plateNumber}</div>`)}!!!!!!!!!!!</div>
        `);

        this.addListenerOnTable();
    }
}