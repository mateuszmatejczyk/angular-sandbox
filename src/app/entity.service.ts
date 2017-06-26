import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Entity } from './data/entity';

@Injectable()
export class EntityService {
  private dataSubject: BehaviorSubject<Entity[]>;
  private data: Map<number, Entity> = new Map<number, Entity>();

  readonly entities: Observable<Entity[]>;

  constructor() {
    this.dataSubject = new BehaviorSubject(this.extractEntities());
    this.entities = this.dataSubject.asObservable();

    this.addEntity({ id: 0, name: 'Swinia', points: 0 });
    this.addEntity({ id: 1, name: 'Seba', points: 0 });
    this.addEntity({ id: 2, name: 'Maciore', points: 0 });
    this.addEntity({ id: 3, name: 'Pulpe', points: 0 });

    setInterval( () => {
      const i = Math.floor(Math.random() * this.data.size);
      const e = this.data.get(i);
      e.points += 10;

      this.updateSubscribers();
    }, 200);
  }

  addEntity(e: Entity): void {
    this.data.set(e.id, e);
    this.updateSubscribers();
  }

  private updateSubscribers(): void {
    this.dataSubject.next(this.extractEntities());
  }

  private extractEntities(): Entity[] {
    return Array.from(this.data.values()).sort((e1, e2) => e2.points - e1.points);
  }
}
