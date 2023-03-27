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
  .badge {
    border: 1px solid black;
			padding: 10px;
			font-size: 20px;
			text-align: center;
			margin: 10px;
			width: 200px;
  }

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