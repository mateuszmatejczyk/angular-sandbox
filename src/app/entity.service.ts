import { Injectable } from '@angular/core';

import { Entity } from './data/entity';

@Injectable()
export class EntityService {
  private data: Map<number, Entity> = new Map<number, Entity>();

  constructor() {
    this.addEntity({ id: 0, name: 'Swinia', points: 100 });
    this.addEntity({ id: 1, name: 'Seba', points: 50 });
    this.addEntity({ id: 2, name: 'Maciore', points: 300 });
  }

  getEntities(): Entity[] {
    return Array.from(this.data.values()).sort((e1, e2) => e2.points - e1.points);
  }

  addEntity(e: Entity): void {
    this.data.set(e.id, e);
  }
}
