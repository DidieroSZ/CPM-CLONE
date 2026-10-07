import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './distancias-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

/* --- ASSETS --- */
import route5k from '../../assets/CPM/ruta5k_small.jpg';
import route10k from '../../assets/CPM/ruta10k_small.jpg';
/* --- ASSETS --- */

export class DistanciasView extends LitElement {
    static properties = { 
        selectedRoute: { type: String }, 
    };

    constructor() { super(); 
        this.selectedRoute = '5K'; 
    }

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
        const routeImage = this.selectedRoute === '5K' ? route5k : route10k;
        
        return html`
            <section id="reto" class="section route-section dark-section" aria-labelledby="distancias-title">
                <div class="page-shell">

                    <div class="section-heading light-heading d-flexx d-row">
                        <div>
                            <p class="eyebrow lime-text"><span></span> Elige tu reto</p>
                            <h2 id="distancias-title" class="titulo02">Tu ritmo.<br><em>Tu historia.</em></h2>
                        </div>
                        <p>Dos distancias, una misma energía. Elige el recorrido que te lleve más lejos.</p>
                    </div>

                    <div class="route-layout">
                        <div class="route-options">${['5K','10K'].map(route => html`
                            <button type="button" aria-pressed=${this.selectedRoute === route} aria-label=${`Seleccionar ruta ${route}`} class=${this.selectedRoute === route ? 'route-option active' : 'route-option'} @click=${() => { this.selectedRoute = route; }}>
                                <span class="route-number titulo03">${route}</span>
                                <span class="notas">${route === '5K' ? 'Ideal para empezar' : 'El reto clásico'}</span>
                                <i data-lucide="route" aria-hidden="true"></i>
                            </button>`
                        )}
                            <p class="route-note notas"><i data-lucide="info" aria-hidden="true"></i> Categoría libre femenil y varonil · Mayores de 18 años</p>
                        </div>

                        <figure class="route-visual">
                            <img src=${routeImage} alt="Mapa de la ruta ${this.selectedRoute}">
                            <figcaption>
                                <strong class="titulo03">${this.selectedRoute}</strong>
                                <small class="notas">Salida y meta · Alameda de León</small>
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </section>
        `;
    };
}
customElements.define('distancias-view', DistanciasView);
