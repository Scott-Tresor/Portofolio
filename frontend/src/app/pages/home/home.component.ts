import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  col = [
    {
      number: 500,
      titre: 'Projects',
    },
    {
      number: 420,
      titre: 'Technologies',
    },
    {
      number: 30,
      titre: 'Frameworks',
    },
    {
      number: 2,
      titre: 'Lnguges',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
