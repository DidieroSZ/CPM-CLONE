import { LitElement, css, html } from 'lit';
import { unsafeCSS } from 'lit';

import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './event-info-view.css?inline';
import { gsap } from 'gsap';

export class EventInfoView extends LitElement {
    static styles = [css`${unsafeCSS(generalStyles)}`, css`${unsafeCSS(innerStyles)}`];

    firstUpdated() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.from(this.renderRoot.querySelectorAll('.details-card, .faq-list details, .awards-grid article'), { opacity: 0, y: 22, duration: .65, stagger: .08, ease: 'power2.out' });
    }

    render() {
        return html`
            <section id="carrera" class="intro-section general-container">
                <div class="section-heading compact-heading">
                    <p class="eyebrow cpm-carrera-font">Una carrera con propósito</p>
                    <h2 class="cpm-font">75 años transformando vidas</h2>
                </div>
                <div class="intro-grid">
                    <p class="intro-lead">Caja Popular Mexicana convoca a sus socios y personas interesadas a participar en una carrera que reúne comunidad, movimiento y bienestar.</p>
                    <div class="intro-copy"><p>La cita es el domingo 04 de octubre de 2026 en Oaxaca de Juárez. Corre 5 o 10 kilómetros y forma parte de esta celebración.</p><a href="#registro">Quiero registrarme <span>→</span></a></div>
                </div>
            </section>

            <section id="convocatoria" class="details-section general-container">
                <div class="section-heading"><p class="eyebrow cpm-carrera-font">Todo lo que necesitas saber</p><h2 class="cpm-font">Convocatoria</h2></div>
                <div class="details-grid">
                    <article class="details-card details-card-dark"><p class="card-number">01</p><h3>Datos del evento</h3><dl><div><dt>Fecha</dt><dd>Domingo 04 de octubre de 2026</dd></div><div><dt>Salida y meta</dt><dd>Av. Independencia S/N, a un costado de la Alameda de León</dd></div><div><dt>Arranque</dt><dd>7:00 AM</dd></div></dl></article>
                    <article class="details-card"><p class="card-number">02</p><h3>Tu experiencia incluye</h3><ul><li>Playera conmemorativa</li><li>Número de corredor y chip</li><li>Medalla y certificado digital</li><li>Hidratación en ruta</li></ul></article>
                    <article class="details-card details-card-accent"><p class="card-number">03</p><h3>Participación</h3><p>La carrera no aplica para menores de edad. Es válida una participación por socio y el registro requiere el folio entregado en sucursal participante.</p><a href="#registro">Consulta el registro <span>→</span></a></article>
                </div>
            </section>

            <section id="bases" class="faq-section general-container">
                <div class="section-heading"><p class="eyebrow cpm-carrera-font">Reglas claras, carrera segura</p><h2 class="cpm-font">Preguntas frecuentes</h2></div>
                <div class="faq-list">
                    <details open><summary>¿Quiénes pueden participar?</summary><p>Socios y personas que cumplan con las bases y mecánica de inscripción. La carrera es para mayores de edad.</p></details>
                    <details><summary>¿Cómo obtengo mi folio?</summary><p>Acude a una sucursal participante y cumple con la mecánica correspondiente. El gerente o subgerente te entregará un folio para realizar tu inscripción.</p></details>
                    <details><summary>¿Qué distancias existen?</summary><p>Puedes elegir entre 5 KM y 10 KM, en categoría libre femenil o varonil.</p></details>
                    <details><summary>¿Dónde recojo mi kit?</summary><p>En las oficinas de Plaza Oaxaca, Calle Armenta y López No. 1028, Planta Alta, Col. Centro, Oaxaca de Juárez.</p></details>
                    <details><summary>¿Qué debo presentar?</summary><p>Tu folio y/o número de corredor junto con una identificación oficial.</p></details>
                </div>
            </section>

            <section id="premiacion" class="awards-section general-container">
                <div class="section-heading"><p class="eyebrow cpm-carrera-font">Corre para ganar</p><h2 class="cpm-font">Premiación</h2></div>
                <div class="awards-grid">
                    <article><span>10 KM</span><h3>1er lugar</h3><strong>$4,000</strong><p>Monedero electrónico · rama femenil y varonil</p></article>
                    <article><span>10 KM</span><h3>2do lugar</h3><strong>$2,000</strong><p>Monedero electrónico · rama femenil y varonil</p></article>
                    <article><span>5 KM</span><h3>1er lugar</h3><strong>$2,000</strong><p>Monedero electrónico · rama femenil y varonil</p></article>
                </div>
            </section>
        `;
    }
}

customElements.define('event-info-view', EventInfoView);
