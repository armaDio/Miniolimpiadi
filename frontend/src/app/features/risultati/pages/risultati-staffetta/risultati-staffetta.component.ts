import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risultati-staffetta',
  templateUrl: './risultati-staffetta.component.html',
  styleUrls: ['./risultati-staffetta.component.scss']
})
export class RisultatiStaffettaComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
