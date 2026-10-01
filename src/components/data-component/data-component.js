import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './data-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class DataComponent extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    render() {
        return html`
            <section class="data-container general-container d-flexx d-row">
                <div class="iconic-data d-flexx d-col verde03">
                    ${unsafeHTML(icons.route)}
                    <p class="cpm-carrera-font">5k y 10k</p>
                </div>
                <div class="iconic-data d-flexx d-col verde01">
                    ${unsafeHTML(icons.racer)}
                    <p class="cpm-carrera-font">1300 <br>corredores</p>
                </div>
                <div class="iconic-data d-flexx d-col verde04">
                    ${unsafeHTML(icons.clock)}
                    <p class="cpm-carrera-font">07:00 A.M.</p>
                </div>
                <div class="iconic-data d-flexx d-col verde02">
                    ${unsafeHTML(icons.pin)}
                    <p class="cpm-carrera-font">Alameda de León, <br>Av. Independencia S/N</p>
                </div>
            </section>
        `;
    };

}
customElements.define('data-component', DataComponent);