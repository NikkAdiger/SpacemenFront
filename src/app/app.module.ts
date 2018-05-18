import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpacemenService } from './services/spacemen.service';
import { FilterPipe } from './pipes/filter.pipe';
import {SortPipe} from './pipes/sort.pipe';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpacemenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
