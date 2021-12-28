import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miniolimpiadi';
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){

      this.matIconRegistry.addSvgIcon(
        `alto`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/alto.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `arco`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/arco.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `freccette`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/freccette.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `lungo`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/lungo.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `mezzofondo`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/mezzofondo.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `peso`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/peso.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `staffetta`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/staffetta.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `velocita`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/velocita.svg")
      );
      this.matIconRegistry.addSvgIcon(
        `vortex`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/vortex.svg")
      );
  }
}
