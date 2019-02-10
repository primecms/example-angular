import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, GraphQLModule, HttpClientModule, DateFnsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
