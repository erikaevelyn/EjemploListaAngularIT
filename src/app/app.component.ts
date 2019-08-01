import { Component } from "@angular/core";
import { LinkModel } from "models/link-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  indexLinks: number = 0;
  links: Array<LinkModel> = [];

  constructor() {}

  agregarLink(inputTitulo: HTMLInputElement, inputLink: HTMLInputElement) {
    this.links.push({
      id: this.indexLinks++,
      titulo: inputTitulo.value,
      link: inputLink.value
    });
    inputTitulo.value = "";
    inputLink.value = "";
    inputTitulo.focus();
  }

  eliminarItem(index: number) {
    this.links.forEach((link: LinkModel, i: number) => {
      if (link.id === index) {
        this.links.splice(i, 1);
      }
    });
  }
}
