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

                
            if (target.getAttribute('data-item-id')) {
                addHighLight(hightLightedItems);
            }
            
            target.addEventListener('mouseout', () => removeHighLight(hightLightedItems, target));
        };
        
        this.addListenerOnTable = () => {
            table().addEventListener('mouseover', this.onTableMouseover);
            table().addEventListener('mouseleave', this.onTableMouseleave);
        }

        this.removeListenersOnTable = () => {
            table().removeEventListener('mouseover', this.onTableMouseover);
            table().removeEventListener('mouseleave', this.onTableMouseleave);
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
            <div class="table__surface surface">
                <div id="surfaceWrapper" class="surface__wrapper">
                ${this.tableItems.map((el) => `
                    <div class="table__item item-table ${el.idName ? `table__item_${el.idName}` : ''} ${el.cssClassName}" data-item-id=t${el.id}>
                        <div class="item-hint">&lt${el.hint}&gt;</div>
                        ${el.children.map((child) => `
                            <div class="item-table__child item-table__child_${child.cssClassName}" ${child.small ? 'data-child-small=""' : ''} data-item-id=t${child.id}>
                                <div class="item-hint">&lt${child.hint}&gt;</div>
                            </div>
                        `).join('')}
                    </div>
                    `).join('')}
                </div>
                <div class="table__edge"></div>
            </div>
        </div>
        `);

        this.addListenerOnTable();
    }
}