import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './nav-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
/* --- ICONS --- */

/* --- ASSETS --- */
import logo from '../../assets/CPM/cpm-logo.png';
/* --- ASSETS --- */

export class NavComponent extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    firstUpdated() { 
        hydrateIcons(this.renderRoot); 
    }
    updated() { 
        hydrateIcons(this.renderRoot); 
    }
        
    render() {
        return html`
            <nav class="site-nav-container d-flexx d-row">

                <a class="brand" href="#inicio">
                    <img src=${logo} alt="Caja Popular Mexicana">
                    <span>CARRERA CPM<strong>75 AÑOS</strong></span>
                </a>
                <div class="desktop-nav d-flexx d-row">
                    <a href="#inicio">Inicio</a>
                    <a href="#carrera">La carrera</a>
                    <a href="#convocatoria">Convocatoria</a>
                    <a href="#distancias">Distancias</a>
                    <a href="#kit">Kit de Corredor</a>
                    <a href="#registro">Registro</a>
                    <a href="#premiación">Premiación</a>
                    <a href="#faq">Preguntas</a>
                </div>
                <a class="button button-lime header-cta" href="#registro">
                    Regístrate <i data-lucide="arrow-up-right"></i>
                </a>
                    
                <a class="menu-link" href="#registro" aria-label="Ir al registro">
                    <i data-lucide="menu"></i>
                </a>

            </nav>
        `;
    };

}
customElements.define('nav-component', NavComponent);