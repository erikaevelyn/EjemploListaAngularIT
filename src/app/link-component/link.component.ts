import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LinkModel } from "models/link-model";

@Component({
  selector: "link-item",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.css"]
})
export class LinkComponent {
  @Input()
  item: LinkModel;

  @Output()
  itemEliminado = new EventEmitter();

  constructor() {}

  eliminarItem() {
    this.itemEliminado.emit(this.item.id);
  }
}
