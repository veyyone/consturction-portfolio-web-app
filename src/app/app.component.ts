import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact() {
        window.alert('Contact us at veyyone@gmail.com or call +91 98**833**88');
  }
}
