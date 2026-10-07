import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './faq-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

import { raceData } from '../../services/race-data.js';

export class FaqComponent extends LitElement {

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
            <section class="section faq-section" aria-labelledby="faq-title">
                <div class="page-shell faq-layout d-flexx d-row">

                    <div class="section-heading section-intro" data-reveal>
                        <div>
                            <p class="eyebrow eyebrow-next"><span></span> Preguntas frecuentes</p>
                            <h2 id="faq-title" class="titulo02">Todo<br><em>claro.</em></h2>
                        </div>
                        <p>Resuelve lo esencial antes de comenzar tu carrera.</p>
                    </div>
                    
                    <div class="faq-list" data-stagger>${raceData.faqs.map(([q,a],i) => html`
                        <details ?open=${i===0}>
                        <summary aria-controls=${`faq-answer-${i}`}>${q}<i data-lucide="plus" aria-hidden="true"></i></summary>
                        <p id=${`faq-answer-${i}`}>${a}</p>
                        </details>`
                    )}
                    </div>

                </div>
            </section>
        `;
    };
}
customElements.define('faq-component', FaqComponent);
