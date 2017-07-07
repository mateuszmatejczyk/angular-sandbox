import { Component, OnInit } from '@angular/core';

import { Entity } from '../data/entity';
import { EntityService } from '../entity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  entities: Entity[];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.entityService.entities.subscribe((data) => this.entities = data);
  }
}
