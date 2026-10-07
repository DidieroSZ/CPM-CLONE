import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './prizes-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

import { raceData } from '../../services/race-data.js';

export class PrizesView extends LitElement {

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
            <section class="section prizes ">
                <div class="page-shell">

                <div class="section-heading d-flexx d-row" data-reveal>
                    <div>
                        <p class="eyebrow eyebrow-next"><span></span> Corre por más</p>
                        <h2 class="titulo02">Premiación<br><em>top 3 por categoría.</em></h2>
                    </div>
                    <p>Reconocemos el esfuerzo de quienes llegan más lejos en cada distancia.</p>
                </div>

                <div class="prize-grid" data-stagger>${raceData.prizes.map((p,i) => html`
                    <article class=${i === 0 ? 'prize-card featured' : 'prize-card'}>
                        <div class="prize-top notas">
                            <span>Rama femenil · varonil</span>
                            <strong>${p.distance}</strong>
                        </div>
                        <div class="prize-row">
                            <span>01 <small class="notas">primer lugar</small></span>
                            <b>${p.first}</b>
                        </div>
                        <div class="prize-row">
                            <span>02 <small>segundo lugar</small></span>
                            <b>${p.second}</b>
                        </div>
                        <div class="prize-row">
                            <span>03 <small>tercer lugar</small></span>
                            <b>${p.third}</b>
                        </div>
                    </article>`
                    )}
                </div>

                </div>
            </section>
            
        `;
    };
}
customElements.define('prizes-view', PrizesView);