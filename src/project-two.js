import { LitElement, html, css } from 'lit';

import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";


export class ProjectTwo extends LitElement {
  static get properties() {
    return {
      badgeName: {
        type: String,
        reflect: true,
      },
      badgeMajor: {
        type: String,
        reflect: true,
      },
      badgeCreator: {
        type: String,
        reflect: true,
      },
      badgeIcon: {
        type: String,
        reflect: true,
      }
    }
  }

  static get styles() {
    return css`
  .badge {
    
  }

    `;
  }

  constructor() {
    super();
    this.badgeCreator = "";
    this.badgeCreator = "";
    this.badgeName = "";
    this.badgeIcon = "";
  }

  render() {
    return html`
      
      

    `;
  }
}

customElements.define('project-two', ProjectTwo);