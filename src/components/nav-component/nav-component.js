import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './nav-component.css?inline';
/* --- STYLES --- */

import logo from '../../assets/CPM/cpm-logo.png';


export class NavComponent extends LitElement {
    static properties = {

    };

    constructor() {
        super();
    };

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    render() {
        return html`
            <nav class="nav-container general-container d-flexx d-row">
                
            </nav>
        `;
    };

}
customElements.define('nav-component', NavComponent);