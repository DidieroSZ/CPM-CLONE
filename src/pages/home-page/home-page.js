import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/globalStyles.css?inline';
import innerStyles from './home-page.css?inline';
/* --- STYLES --- */

/* --- SERVICES --- */
/* --- SERVICES --- */

/* --- VIEWS --- */
import '../../views/banner-view/banner-view.js';
import '../../views/footer-view/footer-view.js';
/* --- VIEWS --- */

/* --- COMPONENTS --- */
import '../../components/nav-component/nav-component.js';
import '../../components/counter-component/counter-component.js';
import '../../components/data-component/data-component.js';
import '../../components/rutas-component/rutas-component.js';
/* --- COMPONENTS --- */

/* --- ICONS --- */
/* import { icons } from '../../utils/icons.js' */
/* --- ICONS --- */

/* --- GSAP --- */
/* import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText"; */
/* --- GSAP --- */

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class HomePage extends LitElement {
    static properties = {

    };

    constructor() {
        super();
    };

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ];

    render() {
        return html`
            <main class="home-page-container general-container">
                <nav-component></nav-component>
                <banner-view></banner-view>
                <counter-component></counter-component>
                <rutas-component></rutas-component>
                <data-component></data-component>
                
                <footer-view></footer-view>

            </main>
        `;
    };

}
customElements.define('home-page', HomePage);