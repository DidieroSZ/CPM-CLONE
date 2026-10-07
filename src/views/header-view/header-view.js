import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './header-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

/* --- ASSETS --- */
import heroBackground from '../../assets/CPM/background2.jpg';
/* --- ASSETS --- */


export class HeaderView extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    disconnectedCallback() { 
        this._cleanup?.(); 
        super.disconnectedCallback(); 
    }

    firstUpdated() { 
        hydrateIcons(this.renderRoot); 
        this._cleanup = animatePage(this.renderRoot); 
    }

    updated() { 
        hydrateIcons(this.renderRoot); 
    }

    render() {
        return html`
            <header id="inicio" class="hero d-flexx" aria-labelledby="hero-title" style="--hero-bg: url('${heroBackground}')">

                <div class="hero-overlay"></div>

                <div class="hero-copy page-shell d-flexx d-col">
                    <p class="eyebrow"><span></span> Oaxaca · 04 octubre 2026</p>
                    <h1 id="hero-title" class="titulo01">Carrera CPM<br>
                        <em>75 años</em><br>transformando vidas
                    </h1>
                    <p class="hero-description texto">Una carrera para celebrar lo que construimos juntos. Corre 5K o 10K y sé parte de la historia de Caja Popular Mexicana.</p>
                    <div class="hero-actions d-flexx d-row">
                        <a class="button d-flexx" href="#Registro">Quiero correr <i data-lucide="arrow-right" aria-hidden="true"></i></a>
                        <a class="button d-flexx button-secundario" href="#Carrera">Conoce la carrera <i data-lucide="chevron-down" aria-hidden="true"></i></a>
                    </div>
                    <div class="hero-meta d-flexx d-row">
                        <span class="notas"><b class="texto">5K / 10K</b> distancias</span>
                        <span class="notas"><b class="texto">+18</b> categoría libre</span>
                        <span class="notas"><b class="texto">07:00 AM</b> salida</span>
                    </div>
                </div>

                <div class="hero-art titulo01">
                    <span class="art-number">75</span>
                    <span class="art-label">años<br>CPM</span>
                </div>
            </header>
        `;
    };

}
customElements.define('header-view', HeaderView);
