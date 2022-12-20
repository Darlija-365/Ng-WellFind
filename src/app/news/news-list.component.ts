import { Component, OnDestroy, OnInit } from '@angular/core';
import { INews } from './news';
import { NewsService } from './news.service';

@Component({
  // selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit, OnDestroy {

  newsList: INews[] = [];

  pageTitle = 'News Articles';
  errorMessage: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsList();
  }

  getNewsList(): void {
    this.newsService.getNewsList()
     .subscribe(nl => this.newsList = nl);
  }

  ngOnDestroy(): void {
    // Unsubscribe for http not required ?
    // this.newsService.getNewsList().unsubscribe();

  }

}
