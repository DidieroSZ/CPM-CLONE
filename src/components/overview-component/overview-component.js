import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './overview-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

export class OverviewComponent extends LitElement {

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
            <section class="overview-container d-flexx">
                <div class="facts page-shell" data-stagger>

                    <article>
                        <i data-lucide="map-pin"></i>
                        <small>Salida y meta</small>
                        <strong>Alameda de León</strong>
                        <span>Av. Independencia S/N</span>
                    </article>

                    <article>
                        <i data-lucide="calendar-days"></i>
                        <small>Fecha</small>
                        <strong>04.10.26</strong>
                        <span>Domingo</span>
                    </article>

                    <article>
                        <i data-lucide="timer"></i>
                        <small>Inicio</small>
                        <strong>07:00 AM</strong>
                        <span>¡Lllega puntual!</span>
                    </article>
                    
                    <article>
                        <i data-lucide="users"></i>
                        <small>Cupo</small>
                        <strong>1,300</strong>
                        <span>corredores</span>
                    </article>

                </div>
            </section>
        `;
    };
}
customElements.define('overview-component', OverviewComponent);