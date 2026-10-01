import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './rutas-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

import ruta5k from '../../assets/CPM/ruta.jpg';
import ruta10k from '../../assets/CPM/ruta2.jpg';

export class RutasComponent extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    render() {
        return html`
            <section class="rutas-container general-container d-flexx d-row">
                <article class="rutas-text-side">
                    <div class="title-rutas">
                        <p class="cpm-carrera-font">Elige tu reto</p>
                        <h3 class="cpm-font">Distancias</h3>
                    </div>
                    <div class="rutas-selector d-flexx d-col">
                        <span class="ruta-op">
                            <h3 class="cpm-carrera-font">5K</h3>
                            <p>Libre Varonil / Femenil · 18+ años</p>
                            <small>Perfecta para empezar</small>
                        </span>
                        <span class="ruta-op">
                            <h3 class="cpm-carrera-font">10K</h3>
                            <p>Libre Varonil / Femenil · 18+ años</p>
                            <small>El reto clásico...</small>
                        </span>
                    </div>

                    
                </article>
                <figure class="rutas-img-side">
                    <img src="${ruta5k}" class="logo-cpm" alt="logo CPM">
                </figure>
            </section>
        `;
    };

}
customElements.define('rutas-component', RutasComponent);