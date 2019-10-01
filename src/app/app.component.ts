import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-proj';

  isDisabled : boolean ;

  onActivate(event){
    debugger
console.log('Thsi is : '+event);
  }
}
