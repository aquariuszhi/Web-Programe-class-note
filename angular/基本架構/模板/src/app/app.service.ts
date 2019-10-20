// 處理資料
import { Injectable } from '@angular/core';

import { App } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // 宣告私有變數
  private list: App[] = [];

  constructor() { }

  // 新增代辦事項
  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new App(title));
    }
  }
  // 取得私有變數list的資料
  getList(): App[] {
    return this.list;
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }

  getWithCompleted(completed: boolean): App[] {
    return this.list.filter(todo => todo.done === completed);
  }

  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
