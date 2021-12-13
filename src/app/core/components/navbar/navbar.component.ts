
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  public y:number = (new Date()).getFullYear();
  public ed = this.y-1996;

  constructor() {
    
   }

  ngOnInit(): void {
  }
  
  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
