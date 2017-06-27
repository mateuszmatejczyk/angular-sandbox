import { Component, OnInit } from '@angular/core';

import { EntityService } from '../entity.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  private numClicks = 0;
  data: String;


  constructor(private service: EntityService) { }

  onButtonClicked() {
    ++this.numClicks;
    console.log(`Button clicked ${this.numClicks}`);
    this.data = `Pulpek Clicked ${this.numClicks}`;
    this.service.getData().then(data => {
      console.log(data);
      this.data = `${data.message} ${data.number}`;
    });
  }
}
