import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit , OnChanges {
  private title = '';
  constructor() { }

  ngOnChanges() : void {
    console.log('onchanges');
  }

  ngOnInit(): void {
    console.log('oninit');
  }

}
