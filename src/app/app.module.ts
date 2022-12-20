import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsModule } from './news/news.module';

import { RouterModule } from '@angular/router';
import { NewsListComponent } from './news/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // RouterModule.forRoot([
    //   { path: 'dashboard', component: DashboardComponent},
    //   { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    //   { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    // ])
    // NewsModule

  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
