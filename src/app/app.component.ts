import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Phone_Diary';

  constructor(private http: HttpClient, private aService: AuthService) {}

  ngOnInit() {}

  isAuthenticated(){
    return this.aService.isAuthenticated();
  }
}
