import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 裝飾器區塊，傳入裝飾器的資料為中繼資料（MetaData)
@NgModule({
  // 屬於此NgModule 的 Component、Directive、Pipe皆放於此
  declarations: [
    AppComponent
  ],
  // 此NgModule需要使用的其他NgModule放置於此
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Service放置於此
  providers: [
    Logger
  ],
  // 提供給其他NgModule使用的Component、Directive、Pipe、Service
  exports: [],
  // 不通過Route，而採用動態加入的Component
  entryComponent: [],
  // Root Component（根元件）放置於此
  bootstrap: [AppComponent]
})

// export給別處使用的類別
export class AppModule { }
