import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Item1', url: '', icon: 'paper-plane' },
    { title: 'Item2', url: '', icon: 'heart' },
    { title: 'Item3', url: '', icon: 'archive' },
    { title: 'Item4', url: '', icon: 'trash' },
    { title: 'Item5', url: '', icon: 'warning' },
  ];

  constructor() { }

  ngOnInit() {}

}
