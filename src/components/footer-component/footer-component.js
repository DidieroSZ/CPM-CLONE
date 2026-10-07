import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './footer-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
/* --- ICONS --- */

/* --- ASSETS --- */
import logo from '../../assets/CPM/cpm-logo.png';
/* --- ASSETS --- */


export class FooterComponent extends LitElement {

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
            <footer class="site-footer">

                <div class="page-shell footer-main d-flexx">
                    <a class="brand" href="#Inicio" data-target="Inicio" @click=${this.handleNavigation}>
                        <img src=${logo} alt="Caja Popular Mexicana">
                        <span>CARRERA CPM<strong>75 AÑOS</strong></span>
                    </a>
                    <div>
                        <p class="eyebrow"><span></span>Corre tu historia</p>
                        <h2 class="titulo02">Cada kilómetro<br>transforma vidas.</h2>
                    </div>
                    <a class="button button-lime" href="#Registro" data-target="Registro" @click=${this.handleNavigation}>Regístrate ahora <i data-lucide="arrow-up-right"></i></a>
                </div>

                <div class="page-shell footer-bottom d-flexx">
                    <span>© 2026 Caja Popular Mexicana</span>
                    <span>Oaxaca de Juárez · México</span>
                    <a href="#Inicio" data-target="Inicio" @click=${this.handleNavigation}>Volver arriba ↑</a>
                </div>

            </footer>
            
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
customElements.define('footer-component', FooterComponent);