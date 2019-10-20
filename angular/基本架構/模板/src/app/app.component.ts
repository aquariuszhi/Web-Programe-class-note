import { Component } from '@angular/core';

import { appPath } from './app-path.const';

import { AppService } from './app.service';

import { App } from './app.model';

import { AppStatusType } from './app.enum';

// Component負責定義與控制畫面
@Component({
  // 選擇器，Angular會在html尋找<app-root>標籤，並創見出該Component實體插入其中
  selector: 'app-root',
  // 此Component的html檔案位置（相對位置）
  templateUrl: './app.component.html',
  // 此Component的CSS檔案位置（相對位置）
  styleUrls: ['./app.component.scss'],
  // 直接放html語法(不建議使用)
  tempeate: '',
  // 直接放css語法(不建議使用)
  style: '',
  // Service放置於此，且實體數量跟該Component實體數量應一致
  provider: []
})

export class AppComponent {

  // 注入service
  constructor(private appService: AppService) {
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  // 差值表達式變數放置位置
  title = 'app';
  path = appPath;

  
  // inputRef為html使用$event.target取到的當前觸發事件元素實體
  // HTMLInputElement為inputRef的資料類型
  addTodo(inputRef: HTMLInputElement)： void {
    // 將資料加入service
    this.appService.add(todo);
    inputRef.value = '';
  }

  // 從sevice取得資料
  getList(): App[] {
    return this.appService.getList();
  }
}
