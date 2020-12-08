import { addHighLight, removeHighLight } from '../helpers/cssEffects';

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
            const hightLightedItems = document.body.querySelectorAll(`[data-item-id=${dataItemId}]`);

            if (!hightLightedItems || hightLightedItems.length === 0) return;

            if (target.classList.contains('table__item')) {
                addHighLight(hightLightedItems);
            }
            
            target.addEventListener('mouseleave', () => removeHighLight(hightLightedItems, target));
        };
        
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
        <div class="table__wrapper">
            <div class="table__surface">
                ${this.tableItems.map((el) => `
                <div class="table__item item-table ${el.idName ? `table__item_${el.idName}` : ''} ${el.cssClassName}" data-item-id=t${el.id}>
                    ${el.children.map((child) => `
                        <div class="item-table__child item-table__child_${child.cssClassName}" data-item-id=t${el.id}></div>
                    `).join('')}
                </div>
                `).join('')}
            </div>
        </div>
        <div class="table__edge"></div>
        `);

        this.addListenerOnTable();
    }
}