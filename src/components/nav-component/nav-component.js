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
                <div class="item-nav d-flexx d-col logo-nav-container d-flexx d-row">
                    <figure>
                        <img src="${logo}" class="logo-cpm" alt="logo CPM">
                    </figure>
                    <span>
                        <p class="cpm-carrera-font">Carrera CPM</p>
                        <small class="">75 años</small>
                    </span>
                    
                </div>

                <ul class="item-nav links-nav-container d-flexx d-row">
                    <li>Inicio</li>
                    <li>Reglamento</li>
                    <li>Categorias</li>
                    <li>Premiacion</li>
                    <li>Playera</li>
                    <li>Medalla</li>
                    <li>Ruta</li>
                </ul>

                <div class="item-nav">
                    <button class="btn-general btn-cta">¡Registrate!</button>
                </div>

            </nav>
        `;
    };

}
customElements.define('nav-component', NavComponent);