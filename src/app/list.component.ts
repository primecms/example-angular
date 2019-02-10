import { Component, OnInit } from '@angular/core';
import { AllBlogGQL, BlogConnectionEdge } from './generated/graphql';

@Component({
  selector: 'app-list',
  template: `
    <h1>Blog posts</h1>
    <div *ngIf="loading">
      Loading...
    </div>
    <div *ngFor="let edge of allBlogEdges">
      <time dateTime="{{edge.node._meta.updatedAt}}">{{edge.node._meta.updatedAt | dfnsFormat: 'YYYY/MM/DD'}}</time>
      <h3>{{edge.node.title}}</h3>
    </div>
  `,
})
export class ListComponent implements OnInit {

  loading = true;
  error: any;

  allBlogEdges: BlogConnectionEdge[];

  constructor(private allPostsGQL: AllBlogGQL) {}

  ngOnInit() {
    this.allPostsGQL.watch()
    .valueChanges.subscribe((result) => {
      if (result.errors) {
        this.error = result.errors[0];
      } else {
        this.allBlogEdges = result.data.allBlog.edges;
      }
      this.loading = false;
    });
  }
}
