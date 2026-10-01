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

import logo from '../../assets/CPM/cpm-logo.png';

export class FooterView extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    render() {
        return html`
            <footer class="footer general-container">
                <div class="footer-main"><div><img src="${logo}" alt="Caja Popular Mexicana"><p class="cpm-carrera-font">Carrera CPM · 75 años transformando vidas</p></div><a href="#registro">Regístrate ahora <span>→</span></a></div>
                <div class="footer-bottom"><span>Domingo 04 de octubre de 2026 · Oaxaca de Juárez</span><span>© Caja Popular Mexicana</span></div>
            </footer>
        `;
    };

}
customElements.define('footer-view', FooterView);
