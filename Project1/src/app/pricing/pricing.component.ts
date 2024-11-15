import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PRICINGComponent implements OnInit {

  tab1 = 'none';
  tab2 = 'none';
  tab3 = 'none';
  im1 = 'inline-block';
  im2 = 'inline-block';
  im3 = 'inline-block';
  imb1 = 'none';
  imb2 = 'none';
  imb3 = 'none';

  constructor() { }

  ngOnInit() {
    this.vesibelity(0);
  }

  vesibelity(i: number) {
    if (i === 1) {
      if (this.tab1 === 'none') {
        this.tab1 = 'flex';
        this.im1 = 'none';
        this.imb1 = 'inline-block';
      } else {
        this.tab1 = 'none';
        this.im1 = 'inline-block';
        this.imb1 = 'none';
      }
    }
    if (i === 2) {
      if (this.tab2 === 'none') {
        this.tab2 = 'flex';
        this.im2 = 'none';
        this.imb2 = 'inline-block';
      } else {
        this.tab2 = 'none';
        this.im2 = 'inline-block';
        this.imb2 = 'none';
      }
    }
    if (i === 3) {
      if (this.tab3 === 'none') {
        this.tab3 = 'flex';
        this.im3 = 'none';
        this.imb3 = 'inline-block';
      } else {
        this.tab3 = 'none';
        this.im3 = 'inline-block';
        this.imb3 = 'none';
      }
    }
  }
}
