import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class ProjectTwo extends LitElement {
  static properties = {
    header: { type: String },
  }

  static get styles() {
    return css`


    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`



    `;
  }
}

customElements.define('project-two', ProjectTwo);