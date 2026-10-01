import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './footer-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class FooterView extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    render() {
        return html`
            <footer class="footer general-container d-flexx d-row">
                d
            </footer>
        `;
    };

}
customElements.define('footer-view', FooterView);