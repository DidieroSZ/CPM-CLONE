import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './benefits-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

import { raceData } from '../../services/race-data.js';

import shirt from '../../assets/CPM/playera.jpg';
import medal from '../../assets/CPM/medalla-Photoroom.png';

export class BenefitsView extends LitElement {

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
            <section id="kit-contenido" class="section benefits page-shell" aria-labelledby="benefits-title">

                <div class="section-heading d-flexx d-row" data-reveal>
                    <div>
                        <p class="eyebrow eyebrow-next"><span></span>  Lo que te llevas</p>
                        <h2 id="benefits-title" class="titulo02">Corre con<br><em>todo <br>incluido.</em></h2>
                    </div>
                    <p>Tu inscripción incluye lo necesario para vivir la experiencia CPM de principio a fin.</p>
                </div>

                <div class="benefit-grid" data-stagger>${raceData.benefits.map(b => html`
                        <article class="benefit-card">
                            <i data-lucide=${b.icon} aria-hidden="true"></i>
                            <h3>${b.label}</h3>
                            <p class="notas">${b.detail}</p>
                        </article>`
                    )}
                </div>

                <div class="merch-strip">
                    <div>
                        <p class="eyebrow eyebrow-next"><span></span> Diseñado para avanzar</p>
                        <h3 class="titulo03">Vístete de <br>historia.</h3>
                        <p class="notas">Playera conmemorativa y medalla para recordar cada kilómetro.</p>
                    </div>
                    <img src=${shirt} alt="Playera conmemorativa CPM">
                    <img src=${medal} alt="Medalla conmemorativa CPM">
                </div>

            </section>
        `;
    };
}
customElements.define('benefits-view', BenefitsView);
