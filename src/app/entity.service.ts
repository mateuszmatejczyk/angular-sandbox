import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Entity } from './data/entity';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntityService {
  private dataSubject: BehaviorSubject<Entity[]>;
  private data: Map<number, Entity> = new Map<number, Entity>();

  readonly entities: Observable<Entity[]>;

  constructor(private http: Http) {
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

  getData(): Promise<any> {
    return this.http.get('/api')
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

  private updateSubscribers(): void {
    this.dataSubject.next(this.extractEntities());
  }

  private extractEntities(): Entity[] {
    return Array.from(this.data.values()).sort((e1, e2) => e2.points - e1.points);
  }
}
