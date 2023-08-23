import { Component } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone : true,
  imports : [DefaultComponent,SignalsComponent]
})
export class AppComponent {
  title = 'angular_twelve_signals';
}
