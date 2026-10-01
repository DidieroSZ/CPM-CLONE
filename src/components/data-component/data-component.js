import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { createElement, Route, Users, Clock3, MapPin } from 'lucide';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './data-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class DataComponent extends LitElement {

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    firstUpdated() {
        this.renderRoot.querySelectorAll('[data-lucide]').forEach((element) => {
            const icon = { route: Route, users: Users, clock: Clock3, pin: MapPin }[element.dataset.lucide];
            if (icon) element.replaceWith(createElement(icon));
        });
    }

    render() {
        return html`
            <section class="data-container general-container d-flexx d-row">
                <div class="iconic-data d-flexx d-col verde03">
                    <span data-lucide="route" aria-hidden="true"></span>
                    <p class="cpm-carrera-font">5k y 10k</p>
                </div>
                <div class="iconic-data d-flexx d-col verde01">
                    <span data-lucide="users" aria-hidden="true"></span>
                    <p class="cpm-carrera-font">1300 <br>corredores</p>
                </div>
                <div class="iconic-data d-flexx d-col verde04">
                    <span data-lucide="clock" aria-hidden="true"></span>
                    <p class="cpm-carrera-font">07:00 A.M.</p>
                </div>
                <div class="iconic-data d-flexx d-col verde02">
                    <span data-lucide="pin" aria-hidden="true"></span>
                    <p class="cpm-carrera-font">Alameda de León, <br>Av. Independencia S/N</p>
                </div>
            </section>
        `;
    };

}
customElements.define('data-component', DataComponent);
