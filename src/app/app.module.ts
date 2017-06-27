import { AboutComponent } from './about/about.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntityService } from './entity.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    AddEntityComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [EntityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
