import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './convocatoria-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { hydrateIcons } from '../../utils/icons.js';
import { animatePage } from '../../utils/animations.js';
/* --- ICONS --- */

export class ConvocatoriaView extends LitElement {

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
            <section class="convocatoria-container d-flexx">
                <div class="page-shell" data-stagger>
                    <article class="top-text-container">
                        <p class="eyebrow eyebrow-next"><span></span> TODO LO QUE NECESITAS SABER</p>
                        <h2>CONVOCATORIA</h2>
                    </article>

                    <aside class="card-container">

                        <div class="card-cpm">
                            <small>01</small>
                            <p>DATOS DEL EVENTO</p>
                            <span class="content-card d-flexx d-col">
                                <p> 
                                    <small>fecha</small> <br>
                                    Domingo 04 de octubre de 2026.
                                </p>
                                <p> 
                                    <small>Distancias</small> <br>
                                    5 y 10 kilómetros.
                                </p>
                                <p> 
                                    <small>Salida y meta</small> <br>
                                    Av. Independencia, junto a la Alameda de León.
                                </p>
                                <p> 
                                    <small>Arranque</small> <br>
                                    7:00 a.m.
                                </p>
                                <p> 
                                    <small>Cupo limitado</small> <br>
                                    1,300 participantes
                                </p>
                            </span>
                        </div>

                        <div class="card-cpm">
                            <small>02</small>
                            <p>BASES PARA SOCIOS</p>
                            <span class="content-card d-flexx d-col">
                                <p>Si ya eres socio de Caja Popular Mexicana:</p>
                                <ul>
                                    <li>Realiza un ahorro mínimo de $500 en Cuenta Mexicana y/o</li>
                                    <li>Tramita un crédito de $20,000 o más, sin plazo mínimo.</li>
                                </ul>                              
                                <p>Obtén un pase con derecho a kit para participar en la carrera.</p>
                            </span>
                        </div>

                        <div class="card-cpm">
                            <small>03</small>
                            <p>BASES PARA NO SOCIOS</p>
                            <span class="content-card d-flexx d-col">
                                <p>Puedes participar de dos formas:</p>
                                <ul>
                                    <li>Hazte socio y apertura tu Cuenta Mexicana con un ahorro mínimo de $100.</li>
                                    <li>Solicita un número de cuenta en una sucursal participante y realiza el pago de inscripción de $100.</li>
                                </ul>
                                <p>En ambos casos recibirás un pase con derecho a kit.</p>
                            </span>
                        </div>

                        <div class="card-cpm">
                            <small>04</small>
                            <p>REGISTRA TU PARTICIPACIÓN</p>
                            <span class="content-card d-flexx d-col">
                                <p>Después de cumplir con las bases:</p>
                                <ol>
                                    <li>Acude a una sucursal participante.</li>
                                    <li>Solicita tu registro con el gerente o subgerente.</li>
                                    <li>Recibe tu folio.</li>
                                    <li>O completa tu inscripción en el portal web.</li>
                                </ol>
                                <p>Si necesitas apoyo, puedes acudir a la oficina de Plaza Oaxaca con tu folio.</p>
                                <p> 
                                    <small>Registro presencial:</small> <br>
                                    Calle Armenta y López No. 1028, Planta Alta, Col. Centro, Oaxaca de Juárez, Oaxaca. <br>Lunes a viernes, de 10:00 a.m. a 4:00 p.m.
                                </p>
                            </span>
                        </div>

                       

                    </aside>
                </div>
            </section>
        `;
    };
}
customElements.define('convocatoria-view', ConvocatoriaView);