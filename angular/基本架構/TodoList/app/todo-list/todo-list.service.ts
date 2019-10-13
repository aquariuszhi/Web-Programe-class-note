// 處理資料
import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: Todo[] = [];

  constructor() { }

  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }
  // 取得私有變數list的資料
  getList(): Todo[] {
    return this.list;
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }

  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }

  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
