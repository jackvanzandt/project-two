import { LitElement, html, css } from "lit";
import "edu-badge/src/edu-badge.js";



export class BadgeProject extends LitElement {
  static get tag() {
    return "badge-project";
  }
  static get properties() {
    return {
      badges: { type: Array },
    };
  }

  constructor() {
    super();
    console.log("inside badge project")
    this.badges = [];
    this.updateBadges();
    this.searchString = ""
  }

  updateBadges() {
    console.log("calling backend")
    const url = new URL("../api/badge-back", import.meta.url).href;
    const data = { searchString: this.searchString };
    
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        border: 2px solid black;
        display: flex;
      }
      .item {
        display: inline-flex;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.badges.map(
          (badge) => html`
            <div class="item">
              <project-two
                
                creator="${badge.creator}"
                department="${badge.department}"
                image="${badge.image}"
                name="${badge.name}"
                
              ></project-two>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define(BadgeProject.tag, BadgeProject);
