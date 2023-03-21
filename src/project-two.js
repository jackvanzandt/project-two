import { LitElement, html, css } from 'lit';



class ProjectTwo extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--project-two-background-color);
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      
    `;
  }
}

customElements.define('project-two', ProjectTwo);