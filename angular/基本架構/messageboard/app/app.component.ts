import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  content = '';

  messages: Message[] = [];

  addMessage(): void {

    // 避免名稱或內容為空值
    if (!this.name.trim() || !this.content.trim()){
      return;
    }
    // 用名稱跟內容產生一個留言的資料物件
    const message = new Message(this.name, this.content);
    // 將留言的資料物件放進容器裡
    this.messages.push(message);
    // 清空內容
    this.content = '';

    console.log(this.messages);
  }
}
