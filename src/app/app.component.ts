import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

interface Message {
  text: string,
  date: Date,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'docker-app';
  messages$ = this.http.get<[Message]>(environment.apiUrl + '/messages/');

  constructor(private http: HttpClient) {
  }
}
