import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './register-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

import { registrationSteps } from '../../services/race-data.js';

export class RegisterView extends LitElement {

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
            <section class="section registration-section">
                <div class="page-shell">

                    <div class="section-heading light-heading d-flexx d-row" data-reveal>
                        <div>
                            <p class="eyebrow"><span></span> Tu lugar empieza aquí</p>
                            <h2>Regístrate.<br><em>Corre por <br>algo más.</em></h2>
                        </div>
                        <p>Conoce las bases de participación y completa tu proceso en una sucursal participante de Caja Popular Mexicana.</p>
                    </div>

                    <div class="steps" data-stagger>${registrationSteps.map(([n,t,d]) => html`
                            <article>
                                <span>${n}</span>
                                <h3>${t}</h3>
                                <p>${d}</p>
                            </article>`
                        )}
                    </div>

                    <div class="registration-bottom d-flexx d-row">
                        <div class="d-flexx">
                            <i data-lucide="circle-check"></i>
                            <span>Inscripciones del 20 de agosto al 30 de septiembre de 2026 o hasta agotar existencias.</span>
                        </div>
                        <a class="button button-lime">Quiero registrarme <i data-lucide="move-right"></i></a>
                    </div>

                </div>
            </section>
        `;
    };
}
customElements.define('register-view', RegisterView);