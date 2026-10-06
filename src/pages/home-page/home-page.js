import { LitElement, css, html } from 'lit';
import { unsafeCSS } from 'lit';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import styles from './home-page.css?inline';
/* --- STYLES --- */

/* --- COMPONENTS --- */
import '../../components/nav-component/nav-component.js';
import '../../components/counter-component/counter-component.js';
import '../../components/overview-component/overview-component.js';
import '../../components/faq-component/faq-component.js';
import '../../components/footer-component/footer-component.js';
/* --- COMPONENTS --- */

/* --- VIEWS --- */
import '../../views/header-view/header-view.js';
import '../../views/history-view/history-view.js';
import '../../views/convocatoria-view/convocatoria-view.js';
import '../../views/distancias-view/distancias-view.js';
import '../../views/benefits-view/benefits-view.js';
import '../../views/register-view/register-view.js';
import '../../views/prizes-view/prizes-view.js';
/* --- VIEWS --- */


export class HomePage extends LitElement {
    static styles = [
        css`${unsafeCSS(generalStyles)}`, 
        css`${unsafeCSS(styles)}`
    ];

    render() {
        return html`
            <main>
                <nav-component></nav-component>
                <header-view></header-view>
                <counter-component></counter-component>
                <overview-component></overview-component>
                <history-view></history-view>
                <convocatoria-view></convocatoria-view>
                <distancias-view></distancias-view>
                <benefits-view></benefits-view>
                <register-view></register-view>
                <prizes-view></prizes-view>
                <faq-component></faq-component>
                <footer-component></footer-component>
            </main>
        `;
    }
}
customElements.define('home-page', HomePage);
