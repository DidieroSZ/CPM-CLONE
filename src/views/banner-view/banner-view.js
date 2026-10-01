import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './banner-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class BannerView extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

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
                        <button class="btn-general btn-white">Obtener Kit</button>
                        <button class="btn-general btn-secundario">Nuestras Categorías</button>
                    </div>
                </div>
                
                <span class="blur-gradient"></span>
            </section>
        `;
    };

}
customElements.define('banner-view', BannerView);