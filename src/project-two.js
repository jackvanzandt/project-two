import { LitElement, html, css } from 'lit';



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