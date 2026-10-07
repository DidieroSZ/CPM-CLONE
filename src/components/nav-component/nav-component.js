import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './nav-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
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

                <a class="brand" href="#Inicio" data-target="Inicio" @click=${this.handleNavigation}>
                    <img src=${logo} alt="Caja Popular Mexicana">
                    <span>CARRERA CPM<strong>75 AÑOS</strong></span>
                </a>
                <div class="desktop-nav d-flexx d-row">
                    <a href="#Inicio" data-target="Inicio" @click=${this.handleNavigation}>Inicio</a>
                    <a href="#Carrera" data-target="Carrera" @click=${this.handleNavigation}>La carrera</a>
                    <a href="#Convocatoria" data-target="Convocatoria" @click=${this.handleNavigation}>Convocatoria</a>
                    <a href="#Distancias" data-target="Distancias" @click=${this.handleNavigation}>Distancias</a>
                    <a href="#Kit" data-target="Kit" @click=${this.handleNavigation}>Kit de Corredor</a>
                    <a href="#Registro" data-target="Registro" @click=${this.handleNavigation}>Registro</a>
                    <a href="#Premiacion" data-target="Premiacion" @click=${this.handleNavigation}>Premiación</a>
                    <a href="#FAQS" data-target="FAQS" @click=${this.handleNavigation}>Faq´s</a>
                </div>
                <a class="button button-lime header-cta" href="#Registro" data-target="Registro" @click=${this.handleNavigation}>
                    Regístrate <i data-lucide="arrow-up-right"></i>
                </a>
                    
                <a class="menu-link" href="#Registro" data-target="Registro" @click=${this.handleNavigation} aria-label="Ir al registro">
                    <i data-lucide="menu"></i>
                </a>

            </nav>
        `;
    };

    handleNavigation(event) {
        const target = event.currentTarget.dataset.target;

        this.dispatchEvent(
            new CustomEvent('navigate-section', {
                detail: {
                    target
                },
                bubbles: true,
                composed: true
            })
        );
    }

}
customElements.define('nav-component', NavComponent);