import template from "./footer.component.html";
import "./footer.component.css";

export class FooterComponent extends HTMLElement {
    constructor() {
      super(template);
      this.innerHTML = template;
    }
  }
  