import template from "../views/welcome.html";
import { Component } from "./component";

/* class WelcomeComponent constructor  */
export class WelcomeComponent extends Component {
    constructor() {
        super(template);
        this.template = template;
    }

// put component in global scope, to be runnable right from the HTML.
// window.WelcomeComponent = WelcomeComponent;

    /* method WelcomeComponent.init */
    init() {
        let form = document.querySelector("form.form-signin");

        form.addEventListener(
            "submit",
            // TODO #arrow-function: use arrow function instead.
            function (event) {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                    form.classList.add("was-validated");
                } else {
                    let name = event.srcElement.querySelector("#nickname").value;
                    let size = parseInt(event.srcElement.querySelector("#size").value);

                    this._startGame(name, size); //scope de classe et fonction et le mot dys
                }
            }.bind(this),
            false
        );

        return this;
    };

    _startGame(name, size) {
        let gamePage = "./#game";
        // TODO #template-literals:  use template literals (backquotes)
        window.location = gamePage + "?name=" + name + "&size=" + size;
    }
}

