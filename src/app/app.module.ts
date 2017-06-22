import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntityService } from './entity.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    AddEntityComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [EntityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
