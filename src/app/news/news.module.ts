import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent } from './news-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsListComponent
    // ,
    // NewsDetailComponent
  // ]
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'newslist',   component: NewsListComponent },
      { path: 'NewsDetail/:id', component: NewsDetailComponent }
    ])
  ]
})

export class NewsModule { }
