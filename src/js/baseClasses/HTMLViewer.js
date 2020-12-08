import { addHighLight, removeHighLight } from '../helpers/cssEffects';

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
            const hightLightedItems = document.body.querySelectorAll(`[data-item-id=${dataItemId}]`);

            if (!hightLightedItems || hightLightedItems.length === 0) return;

            if (target.classList.contains('htmlViewer__item')) {
                addHighLight(hightLightedItems);                
            }

            target.addEventListener('mouseleave', () => removeHighLight(hightLightedItems, target));

        };
        
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
        <div class="code-area__header">
            HTML Viewer
        </div>
        <div class="html-viewer__window">
            <div class="line-numbers line-numbers_dark">
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
            <div class="html-viewer__markup">
                <div class="htmlViewer">
                    <div class="htmlViewer__item">&lt;div/&gt</div>
                    ${this.tableItems.map((el) => `
                    <div class="htmlViewer__item" data-item-id=t${el.id}>
                    &nbsp&nbsp&lt;${el.hint} ${el.idName ? `id="${el.idName}"` : ''} &gt;</br>    
                        ${el.children.map((item) => `
                            <div class="htmlViewer__item" data-item-id=t${el.id}>
                                &nbsp&nbsp&nbsp&nbsp
                                &lt;${item.hint}
                                ${item.classModifier ? `class="${item.classModifier}"` : ''} 
                                /&gt;
                            </div>
                        `).join('')}    
                        &nbsp&nbsp&lt;${el.hint}/&gt;
                    </div>`).join('')}
                    <div class="htmlViewer__item">&lt;/div/&gt</div>
                </div>
            </div>
        </div>
        `);

        this.addListenerOnHTMLViewer();
    }
}