import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './banner-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
import { gsap } from 'gsap';
/* --- ICONS --- */

export class BannerView extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    firstUpdated() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.from(this.renderRoot.querySelector('.banner-cta-container'), { opacity: 0, y: 36, duration: 1, ease: 'power3.out' });
        gsap.from(this.renderRoot.querySelector('.banner-pill-date'), { opacity: 0, y: -14, duration: .7, delay: .2, ease: 'power2.out' });
    }

    render() {
        return html`
            <section class="banner-container general-container d-flexx">
            
                <div class="banner-cta-container d-flexx d-col">
                    <span class="banner-pill-date d-flexx d-row">04 OCT ${unsafeHTML(icons.arrow)} Oaxaca</span>
                    <h2 class="banner-title-cta cpm-font">Carrera CPM <br> 75 años <br> transformando vidas</h2>
                    <p class="banner-text-cta">Caja Popular Mexicana convoca a todos sus socios y personas 
                    interesadas a participar en su: <br>Carrera CPM <b>“75 años 
                    Transformando vidas”</b> 5 Y 10 Kilómetros.
                    </p>
                    <div class="btns-cta-container d-flexx d-row">
                        <button class="btn-general btn-white" @click=${() => this.requestRegistration()}>Registrarme</button>
                        <button class="btn-general btn-secundario">Nuestras Categorías</button>
                    </div>
                </div>
                
                <span class="blur-gradient"></span>
            </section>
        `;
    }

    requestRegistration() {
        this.dispatchEvent(new CustomEvent('register-request', { bubbles: true, composed: true }));
    }
}
customElements.define('banner-view', BannerView);
