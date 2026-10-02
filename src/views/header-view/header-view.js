import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './header-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
/* --- ICONS --- */

/* --- ASSETS --- */
import heroBackground from '../../assets/CPM/background2.jpg';
/* --- ASSETS --- */


export class HeaderView extends LitElement {

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
            <header id="inicio" class="hero d-flexx" style="--hero-bg: url('${heroBackground}')">

                <div class="hero-overlay"></div>

                <div class="hero-copy page-shell d-flexx d-col">
                    <p class="eyebrow"><span></span> Oaxaca · 04 octubre 2026</p>
                    <h1>Carrera CPM<br>
                        <em>75 años</em><br>transformando vidas
                    </h1>
                    <p class="hero-description">Una carrera para celebrar lo que construimos juntos. Corre 5K o 10K y sé parte de la historia de Caja Popular Mexicana.</p>
                    <div class="hero-actions d-flexx d-row">
                        <a class="button d-flexx" href="#registro">Quiero correr <i data-lucide="arrow-right"></i></a>
                        <a class="button d-flexx button-secundario" href="#carrera">Conoce la carrera <i data-lucide="chevron-down"></i></a>
                    </div>
                    <div class="hero-meta d-flexx d-row">
                        <span><b>5K / 10K</b> distancias</span>
                        <span><b>+18</b> categoría libre</span>
                        <span><b>07:00 AM</b> salida</span>
                    </div>
                </div>

                <div class="hero-art">
                    <span class="art-number">75</span>
                    <span class="art-label">años<br>CPM</span>
                </div>
            </header>
        `;
    };

}
customElements.define('header-view', HeaderView);