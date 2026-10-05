import { LitElement, css, html } from 'lit';
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import styles from './home-page.css?inline';
/* --- STYLES --- */

/* --- ASSETS --- */
import logo from '../../assets/CPM/cpm-logo.png';


/* --- ASSETS --- */

/* --- COMPONENTS --- */
import '../../components/nav-component/nav-component.js';
import '../../components/counter-component/counter-component.js';
import '../../components/overview-component/overview-component.js';
/* --- COMPONENTS --- */

/* --- VIEWS --- */
import '../../views/header-view/header-view.js';
import '../../views/history-view/history-view.js';
import '../../views/convocatoria-view/convocatoria-view.js';
import '../../views/distancias-view/distancias-view.js';
import '../../views/benefits-view/benefits-view.js';
import '../../views/register-view/register-view.js';
/* --- VIEWS --- */


import { raceData } from '../../services/race-data.js';
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';

export class HomePage extends LitElement {
    static styles = [
        css`${unsafeCSS(generalStyles)}`, 
        css`${unsafeCSS(styles)}`
    ];

    connectedCallback() { 
        super.connectedCallback(); 
    }

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
        <main>
            <nav-component></nav-component>
            <header-view id="inicio"></header-view>
            <counter-component></counter-component>
            <overview-component></overview-component>
            <history-view></history-view>
            <convocatoria-view></convocatoria-view>
            <distancias-view></distancias-view>
            <benefits-view></benefits-view>
            <register-view></register-view>

            <section id="premiacion" class="section prizes page-shell"><div class="section-heading" data-reveal><div><p class="eyebrow">Corre por más</p><h2>Premiación<br><span>top 3 por categoría.</span></h2></div><p>Reconocemos el esfuerzo de quienes llegan más lejos en cada distancia.</p></div><div class="prize-grid" data-stagger>${raceData.prizes.map((p,i) => html`<article class=${i === 0 ? 'prize-card featured' : 'prize-card'}><div class="prize-top"><span>Rama femenil · varonil</span><strong>${p.distance}</strong></div><div class="prize-row"><span>01 <small>primer lugar</small></span><b>${p.first}</b></div><div class="prize-row"><span>02 <small>segundo lugar</small></span><b>${p.second}</b></div><div class="prize-row"><span>03 <small>tercer lugar</small></span><b>${p.third}</b></div></article>`)}</div></section>
            <section id="faq" class="section faq-section"><div class="page-shell faq-layout"><div class="section-intro" data-reveal><p class="eyebrow">Preguntas frecuentes</p><h2>Todo<br><span>claro.</span></h2><p>Resuelve lo esencial antes de comenzar tu carrera.</p></div><div class="faq-list" data-stagger>${raceData.faqs.map(([q,a],i) => html`<details ?open=${i===0}><summary>${q}<i data-lucide="plus"></i></summary><p>${a}</p></details>`)}</div></div></section>
            <footer class="site-footer"><div class="page-shell footer-main"><a class="brand" href="#inicio"><img src=${logo} alt="Caja Popular Mexicana"><span>CARRERA CPM<strong>75 AÑOS</strong></span></a><div><p class="eyebrow lime-text">Corre tu historia</p><h2>Cada kilómetro<br>transforma vidas.</h2></div><a class="button button-lime" href="#registro">Regístrate ahora <i data-lucide="arrow-up-right"></i></a></div><div class="page-shell footer-bottom"><span>© 2026 Caja Popular Mexicana</span><span>Oaxaca de Juárez · México</span><a href="#inicio">Volver arriba ↑</a></div></footer>
        </main>`;
    }
}
customElements.define('home-page', HomePage);
