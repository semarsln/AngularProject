import * as Screenfull from "screenfull";

import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output()
  toggleSidenav = new EventEmitter<void>();
 

  constructor() {}

}
