import { LitElement, css, html } from 'lit';
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import styles from './home-page.css?inline';
/* --- STYLES --- */

/* --- ASSETS --- */
import logo from '../../assets/CPM/cpm-logo.png';

import route5k from '../../assets/CPM/ruta5k_small.jpg';
import route10k from '../../assets/CPM/ruta10k_small.jpg';
import shirt from '../../assets/CPM/playera.jpg';
import medal from '../../assets/CPM/medalla-Photoroom.png';
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
/* --- VIEWS --- */


import { raceData, registrationSteps } from '../../services/race-data.js';
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';

export class HomePage extends LitElement {
    static properties = { 
        selectedRoute: { type: String }, 
    };

    static styles = [
        css`${unsafeCSS(generalStyles)}`, 
        css`${unsafeCSS(styles)}`
    ];

    constructor() { super(); 
        this.selectedRoute = '5K'; 
    }

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
        const routeImage = this.selectedRoute === '5K' ? route5k : route10k;

        return html`
        <main>
            <nav-component></nav-component>
            <header-view id="inicio"></header-view>
            <counter-component></counter-component>
            <overview-component></overview-component>
            <history-view></history-view>
            <convocatoria-view></convocatoria-view>

            <section id="reto" class="section route-section dark-section"><div class="page-shell"><div class="section-heading light-heading" data-reveal><div><p class="eyebrow lime-text"><span></span> Elige tu reto</p><h2>Tu ritmo.<br><em>Tu historia.</em></h2></div><p>Dos distancias, una misma energía. Elige el recorrido que te lleve más lejos.</p></div><div class="route-layout"><div class="route-options" data-stagger>${['5K','10K'].map(route => html`<button class=${this.selectedRoute === route ? 'route-option active' : 'route-option'} @click=${() => { this.selectedRoute = route; }}><span class="route-number">${route}</span><span>${route === '5K' ? 'Ideal para empezar' : 'El reto clásico'}</span><i data-lucide="arrow-up-right"></i></button>`)}<p class="route-note"><i data-lucide="info"></i> Categoría libre femenil y varonil · Mayores de 18 años</p></div><figure class="route-visual"><img src=${routeImage} alt="Mapa de la ruta ${this.selectedRoute}"><figcaption><span>Ruta de corredor</span><strong>${this.selectedRoute}</strong><small>Salida y meta · Alameda de León</small></figcaption></figure></div></div></section>
            <section class="section benefits page-shell"><div class="section-heading" data-reveal><div><p class="eyebrow">Lo que te llevas</p><h2>Corre con<br><span>todo incluido.</span></h2></div><p>Tu inscripción incluye lo necesario para vivir la experiencia CPM de principio a fin.</p></div><div class="benefit-grid" data-stagger>${raceData.benefits.map(b => html`<article class="benefit-card"><i data-lucide=${b.icon}></i><h3>${b.label}</h3><p>${b.detail}</p></article>`)}</div><div class="merch-strip"><div><p class="eyebrow lime-text">Diseñado para avanzar</p><h3>Vístete de historia.</h3><p>Playera conmemorativa y medalla para recordar cada kilómetro.</p></div><img src=${shirt} alt="Playera conmemorativa CPM"><img src=${medal} alt="Medalla conmemorativa CPM"></div></section>
            <section id="registro" class="section registration-section"><div class="page-shell"><div class="section-heading light-heading" data-reveal><div><p class="eyebrow lime-text"><span></span> Tu lugar empieza aquí</p><h2>Regístrate.<br><em>Corre por algo más.</em></h2></div><p>Conoce las bases de participación y completa tu proceso en una sucursal participante de Caja Popular Mexicana.</p></div><div class="steps" data-stagger>${registrationSteps.map(([n,t,d]) => html`<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`)}</div><div class="registration-bottom"><div><i data-lucide="circle-check"></i><span>Inscripciones del 20 de agosto al 30 de septiembre de 2026 o hasta agotar existencias.</span></div><a class="button button-lime" href="mailto:registro@cpm.coop">Quiero registrarme <i data-lucide="arrow-up-right"></i></a></div></div></section>
            <section id="premiacion" class="section prizes page-shell"><div class="section-heading" data-reveal><div><p class="eyebrow">Corre por más</p><h2>Premiación<br><span>top 3 por categoría.</span></h2></div><p>Reconocemos el esfuerzo de quienes llegan más lejos en cada distancia.</p></div><div class="prize-grid" data-stagger>${raceData.prizes.map((p,i) => html`<article class=${i === 0 ? 'prize-card featured' : 'prize-card'}><div class="prize-top"><span>Rama femenil · varonil</span><strong>${p.distance}</strong></div><div class="prize-row"><span>01 <small>primer lugar</small></span><b>${p.first}</b></div><div class="prize-row"><span>02 <small>segundo lugar</small></span><b>${p.second}</b></div><div class="prize-row"><span>03 <small>tercer lugar</small></span><b>${p.third}</b></div></article>`)}</div></section>
            <section id="faq" class="section faq-section"><div class="page-shell faq-layout"><div class="section-intro" data-reveal><p class="eyebrow">Preguntas frecuentes</p><h2>Todo<br><span>claro.</span></h2><p>Resuelve lo esencial antes de comenzar tu carrera.</p></div><div class="faq-list" data-stagger>${raceData.faqs.map(([q,a],i) => html`<details ?open=${i===0}><summary>${q}<i data-lucide="plus"></i></summary><p>${a}</p></details>`)}</div></div></section>
            <footer class="site-footer"><div class="page-shell footer-main"><a class="brand" href="#inicio"><img src=${logo} alt="Caja Popular Mexicana"><span>CARRERA CPM<strong>75 AÑOS</strong></span></a><div><p class="eyebrow lime-text">Corre tu historia</p><h2>Cada kilómetro<br>transforma vidas.</h2></div><a class="button button-lime" href="#registro">Regístrate ahora <i data-lucide="arrow-up-right"></i></a></div><div class="page-shell footer-bottom"><span>© 2026 Caja Popular Mexicana</span><span>Oaxaca de Juárez · México</span><a href="#inicio">Volver arriba ↑</a></div></footer>
        </main>`;
    }
}
customElements.define('home-page', HomePage);
