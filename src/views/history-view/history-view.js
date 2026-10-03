import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './history-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

export class HistoryView extends LitElement {

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
            <section class="history-container d-flexx">
                <div class="page-shell inner-container d-flexx " data-stagger>
                    <article class="top-text-container">
                        <p class="eyebrow eyebrow-next"><span></span> una carrea con propósito</p>
                        <h2>75 Años <br> Tranformando <br>Vidas.</h2>
                    </article>

                    <aside class="first-text">
                        <p>Caja Popular Mexicana convoca <br>a sus socio y personas interesadas en participar en una carrera que reúne comunidad, movimiento y bienestar.</p>
                    </aside>
                    <aside class="second-text">
                        <p>La cita es el domingo 04 de octubre del 2026 en Oaxaca de Juárez. Corre 5 o 10 kilómetros y forma parte de esta celebración.</p>
                        <a class="text-link" href="#carrera">Quiero registrarme <i data-lucide="move-right"></i></a>
                    </aside>

                </div>
            </section>
        `;
    };
}
customElements.define('history-view', HistoryView);