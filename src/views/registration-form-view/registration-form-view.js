import { LitElement, css, html } from "lit";
import { unsafeCSS } from "lit";

import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './registration-form-view.css?inline';
import { gsap } from 'gsap';

const branches = [
    'Morelos', 'Oaxaca', 'Juárez', 'Central de abastos', 'El Bosque',
    'Reforma', 'San Martín', 'Volcanes', 'Del Centro', 'Guelaguetza',
    'Mercaderes', 'Xoxocotlán', 'Monte Alban',
];

export class RegistrationFormView extends LitElement {
    static properties = {
        submitted: { type: Boolean },
    };

    constructor() {
        super();
        this.submitted = false;
    }

    firstUpdated() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.from(this.renderRoot.querySelector('.registration-form'), { opacity: 0, y: 24, duration: .8, ease: 'power2.out' });
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    handleSubmit(event) {
        event.preventDefault();
        if (!event.currentTarget.reportValidity()) return;
        this.submitted = true;
    }

    resetForm() {
        this.submitted = false;
        this.updateComplete.then(() => this.renderRoot.querySelector('form')?.reset());
    }

    render() {
        return html`
            <section id="registro" class="registration-section general-container">
                <div class="section-heading">
                    <p class="eyebrow cpm-carrera-font">Registro oficial</p>
                    <h2 class="cpm-font">Corre por algo más grande</h2>
                    <p>Completa tus datos para participar en la Carrera CPM 75 años transformando vidas.</p>
                </div>

                ${this.submitted ? html`
                    <div class="success-card" role="status">
                        <span class="success-mark">✓</span>
                        <p class="eyebrow cpm-carrera-font">Registro recibido</p>
                        <h3>¡Gracias por registrarte!</h3>
                        <p>Tu información quedó lista para validación. Recuerda conservar tu folio de sucursal.</p>
                        <button class="btn-general btn-cta" type="button" @click=${this.resetForm}>Registrar a otra persona</button>
                    </div>
                ` : html`
                    <form class="registration-form" @submit=${this.handleSubmit}>
                        <p class="form-note"><strong>Antes de comenzar:</strong> el registro es para participantes mayores de edad. La talla de playera está sujeta a disponibilidad.</p>

                        <div class="form-block">
                            <h3>Datos del participante</h3>
                            <div class="form-grid">
                                <label class="field field-wide">Correo electrónico<input name="email" type="email" placeholder="tu@correo.com" autocomplete="email" required></label>
                                <label class="field field-wide">Nombre completo<input name="name" type="text" placeholder="Nombre y apellidos" autocomplete="name" required></label>
                                <label class="field">Fecha de nacimiento<input name="birthDate" type="date" required></label>
                                <label class="field">Edad<input name="age" type="number" min="18" max="99" placeholder="18" required></label>
                                <label class="field">Teléfono<input name="phone" type="tel" placeholder="951 243 4100" autocomplete="tel" required></label>
                                <label class="field">Tipo de sangre<select name="bloodType" required><option value="">Selecciona una opción</option><option>A+</option><option>A−</option><option>B+</option><option>B−</option><option>AB+</option><option>AB−</option><option>O+</option><option>O−</option></select></label>
                                <label class="field">Alergias<input name="allergies" type="text" placeholder="Ninguna / especifica"></label>
                                <label class="field">Padecimientos<input name="conditions" type="text" placeholder="Ninguno / especifica"></label>
                                <label class="field field-wide">Medicamentos de uso regular<input name="medications" type="text" placeholder="Ninguno / especifica"></label>
                            </div>
                        </div>

                        <div class="form-block">
                            <h3>Información de inscripción</h3>
                            <fieldset class="choice-field"><legend>¿Eres socio de Caja Popular Mexicana?</legend><label><input type="radio" name="member" value="yes" required> Sí, soy socio</label><label><input type="radio" name="member" value="no"> No soy socio</label></fieldset>
                            <div class="form-grid">
                                <label class="field">Categoría<select name="category" required><option value="">Selecciona una categoría</option><option>Libre femenil</option><option>Libre varonil</option></select></label>
                                <label class="field">Distancia<select name="distance" required><option value="">Selecciona una distancia</option><option>5 KM</option><option>10 KM</option></select></label>
                                <label class="field">Talla de playera<select name="shirtSize" required><option value="">Selecciona una talla</option><option>CH</option><option>M</option><option>G</option><option>XG</option></select></label>
                                <label class="field">Sucursal participante<select name="branch" required><option value="">Selecciona tu sucursal</option>${branches.map((branch) => html`<option>${branch}</option>`)}</select></label>
                                <label class="field field-wide">Folio de registro<input name="folio" type="text" placeholder="Escribe el folio que te entregaron en sucursal" required></label>
                            </div>
                        </div>

                        <div class="form-block">
                            <h3>Contacto de emergencia</h3>
                            <div class="form-grid">
                                <label class="field field-wide">Nombre del familiar<input name="emergencyName" type="text" placeholder="Nombre completo" required></label>
                                <label class="field">Teléfono<input name="emergencyPhone" type="tel" placeholder="951 000 0000" required></label>
                            </div>
                        </div>

                        <label class="consent"><input type="checkbox" required> Confirmo que la información es correcta y acepto participar bajo las bases y reglamento de la Carrera CPM 2026.</label>
                        <p class="required-note">* Todos los campos marcados son obligatorios.</p>
                        <button class="submit-button btn-general btn-cta" type="submit">¡Registrarme!</button>
                    </form>
                `}
            </section>
        `;
    }
}

customElements.define('registration-form-view', RegistrationFormView);
