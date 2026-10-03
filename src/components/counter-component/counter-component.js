import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './counter-component.css?inline';
/* --- STYLES --- */


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
            <section class="counter-container d-flexx">
                <div class="page-shell d-flexx d-row" data-stagger>
                    <article class="counter-text-side">
                        <p class="eyebrow"><span></span> La cuenta regresiva</p>
                        <h2>Nos vemos en la salida.</h2>
                    </article>

                    <aside class="counter-numbers-side d-flexx d-col">
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
                </div>
            </section>
        `;
    };

}
customElements.define('counter-component', CounterComponent);