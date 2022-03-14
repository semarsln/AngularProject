import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class MenuService {
  constructor(public translate: TranslateService) {}

  getAll() {
    return [
      {
        link: "/",
        label: this.translate.instant("HOME"),
        icon: "home"
      },
      {
        label: this.translate.instant("Tests"),
        icon: "description",
        items: [
          { link: "/tests/addtests",icon:"add_box", label: this.translate.instant("add tests") },
          { link: "/tests/alltests",icon:"account_circle", label: this.translate.instant("all tests") },
          { link: "/tests/edittests",icon:"edit", label: this.translate.instant("edit tests") },
         
         
        ]},
      
      
      {
        label: this.translate.instant("Candidates"),
        icon: "people",
        items: [
          { link: "/candidates/allcandidates",icon:"people_outline", label: this.translate.instant("allcandidates") },
          { link: "/candidates/addcandidates",icon:"group_add" ,label: this.translate.instant("addcandidates") },
         
        ]},
      
     
     
    ];
  }
}
