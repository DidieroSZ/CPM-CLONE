import { LitElement, css, html } from 'lit';
import { unsafeCSS } from 'lit';
import generalStyles from '../../styles/globalStyles.css?inline';
import styles from './home-page.css?inline';
import logo from '../../assets/CPM/cpm-logo.png';
import heroBackground from '../../assets/CPM/background2.jpg';
import route5k from '../../assets/CPM/ruta.jpg';
import route10k from '../../assets/CPM/ruta2.jpg';
import shirt from '../../assets/CPM/playera.jpg';
import medal from '../../assets/CPM/medalla.jpg';
import { raceData, registrationSteps } from '../../services/race-data.js';
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';

export class HomePage extends LitElement {
    static properties = { 
        selectedRoute: { type: String }, 
        timeRemaining: { type: Object } 
    };

    static styles = [
        css`${unsafeCSS(generalStyles)}`, 
        css`${unsafeCSS(styles)}`
    ];

    constructor() { super(); 
        this.selectedRoute = '5K'; 
        this.timeRemaining = { days: '00', hours: '00', minutes: '00', seconds: '00' }; 
    }

    connectedCallback() { 
        super.connectedCallback(); 
        this._tick(); 
        this._interval = setInterval(
            () => this._tick(), 1000
        ); 
    }

    disconnectedCallback() { 
        clearInterval(this._interval); 
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
    _tick() { 
        const total = Math.max(0, Math.floor((new Date('2026-10-04T07:00:00-06:00').getTime() - Date.now()) / 1000)); 
        this.timeRemaining = { 
            days: String(Math.floor(total / 86400)).padStart(2, '0'), 
            hours: String(Math.floor((total % 86400) / 3600)).padStart(2, '0'), 
            minutes: String(Math.floor((total % 3600) / 60)).padStart(2, '0'), 
            seconds: String(total % 60).padStart(2, '0') 
        }; 
    }
    render() {
        const routeImage = this.selectedRoute === '5K' ? route5k : route10k;
        const { 
            days, 
            hours, 
            minutes, 
            seconds 
        } = this.timeRemaining;
        
        return html`
        <main>
          <header class="site-header"><a class="brand" href="#inicio"><img src=${logo} alt="Caja Popular Mexicana"><span>CARRERA CPM<strong>75 AÑOS</strong></span></a><nav class="desktop-nav"><a href="#carrera">La carrera</a><a href="#reto">El reto</a><a href="#premiacion">Premiación</a><a href="#faq">Preguntas</a></nav><a class="button button-lime header-cta" href="#registro">Regístrate <i data-lucide="arrow-up-right"></i></a><a class="menu-link" href="#registro" aria-label="Ir al registro"><i data-lucide="menu"></i></a></header>
          <section id="inicio" class="hero" style="--hero-bg: url('${heroBackground}')"><div class="hero-overlay"></div><div class="hero-copy page-shell"><p class="eyebrow lime-text"><span></span> Oaxaca · 04 octubre 2026</p><h1>Carrera CPM<br><em>75 años</em><br>transformando vidas</h1><p class="hero-description">Una carrera para celebrar lo que construimos juntos. Corre 5K o 10K y sé parte de la historia de Caja Popular Mexicana.</p><div class="hero-actions"><a class="button button-lime" href="#registro">Quiero correr <i data-lucide="arrow-right"></i></a><a class="text-link" href="#carrera">Conoce la carrera <i data-lucide="chevron-down"></i></a></div><div class="hero-meta"><span><b>5K / 10K</b> distancias</span><span><b>+18</b> categoría libre</span><span><b>07:00</b> salida</span></div></div><div class="hero-art"><span class="art-number">75</span><span class="art-label">años<br>CPM</span></div><div class="hero-scroll"><span></span> Desliza para explorar</div></section>
          <section class="countdown-band"><div class="page-shell countdown-inner"><div><p class="eyebrow lime-text"><span></span> La cuenta regresiva</p><h2>Nos vemos en la salida.</h2></div><div class="countdown"><div><strong>${days}</strong><small>días</small></div><div><strong>${hours}</strong><small>hrs</small></div><div><strong>${minutes}</strong><small>min</small></div><div><strong>${seconds}</strong><small>seg</small></div></div></div></section>
          <section id="carrera" class="section overview page-shell" data-reveal><div class="section-intro"><p class="eyebrow">La cita</p><h2>Una ciudad.<br><span>Miles de historias.</span></h2></div><div class="overview-content"><p>La carrera CPM celebra 75 años de historias que transforman. Te esperamos en Oaxaca para recorrer sus calles, encontrarnos en comunidad y correr por algo más grande.</p><a class="text-link dark-link" href="#registro">Aparta tu lugar <i data-lucide="arrow-up-right"></i></a></div></section>
          <section class="facts page-shell" data-stagger><article><i data-lucide="calendar-days"></i><small>Fecha</small><strong>04.10.26</strong><span>Domingo</span></article><article><i data-lucide="map-pin"></i><small>Salida y meta</small><strong>Alameda de León</strong><span>Av. Independencia S/N</span></article><article><i data-lucide="users"></i><small>Cupo</small><strong>1,300</strong><span>corredores</span></article></section>
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
