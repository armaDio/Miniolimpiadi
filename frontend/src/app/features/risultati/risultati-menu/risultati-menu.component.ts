import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risultati-menu',
  templateUrl: './risultati-menu.component.html',
  styleUrls: ['./risultati-menu.component.scss']
})
export class RisultatiMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public navigate_to(page:string){
    this.router.navigate(["gare", page]);
  }
}
