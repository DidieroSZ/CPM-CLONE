import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './counter-component.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class CounterComponent extends LitElement {

    static properties = {
        timeRemaining: {
            type: Object,
        },
    };

    constructor() {
        super();
        this.timeRemaining = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        this.targetDate = new Date('2026-10-04T00:00:00');
        this.interval = null;
    };

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    connectedCallback() {
        super.connectedCallback();

        this.updateCounter();

        this.interval = setInterval(() => {
            this.updateCounter();
        }, 1000);
    };

    disconnectedCallback() {
        super.disconnectedCallback();

        clearInterval(this.interval);
    };

    updateCounter() {
        const now = new Date();
        const difference = this.targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            this.timeRemaining = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };

            clearInterval(this.interval);
            return;
        }

        const totalSeconds = Math.floor(difference / 1000);

        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor(
            (totalSeconds % (60 * 60 * 24)) / (60 * 60)
        );
        const minutes = Math.floor(
            (totalSeconds % (60 * 60)) / 60
        );
        const seconds = totalSeconds % 60;

        this.timeRemaining = {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    formatNumber(number) {
        return String(number).padStart(2, '0');
    };

    render() {
        const {
            days,
            hours,
            minutes,
            seconds,
        } = this.timeRemaining;

        return html`
            <section class="counter-container general-container d-flexx d-row">

                <article class="counter-text-side">
                    <p class="cpm-carrera-font">Corre por algo más grande</p>

                    <h3 class="cpm-font">Cada kilómetro<br>transforma vidas.</h3>
                </article>

                <aside class="counter-numbers-side d-flexx d-col">
                    <p class="counter-pill-date cpm-carrera-font d-flexx">04.10.2026 ${unsafeHTML(icons.arrow)}Faltan para la salida</p>

                    <div class="counter d-flexx d-row">
                        <span class="container-number">
                            <p class="cpm-carrera-font">${this.formatNumber(days)}</p>
                            <small>DÍAS</small>
                        </span>
                        <span class="container-number">
                            <p class="cpm-carrera-font">${this.formatNumber(hours)}</p>
                            <small>HRS</small>
                        </span>
                        <span class="container-number">
                            <p class="cpm-carrera-font">${this.formatNumber(minutes)}</p>
                            <small>MINS</small>
                        </span>
                        <span class="container-number">
                            <p class="cpm-carrera-font"> ${this.formatNumber(seconds)}</p>
                            <small>SEGS</small>
                        </span>
                    </div>

                </aside>
            </section>
        `;
    };

}
customElements.define('counter-component', CounterComponent);