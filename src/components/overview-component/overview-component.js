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
            <section class="overview-container d-flexx" aria-labelledby="overview-title">
                <div class="facts page-shell" data-stagger>

                    <h2 id="overview-title" class="sr-only">Datos principales de la carrera CPM</h2>

                    <article>
                        <i data-lucide="map-pin" aria-hidden="true"></i>
                        <small class="notas">Salida y meta</small>
                        <strong>Alameda de León</strong>
                        <span class="notas">Av. Independencia S/N</span>
                    </article>

                    <article>
                        <i data-lucide="calendar-days" aria-hidden="true"></i>
                        <small class="notas">Fecha</small>
                        <strong>04.10.26</strong>
                        <span class="notas">Domingo</span>
                    </article>

                    <article>
                        <i data-lucide="timer" aria-hidden="true"></i>
                        <small class="notas">Inicio</small>
                        <strong>07:00 AM</strong>
                        <span class="notas">¡Lllega puntual!</span>
                    </article>
                    
                    <article>
                        <i data-lucide="users" aria-hidden="true"></i>
                        <small class="notas">Cupo</small>
                        <strong>1,300</strong>
                        <span class="notas">corredores</span>
                    </article>

                </div>
            </section>
        `;
    };
}
customElements.define('overview-component', OverviewComponent);
