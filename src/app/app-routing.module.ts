import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsListComponent } from './news/news-list.component';
import { NewsModule } from './news/news.module';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
  // ,{ path: 'NewsList',   component: NewsListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ,NewsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
