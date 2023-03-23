import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class ProjectTwo extends LitElement {
  static get properties() {
    return {
      badgeName: {
        type: String,
        reflect: true,
        attribute: "badge-name",
      },
      badgeMajor: {
        type: String,
        reflect: true,
        attribute: "badge-major",
      },
      badgeCreator: {
        type: String,
        reflect: true,
        attribute: "badge-creator",
      },
    }
  }

  static get styles() {
    return css`


    `;
  }

  constructor() {
    super();
    this.badgeCreator = "";
    this.badgeMajor = "";
    this.badgeName = "";
  }

  render() {
    return html`


    `;
  }
}

customElements.define('project-two', ProjectTwo);